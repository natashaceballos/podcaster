import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.css'
import PodcastingProvider from './components/PodcastingProvider/PodcastingProvider'
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import { Index } from './pages/Index'
import { getSerie } from './services/api'
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
    loader: async ({ params }) => {
      const response = await getSerie(params.podcastId)
      return response
    },
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
