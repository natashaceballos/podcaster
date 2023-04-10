import { FC, ReactNode, useState } from 'react'
import ImageLoader from '../ImageLoader/ImageLoader'
import Indicator from './components/Indicator/Indicator'
import { Link } from 'react-router-dom'
import { usePodcastingProvider } from '../PodcastingProvider/PodcastingProvider'

const Header: FC<{ children: ReactNode }> = ({ children }) => {
const{state:{isLoading}} = usePodcastingProvider()

  return (
    <div className="w-full">
      <div className="mb-10">
        <div className="flex flex-row items-center">
        <Link to='/' ><a className="text-2xl font-bold text-cyan-700 mb-5">Podcaster </a></Link>
          <div className="w-full" />
          <Indicator isLoading={isLoading} />
        </div>
        <hr />
      </div>
      {children}
    </div>
  )
}

export default Header
