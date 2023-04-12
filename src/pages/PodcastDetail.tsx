import { useLoaderData, useParams } from 'react-router-dom'
import { VIEW_MODE_FULL } from '../components/Podcasts/contants'
import Header from '../components/Header/Header'
import Podcast from '../components/Podcasts/Podcast'

export const PodcastDetail = () => {
  const data = useParams()
  return (
    <Header>
      <Podcast id={data.podcastId} viewMode={VIEW_MODE_FULL} />
    </Header>
  )
}
