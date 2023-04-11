import { useLoaderData, useParams } from 'react-router-dom'
import { VIEW_MODE_FULL } from '../components/Podcasts/contants'
import Header from '../components/Header/Header'
import Podcast from '../components/Podcasts/Podcast'
import { SerieResponse } from '../types/SerieDetail'

export const PodcastDetail = () => {
  return (
    <Header>
      <Podcast viewMode={VIEW_MODE_FULL} />
    </Header>
  )
}
