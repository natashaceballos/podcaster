import { useEffect, useState } from "react";
import { HookOutput } from "../../hooks/types";
import { usePodcastingProvider } from "../PodcastingProvider/PodcastingProvider";
import { Serie } from "../../types/Serie";

let timeout: ReturnType<typeof setTimeout>

export const useSearcher =():HookOutput=>{

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

    return {state:{filteredSeries, query},actions:{handleOnChange}}
}