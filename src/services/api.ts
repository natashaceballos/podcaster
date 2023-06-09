import {
  URL_GET_SERIE_1,
  URL_GET_SERIE_2,
  URL_INITAL_FETCH,
} from '../constans/urlConstans'
import { SerieResponse } from '../types/SerieDetail'

export const initialFetch = async () => {
  return await fetch(URL_INITAL_FETCH)
    .then((response: Response) => {
      return response
        .json()
        .then((data) => {
          return data.feed.entry
        })
        .catch((error) => {
          console.error('Error en el fetch inicial', error)
        })
    })

    .catch((error) => console.error('Error en el fetch inicial', error))
}

export const getSerie = async (id?: string): Promise<SerieResponse | null> => {
  if (id === undefined) {
    return null
  }

  return await fetch(`${URL_GET_SERIE_1}${id}${URL_GET_SERIE_2}`)
    .then((response: Response) => {
      return response
        .json()
        .then((data) => {
          return { serie: data.results[0], episodes: data.results.slice(1) }
        })
        .catch((error) => {
          console.error(`Error en el fetch del podcats con id: ${id}`, error)
          return null
        })
    })

    .catch((error) => {
      console.error(`Error en el fetch del podcats con id: ${id}`, error)
      return null
    })
}
