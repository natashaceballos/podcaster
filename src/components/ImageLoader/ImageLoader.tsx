import { FC, useEffect, useState } from 'react'
import clsx from 'clsx';

const ImageLoader: FC<{ src: string; alt: string; className?: string, rounded?:boolean }> = ({
  src,
  alt,
  className,
  rounded=false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    const loadImage = async () => {
      const image = new Image()
      image.src = src
      await image.decode()
      setImageUrl(image.src)
      setImageLoaded(true)
    }

    loadImage()
    
  }, [])

  return (
    <>
      {!imageLoaded ? (
        <div className='w-full h-full'>Loading image...</div>
      ) : (
        <img src={imageUrl} alt={alt} className={clsx(className)} />
      )}
    </>
  )
}

export default ImageLoader
