import { usePodcastingProvider } from '@/components/PodcastingProvider/PodcastingProvider'
import { HookOutput } from '@/types/Hook'
import { Serie } from '@/types/Serie'
import { SerieDetail } from '@/types/SerieDetail'
import { useEffect, useState } from 'react'


export const usePodcatsDetail = (serie: SerieDetail): HookOutput => {
  const [description, setDescription] = useState<string>('')
  const {
    state: { series },
    actions: { setIsLoading },
  } = usePodcastingProvider()

  const getDescription = async () => {
    const serieSelected = series.filter(
      (serieOfFetch: Serie) =>
        serieOfFetch.id.attributes?.id == serie.collectionId
    )
    setDescription(serieSelected[0].summary.label)
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    getDescription()
  }, [serie])

  return { state: { description }, actions: {} }
}
