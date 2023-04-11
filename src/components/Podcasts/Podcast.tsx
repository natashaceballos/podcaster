import { FC } from 'react'
import { VIEW_MODE_TEASER } from './contants'
import { Full, Teaser } from './viewmodes'
import { Serie } from '@/types/Serie'

const Podcast: FC<{
  serie?: Serie 
  viewMode: string
}> = ({ serie, viewMode, ...props }) => {
  return (
    <div>
      {(() => {
        switch (viewMode) {
          case VIEW_MODE_TEASER:
            return <Teaser serie={serie as Serie} {...props} />
          case VIEW_MODE_TEASER:
            return <Full  {...props} />

          default:
            return <Full  {...props} />
        }
      })()}
    </div>
  )
}

export default Podcast
