import {
  Children,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { HookOutput } from '../../hooks/types'
import { initialFetch } from '../../services/api'
import { formatPodcasts } from '../../helpers/types'
import { useHref, useResolvedPath, useRoutes } from 'react-router-dom'
import { Serie } from '../../types/Serie'

const PodcastingContext = createContext<{
  series: Serie[]
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
} | null>(null)

export const usePodcastingProvider = (): HookOutput => {
  const context = useContext(PodcastingContext)

  if (!context) {
    throw new Error(
      'usePodcastingProvider debe ser usado dentro de un PodcastingProvider'
    )
  }

  const { series, isLoading, setIsLoading } = context
  return { state: { series, isLoading }, actions: { setIsLoading } }
}

const PodcastingProvider = ({ children }: { children: ReactNode }) => {
  const [series, setSeries] = useState<Serie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [fetchDate, setFetchDate] = useState(new Date().getTime())

  const fetchPodcasts = () => {
    initialFetch().then((response) => {
      const formattedPodcasts: Serie[] = []
      response.map((r: any) => {
        formattedPodcasts.push(formatPodcasts(r))
      })
      setSeries(formattedPodcasts)
    })
  }

  useEffect(() => {
    fetchPodcasts()
  }, [])

  const value = useMemo(
    () => ({ series, isLoading, setIsLoading }),
    [{ series, isLoading, setIsLoading }]
  )
  return (
    <PodcastingContext.Provider value={value}>
      {children}
    </PodcastingContext.Provider>
  )
}

export default PodcastingProvider
