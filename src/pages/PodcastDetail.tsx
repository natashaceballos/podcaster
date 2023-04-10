import { RouterProps, useLoaderData, useParams } from 'react-router-dom'
import { VIEW_MODE_FULL } from '../components/Podcasts/contants'
import Header from '../components/Header/Header'
import { Suspense, useEffect } from 'react'
import { CustomSuspense } from '../components/CustomSuspense/CustomSuspense'
import { usePodcastingProvider } from '../components/PodcastingProvider/PodcastingProvider'
import Podcast from '../components/Podcasts/Podcast'
import { SerieResponse } from '../types/SerieDetail'



export const PodcastDetail = () => {
  const data = useLoaderData()
  return (
    <Header>
     <Podcast serie={data as SerieResponse} viewMode={VIEW_MODE_FULL}/>     
    </Header>
  )
}
