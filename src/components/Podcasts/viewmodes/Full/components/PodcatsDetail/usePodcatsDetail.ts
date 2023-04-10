import { useEffect, useState } from "react";
import { SerieDetail } from "../../../../../../types/SerieDetail";
import { HookOutput } from "../../../../../../hooks/types";
import { getDescription } from "../../../../../../services/api";
import { usePodcastingProvider } from "../../../../../PodcastingProvider/PodcastingProvider";
import { Serie } from "../../../../../../types/Serie";

export const usePodcatsDetail = (serie:SerieDetail):HookOutput=>{
    const [description, setDescription] = useState<string>('')
    const {state:{series},actions:{setIsLoading}} = usePodcastingProvider()

    const getDescription =async () => {
        const serieSelected = series.filter((serieOfFetch:Serie)=>serieOfFetch.id.attributes?.id == serie.collectionId)
        setDescription(serieSelected[0].summary.label)
        setIsLoading(false)
    }

    useEffect(() => {
        setIsLoading(true)
        getDescription()
    }, [serie])
    

    return {state:{description},actions:{}}
}