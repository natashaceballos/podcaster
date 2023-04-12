import { useEffect, useState } from 'react'
import { usePodcastingProvider } from '../PodcastingProvider/PodcastingProvider'
import { HookOutput } from '@/types/Hook'
import { Serie } from '@/types/Serie'

let timeout: ReturnType<typeof setTimeout>

export const useSearcher = (): HookOutput => {
  const {
    state: { series, filteredSeries },
    actions: { setIsLoading, setFilteredSeries },
  } = usePodcastingProvider()
  const [filter, setFilter] = useState('')
  const [query, setquery] = useState('')

  const handleOnChange = (query: string) => {
    setIsLoading(true)
    clearTimeout(timeout)
    setquery(query)
    timeout = setTimeout(() => {
      setIsLoading(false)
      setFilter(query)
    }, 500)
  }

  useEffect(() => {
    const filteredItems = series.filter((serie: Serie) =>
      serie.title.label.toLowerCase().includes(filter.toLowerCase())
    )
    setFilteredSeries(filteredItems)
  }, [filter])

  return { state: { filteredSeries, query }, actions: { handleOnChange } }
}
