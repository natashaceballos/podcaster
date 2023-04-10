export type SerieDetail = {
  wrapperType: string
  kind: string
  artistId: string
  collectionId: string
  trackId: string
  artistName: string
  collectionName: string
  trackName: string
  collectionCensoredName: string
  trackCensoredName: string
  artistViewUrl: string
  collectionViewUrl: string
  feedUrl: string
  trackViewUrl: string
  artworkUrl30: string
  artworkUrl60: string
  artworkUrl100: string
  collectionPrice: number
  trackPrice: number
  collectionHdPrice: number
  releaseDate: string
  collectionExplicitness: string
  trackExplicitness: string
  trackCount: number
  trackTimeMillis: number
  country: string
  currency: string
  primaryGenreName: string
  contentAdvisoryRating: string
  artworkUrl600: string
  genreIds: string[]
  genres: string[]
}

export type EpisodeData = {
  country:string
  artworkUrl600:string
  artworkUrl160:string
  episodeFileExtension:string
  episodeContentType:string
  genres: [
    {
      name:string
      id:string
    }
  ]
  episodeGuid:string
  feedUrl:string
  closedCaptioning:string
  description:string
  collectionId:string
  collectionName:string
  artistIds: string[]
  shortDescription: string
  trackId:string
  trackName:string
  releaseDate:string
  episodeUrl:string
  previewUrl:string
  artworkUrl60:string
  contentAdvisoryRating:string
  trackViewUrl:string
  collectionViewUrl:string
  trackTimeMillis:string
  kind:string
  wrapperType:string
}

export type SerieResponse = {
  serie: SerieDetail
  episodes: EpisodeData[]
}
