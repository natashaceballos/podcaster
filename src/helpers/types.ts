import { Serie } from "../types/Serie"

export const formatPodcasts = (initialPodcast: any): Serie => {
  // cambiamos el 'im:id' por 'id'
  initialPodcast.id.attributes.id = initialPodcast.id.attributes['im:id']
  delete initialPodcast.id.attributes['im:id']

  initialPodcast.category.attributes.id =
    initialPodcast.category.attributes['im:id']
  delete initialPodcast.category.attributes['im:id']

  // cambiamos el 'im:artist' por 'artist'
  initialPodcast.artist = initialPodcast['im:artist']
  delete initialPodcast['im:artist']

  // cambiamos el 'im:contentType' por 'contentType'
  initialPodcast.contentType = initialPodcast['im:contentType']
  delete initialPodcast['im:contentType']

  // cambiamos el 'im:image' por 'image'
  initialPodcast.image = initialPodcast['im:image']
  delete initialPodcast['im:image']

  // cambiamos el 'im:name' por 'name'
  initialPodcast.name = initialPodcast['im:name']
  delete initialPodcast['im:name']

  // cambiamos el 'im:price' por 'price'
  initialPodcast.price = initialPodcast['im:price']
  delete initialPodcast['im:price']

  // cambiamos el 'im:releaseDate' por 'releaseDate'
  initialPodcast.releaseDate = initialPodcast['im:releaseDate']
  delete initialPodcast['im:releaseDate']

  return initialPodcast
}
