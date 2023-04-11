import { HashRouter, Router } from 'react-router-dom'

import { HookOutput } from '@/types/Hook'
import { usePodcastingProvider } from '@/components/PodcastingProvider/PodcastingProvider'
import { SerieResponse } from '@/types/SerieDetail'
import { useEffect, useState } from 'react'

export const useFull = (): HookOutput => {
  const {
    state: { serieSelected },
    actions: { setIsLoading },
  } = usePodcastingProvider()

  const [serie, setSerie] = useState<SerieResponse>()

  useEffect(() => {
    console.log(serieSelected)
    setSerie(serieSelected.podcastData)
    setIsLoading(false)
  }, [serieSelected])

  return { state: { serie }, actions: { setIsLoading } }
}
