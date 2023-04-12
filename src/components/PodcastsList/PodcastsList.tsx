import { FC, useEffect, useState } from 'react'
import { usePodcastingProvider } from '../PodcastingProvider/PodcastingProvider'
import Podcast from '../Podcasts/Podcast'
import { VIEW_MODE_TEASER } from '../Podcasts/contants'
import Searcher from '../Searcher/Searcher'
import { Serie } from '@/types/Serie'

const PodcastsList: FC<{}> = ({}) => {
  const {
    state: { filteredSeries, isLoading },
    actions: { setIsLoading },
  } = usePodcastingProvider()

  useEffect(() => {
    setIsLoading(false)
  }, [isLoading])

  return (
    <div>
      <Searcher />
      <div className="grid md:grid-cols-4 gap-x-10 gap-y-16 grid-cols-2">
        {filteredSeries.map((serie: Serie, key: number) => (
          <Podcast key={key} serie={serie} viewMode={VIEW_MODE_TEASER} />
        ))}
      </div>
    </div>
  )
}

export default PodcastsList
