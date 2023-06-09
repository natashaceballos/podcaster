import { useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import Episode from '../components/Podcasts/viewmodes/Episode/Episode'

export const EpisodeDetail = () => {
  const location = useLocation()

  return (
    <Header>
      <Episode episode={location.state.episode} />
    </Header>
  )
}
