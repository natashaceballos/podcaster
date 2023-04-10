import { FC, useRef } from 'react'
import { EpisodeData, SerieDetail } from '../../../../types/SerieDetail'
import PodcatsDetail from '../Full/components/PodcatsDetail/PodcatsDetail'

const Episode: FC<{ serie: SerieDetail; episode: EpisodeData }> = ({
  serie,
  episode,
}) => {
  return (
    <div className="w-full  flex flex-row">
      <PodcatsDetail podcast={serie} />
      <div className="w-full h-fit max-w-3xl flex flex-col shadow-card rounded-md">
        <p className="font-bold text-3xl p-3">{episode.trackName}</p>

        <div
          dangerouslySetInnerHTML={{ __html: episode.description }}
          className="italic pb-5"
        />

        <audio controls className="w-full">
          <source
            src={episode.episodeUrl}
            type={`${episode.episodeContentType}/${episode.episodeFileExtension}`}
          />
        </audio>
      </div>
    </div>
  )
}

export default Episode
