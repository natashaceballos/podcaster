import ReactDOM from 'react-dom/client'
import '../styles/globals.css'
import PodcastingProvider from './components/PodcastingProvider/PodcastingProvider'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Index } from './pages/Index'
import { PodcastDetail } from './pages/PodcastDetail'
import { EpisodeDetail } from './pages/EpisodeDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/podcast/:podcastId',
    element: <PodcastDetail />,
  },
  {
    path: '/podcast/:podcastId/episode/:episodeId',
    element: <EpisodeDetail />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <PodcastingProvider>
    <div className="max-w-7xl xl:m-auto mx-7">
      <RouterProvider router={router} />
    </div>
  </PodcastingProvider>
)
