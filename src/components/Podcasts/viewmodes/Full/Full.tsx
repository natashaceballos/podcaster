import { FC } from 'react'
import { Link } from 'react-router-dom'
import { EpisodeData, SerieResponse } from '../../../../types/SerieDetail'
import { formatTime } from './helper'
import clsx from 'clsx'
import PodcatsDetail from './components/PodcatsDetail/PodcatsDetail'
import { usePodcastingProvider } from '../../../PodcastingProvider/PodcastingProvider'

const Full: FC<{ serie: SerieResponse }> = ({
  serie: { serie, episodes },
}) => {
  const {actions:{setIsLoading}}=usePodcastingProvider()

  return (
    <div className="w-full grid grid-flow-col">
      <PodcatsDetail podcast={serie} />
      <div className="w-full flex flex-col gap-y-8">
        <div className="rounded-sm shadow-card font-bold text-3xl p-3">
          Episodes: {episodes.length}
        </div>
        <div className="shadow-card w-full">
          <div className="m-5">
            <table className="w-full table-auto ">
              <thead className="text-justify">
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Durantion</th>
                </tr>
              </thead>
              <tbody>
                {episodes.map((episode: EpisodeData, key: number) => {
                  const date: Date = new Date(episode.releaseDate)
                  return (
                    <tr
                      key={key}
                      className={clsx(
                        'border-collapse border-y border-slate-300 h-10',
                        (key == 0 || key % 2 == 0) && 'bg-slate-100'
                      )}
                    >
                      <td className="text-cyan-700" onClick={()=>setIsLoading(true)}>
                        <Link
                          to={`/podcast/${serie.collectionId}/episode/${episode.trackId}`}
                          state={{ serie: serie, episode: episode }}
                        >
                          {episode.trackName}
                        </Link>
                      </td>
                      <td>{`${date.getDay()}/${
                        date.getMonth() + 1
                      }/${date.getFullYear()}`}</td>
                      <td>
                        {episode.trackTimeMillis
                          ? formatTime(episode.trackTimeMillis)
                          : '--:--'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Full
