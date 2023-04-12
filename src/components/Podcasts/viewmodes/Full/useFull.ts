import { HashRouter, Router } from 'react-router-dom'

import { HookOutput } from '@/types/Hook'
import { usePodcastingProvider } from '@/components/PodcastingProvider/PodcastingProvider'
import { SerieResponse } from '@/types/SerieDetail'
import { useEffect, useState } from 'react'
import { timeToExpire } from '@/constans/timeConstans'
import { getSerie } from '@/services/api'
import { LocalStorageList } from '@/types/LocalStorageList'

export const useFull = (id?: string): HookOutput => {
  const {
    actions: { setIsLoading, setSerieSelected },
  } = usePodcastingProvider()
  const [serie, setSerie] = useState<SerieResponse>()

  const handleSelected = async () => {
    if (id != undefined) {
      const podcatDetailJson = localStorage.getItem(id)
      if (podcatDetailJson != null) {
        const podcastDetail = JSON.parse(podcatDetailJson)
        const expirationTime =
          Date.now() - Number(podcastDetail.fetchDate)
        if (expirationTime <= timeToExpire) {
          setSerieSelected(podcastDetail)
          setSerie(podcastDetail.podcastData)
          setIsLoading(false)
          return
        }
      }
      const response = await getSerie(id.toString())

      const podcastDetail: LocalStorageList = {
        id: id,
        podcastData: response!,
        fetchDate: Date.now(),
      }

      localStorage.setItem(id, JSON.stringify(podcastDetail))
      setSerieSelected(podcastDetail)
      setSerie(podcastDetail.podcastData)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    handleSelected()
  }, [])

  return { state: { serie }, actions: { setIsLoading } }
}
