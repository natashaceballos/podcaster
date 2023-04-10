import { FC } from 'react'
import {  SerieDetail } from '../../../../../../types/SerieDetail'
import ImageLoader from '../../../../../ImageLoader/ImageLoader'

const PodcatsDetail: FC<{ podcast: SerieDetail }> = ({ podcast }) => {
  return (
    <div className=" rounded-sm mx-auto shadow-card flex flex-col gap-y-3">
      <ImageLoader
        src={podcast.artworkUrl100}
        alt={podcast.collectionName}
        className="px-5 pt-3"
      />

      <hr />
      <div className="flex flex-col">
        <p className="text-center font-bold">{podcast.collectionName}</p>
        <p className="italic text-center">by {podcast.artistName}</p>
      </div>
      <hr />
      <div className=" flex flex-col">
        <p className=" font-bold">Description:</p>
      </div>
    </div>
  )
}

export default PodcatsDetail
