import { FC, useRef } from 'react'
import { usePodcastingProvider } from '@/components/PodcastingProvider/PodcastingProvider';
import { EpisodeData, SerieDetail } from '@/types/SerieDetail';
import PodcatsDetail from '../Full/components/PodcatsDetail/PodcatsDetail';

const Episode: FC<{ episode: EpisodeData }> = ({
    episode,
}) => {
  const {
    state: { serieSelected },
  } = usePodcastingProvider()
  const serie = serieSelected.podcastData.serie
  
  return (
    <div className="w-full gap-x-4 flex flex-col gap-y-10 md:flex-row pb-10">
      <PodcatsDetail podcast={serie} />
      <div className="w-full h-fit max-w-lg md:max-w-3xl m-auto md:m-0 flex flex-col shadow-card rounded-md">
        <p className="font-bold text-3xl p-3">{episode.trackName}</p>

        <div
          dangerouslySetInnerHTML={{ __html: episode.description }}
          className="italic pb-5 px-2"
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
