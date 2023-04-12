import { FC } from 'react'
import { VIEW_MODE_TEASER } from './contants'
import { Full, Teaser } from './viewmodes'
import { Serie } from '@/types/Serie'

const Podcast: FC<{
  serie?: Serie 
  viewMode: string
  id?:string
}> = ({ serie, viewMode,id, ...props }) => {
  return (
    <div>
      {(() => {
        switch (viewMode) {
          case VIEW_MODE_TEASER:
            return <Teaser serie={serie as Serie} {...props} />
          case VIEW_MODE_TEASER:
            return <Full id={id} {...props} />

          default:
            return <Full id={id} {...props} />
        }
      })()}
    </div>
  )
}

export default Podcast
