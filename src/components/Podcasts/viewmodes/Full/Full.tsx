import { FC } from 'react'
import { Link } from 'react-router-dom'
import { formatTime } from './helper'
import clsx from 'clsx'
import PodcatsDetail from './components/PodcatsDetail/PodcatsDetail'
import { useFull } from './useFull'
import { EpisodeData } from '@/types/SerieDetail'

const Full: FC<{}> = ({}) => {
  const {
    state: {
      serie
    },
    actions: { setIsLoading },
  } = useFull()

  if (serie == undefined) {
    return <></>
  }
  return (
    <div className="w-full grid grid-flow-col">
      <PodcatsDetail podcast={serie.serie} />
      <div className="w-full flex flex-col gap-y-8">
        <div className="rounded-sm shadow-card font-bold text-3xl p-3">
          Episodes: {serie.episodes.length}
        </div>
        <div className="shadow-card w-full">
          <div className="m-5 max-w-4xl">
            <table className="w-full table-auto ">
              <thead className="text-justify">
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Durantion</th>
                </tr>
              </thead>
              <tbody>
                {serie.episodes.map((episode: EpisodeData, key: number) => {
                  const date: Date = new Date(episode.releaseDate)
                  return (
                    <tr
                      key={key}
                      className={clsx(
                        'border-collapse border-y border-slate-300 h-10',
                        (key == 0 || key % 2 == 0) && 'bg-slate-100'
                      )}
                    >
                      <td
                        className="text-cyan-700"
                        onClick={() => setIsLoading(true)}
                      >
                        <Link
                          to={`/podcast/${serie.collectionId}/episode/${episode.trackId}`}
                          state={{ serie: serie.serie, episode: episode }}
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
