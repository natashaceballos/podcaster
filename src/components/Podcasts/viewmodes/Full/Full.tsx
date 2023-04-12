import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { formatTime } from './helper'
import clsx from 'clsx'
import PodcatsDetail from './components/PodcatsDetail/PodcatsDetail'
import { useFull } from './useFull'
import { EpisodeData } from '@/types/SerieDetail'

const Full: FC<{ id?: string }> = ({ id }) => {
  const {
    state: { serie },
  } = useFull(id)

  if (serie == undefined) {
    return <></>
  }

  return (
    <div className="w-full gap-x-4 grid-flow-row gap-y-10 pb-10 grid md:grid-flow-col">
      <PodcatsDetail podcast={serie.serie} />
      <div className="w-full flex flex-col max-w-lg md:max-w-3xl m-auto md:m-0 gap-y-8">
        <div className="rounded-sm shadow-card font-bold text-3xl p-3">
          Episodes: {serie.episodes.length}
        </div>
        <div className="shadow-card w-full">
          <div className="m-5 ">
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
                      >
                        <Link
                          to={`/podcast/${serie.serie.collectionId}/episode/${episode.trackId}`}
                          state={{ episode: episode }}
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
