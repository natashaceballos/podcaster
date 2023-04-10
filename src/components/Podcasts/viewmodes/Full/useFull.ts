import { useEffect, useState } from "react";
import { HookOutput } from "../../../../hooks/types";
import { SerieDetail } from "../../../../types/SerieDetail";
import { getDescription } from "../../../../services/api";

export const useFull = (serie:SerieDetail):HookOutput=>{
    const [description, setDescription] = useState<string>('')

    const fetchDescription =async () => {
        const response = await getDescription(serie.feedUrl)
        setDescription(response)
    }

    useEffect(() => {
        fetchDescription()
    }, [serie])
    

    return {state:{description},actions:{}}
}