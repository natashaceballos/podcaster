import { FC } from 'react'
import { SerieDetail } from '../../../../../../types/SerieDetail'
import ImageLoader from '../../../../../ImageLoader/ImageLoader'
import { Link } from 'react-router-dom'
import { usePodcatsDetail } from './usePodcatsDetail'

const PodcatsDetail: FC<{ podcast: SerieDetail }> = ({ podcast }) => {
  const {
    state: { description },
  } = usePodcatsDetail(podcast)
  return (
    <div className=" rounded-sm mx-auto shadow-card max-w-xs pr-2 h-fit break-words flex flex-col gap-y-3">
      <Link to={`/podcast/${podcast.collectionId}`}>
        <ImageLoader
          src={podcast.artworkUrl600}
          alt={podcast.collectionName}
          className="px-5 pt-3"
        />
      </Link>
      <hr />
      <div className="flex flex-col">
        <Link to={`/podcast/${podcast.collectionId}`}>
          <p className="text-justify font-bold pl-2">
            {podcast.collectionName}
          </p>
        </Link>
        <p className="italic text-justify pl-2">by {podcast.artistName}</p>
      </div>
      <hr />
      <div className=" flex flex-col pl-2">
        <p className=" font-bold">Description:</p>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="italic pb-5"
        />
      </div>
    </div>
  )
}

export default PodcatsDetail
