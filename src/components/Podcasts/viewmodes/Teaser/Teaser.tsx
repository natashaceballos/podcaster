import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTeaser } from './useTeaser'
import { Serie } from '@/types/Serie'
import ImageLoader from '@/components/ImageLoader/ImageLoader'

const Teaser: FC<{ serie: Serie }> = ({ serie }) => {
  const {
    actions: { handleOnClick },
  } = useTeaser()

  return (
    <Link to={`/podcast/${serie.id.attributes?.id}`}>
      <div
        onClick={() =>handleOnClick(serie.id.attributes?.id)}
        className="flex flex-col shadow-card items-center text-center pt-24 pb-2 px-2 rounded-md h-fit relative"
      >
        <ImageLoader
          src={serie.image[0].label ?? ''}
          alt={serie.title.label}
          rounded
          className="absolute rounded-full -top-8 w-24"
        />
        <div>{serie.title.label.split('-')[0].trim() ?? ''}</div>
        <div>Author: {serie.artist.label}</div>
      </div>
    </Link>
  )
}

export default Teaser
