import { FC } from 'react'
import ImageLoader from '../ImageLoader/ImageLoader'
import { Link } from 'react-router-dom'
import { VIEW_MODE_TEASER } from './contants'
import { Full, Teaser } from './viewmodes'
import { Serie } from '../../types/Serie'
import { SerieDetail, SerieResponse } from '../../types/SerieDetail'

const Podcast: FC<{ serie: Serie | SerieResponse; viewMode: string }> = ({
  serie,
  viewMode,
  ...props
}) => {
  return (
    <div>
      {(() => {
        switch (viewMode) {
          case VIEW_MODE_TEASER:
            return <Teaser serie={serie as Serie} {...props} />
          case VIEW_MODE_TEASER:
            return <Full serie={serie as SerieResponse} {...props} />

          default:
            return <Full serie={serie as SerieResponse} {...props} />
        }
      })()}
    </div>
  )
}

export default Podcast
