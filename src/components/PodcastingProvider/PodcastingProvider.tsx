import {
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
import { Serie } from '../../types/Serie'
import { timeToExpire } from '../../constans/timeConstans'

const PodcastingContext = createContext<{
  series: Serie[]
  filteredSeries: Serie[]
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  setFilteredSeries: (series: Serie[]) => void
} | null>(null)

export const usePodcastingProvider = (): HookOutput => {
  const context = useContext(PodcastingContext)

  if (!context) {
    throw new Error(
      'usePodcastingProvider debe ser usado dentro de un PodcastingProvider'
    )
  }

  const { series, filteredSeries, isLoading, setIsLoading, setFilteredSeries } =
    context
  return {
    state: { series, filteredSeries, isLoading },
    actions: { setIsLoading, setFilteredSeries },
  }
}

const PodcastingProvider = ({ children }: { children: ReactNode }) => {
  const [expirationTime, setExpirationTime] = useState(timeToExpire)
  const [series, setSeries] = useState<Serie[]>([])
  const [filteredSeries, setFilteredSeries] = useState<Serie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchPodcasts = () => {
    initialFetch().then((response) => {
      const formattedPodcasts: Serie[] = []
      response.map((r: any) => {
        formattedPodcasts.push(formatPodcasts(r))
      })
      setSeries(formattedPodcasts)
      setFilteredSeries(formattedPodcasts)
      setExpirationTime(timeToExpire)
    })
  }

  useEffect(() => {
    fetchPodcasts()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setExpirationTime((prevMilliseconds) => prevMilliseconds - timeToExpire)
    }, timeToExpire)
    return () => clearInterval(interval)
  }, [expirationTime])

  useEffect(() => {
    if (expirationTime == 0) {
      fetchPodcasts()
    }
  }, [expirationTime])

  const value = useMemo(
    () => ({
      series,
      isLoading,
      setIsLoading,
      filteredSeries,
      setFilteredSeries,
    }),
    [{ series, isLoading, setIsLoading }]
  )
  return (
    <PodcastingContext.Provider value={value}>
      {children}
    </PodcastingContext.Provider>
  )
}

export default PodcastingProvider
