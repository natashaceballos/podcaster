import { FC, ReactNode, useEffect, useState } from 'react'
import { usePodcastingProvider } from '../PodcastingProvider/PodcastingProvider'
import Podcast from '../Podcasts/Podcast'
import { VIEW_MODE_TEASER } from '../Podcasts/contants'
import { Serie } from '../../types/Serie'

const PodcastsList : FC<{ }> = ({
})=> {
  const {state:{series},actions:{setIsLoading}} =usePodcastingProvider()
  useEffect(() => {
    setIsLoading(false)
  
    return () => {
      setIsLoading(true)
    }
  }, [series])

  return (
    <div >
    <div className="grid md:grid-cols-4 gap-x-10 gap-y-16 grid-cols-2">
        {series.map((serie:Serie,key:number)=>(
          <Podcast key={key} serie={serie} viewMode={VIEW_MODE_TEASER}/>
        ))}
    </div>
    </div>
  )
}

export default PodcastsList
