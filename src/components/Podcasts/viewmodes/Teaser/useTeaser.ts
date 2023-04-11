import { HashRouter, Router, json } from 'react-router-dom'

import { getSerie } from '@/services/api'
import { HookOutput } from '@/types/Hook'
import { usePodcastingProvider } from '@/components/PodcastingProvider/PodcastingProvider'
import { LocalStorageList } from '@/types/LocalStorageList'
import { timeToExpire } from '@/constans/timeConstans'

export const useTeaser = (): HookOutput => {
  const {
    actions: { setIsLoading, setSerieSelected },
  } = usePodcastingProvider()

  const handleOnClick = async (id: string) => {
    setIsLoading(true)

    const podcatDetailJson = localStorage.getItem(id)
    if (podcatDetailJson != null) {
      const podcastDetail = JSON.parse(podcatDetailJson)
      const expirationTime =
        new Date().getDate() - Number(podcastDetail.fetchDate)
      if (expirationTime <= timeToExpire) {
        setSerieSelected(podcastDetail)
        return
      }
    }
    const response = await getSerie(id.toString())

    const podcastDetail: LocalStorageList = {
      id: id,
      podcastData: response!,
      fetchDate: new Date().getDate(),
    }
    localStorage.setItem(id, JSON.stringify(podcastDetail))
    setSerieSelected(podcastDetail)
  }

  return { state: {}, actions: { handleOnClick } }
}
