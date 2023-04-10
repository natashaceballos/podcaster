import clsx from 'clsx'
import { FC } from 'react'

const Indicator: FC<{isLoading:boolean}> = ({isLoading}) => {
  return (
    <div
      className={clsx(
        'w-5 h-5 mr-4 bg-cyan-700 rounded-full border-2 border-cyan-700 relative ',
        isLoading && 'animate-pulse-borde',
        !isLoading && 'hidden'
      )}
      data-testid='indicator'
    />
  )
}

export default Indicator
