import { timeToExpire } from '@/constans/timeConstans'
import { formatPodcasts } from '@/helpers/types'
import { initialFetch } from '@/services/api'
import { HookOutput } from '@/types/Hook'
import { LocalStorageList } from '@/types/LocalStorageList'
import { Serie } from '@/types/Serie'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const PodcastingContext = createContext<{
  series: Serie[]
  serieSelected?:LocalStorageList
  filteredSeries: Serie[]
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  setSerieSelected: (serie: LocalStorageList) => void
  setFilteredSeries: (series: Serie[]) => void
} | null>(null)

export const usePodcastingProvider = (): HookOutput => {
  const context = useContext(PodcastingContext)

  if (!context) {
    throw new Error(
      'usePodcastingProvider debe ser usado dentro de un PodcastingProvider'
    )
  }

  const { series, serieSelected, filteredSeries, isLoading, setIsLoading, setSerieSelected, setFilteredSeries } =
    context
  return {
    state: { series, serieSelected, filteredSeries, isLoading },
    actions: { setIsLoading, setSerieSelected, setFilteredSeries },
  }
}

const PodcastingProvider = ({ children }: { children: ReactNode }) => {
  const [series, setSeries] = useState<Serie[]>([])
  const [serieSelected, setSerieSelected] = useState<LocalStorageList>()

  const [filteredSeries, setFilteredSeries] = useState<Serie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchPodcasts = () => {
    initialFetch().then((response) => {
      const formattedPodcasts: Serie[] = []
      response.map((r: any) => {
        formattedPodcasts.push(formatPodcasts(r))
      })
      setSeries(formattedPodcasts)
      localStorage.setItem('podcasts', JSON.stringify(formattedPodcasts))
      setFilteredSeries(formattedPodcasts)
      localStorage.setItem('lastFetch',  Date.now().toString())
    })
  }

  useEffect(() => {
    const lastFetch = localStorage.getItem('lastFetch')
    if (lastFetch != null) {
      const expirationTime = Date.now() - Number(lastFetch)
      if (expirationTime >= timeToExpire) {
        fetchPodcasts()
      } else {
        const podcastsJson = localStorage.getItem('podcasts')
        if (podcastsJson != null) {
          setSeries(JSON.parse(podcastsJson))
          setFilteredSeries(JSON.parse(podcastsJson))
        }
      }
    } else {
      fetchPodcasts()
    }
  }, [])

  const value = useMemo(
    () => ({
      series,
      serieSelected,
      isLoading,
      setIsLoading,
      filteredSeries,
      setFilteredSeries,
      setSerieSelected,
    }),
    [{ series, serieSelected ,isLoading, setIsLoading }]
  )
  return (
    <PodcastingContext.Provider value={value}>
      {children}
    </PodcastingContext.Provider>
  )
}

export default PodcastingProvider
