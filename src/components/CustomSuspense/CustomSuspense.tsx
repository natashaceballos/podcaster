import { ReactNode, Suspense, useEffect } from 'react'
import { usePodcastingProvider } from '../PodcastingProvider/PodcastingProvider'

type CustomSuspenseProps = {
  children?: ReactNode
}
const CustomSuspense = ({ children }: CustomSuspenseProps) => {
  const {state:{isLoading},actions:{setIsLoading}}=usePodcastingProvider()

  useEffect(() => {
    setIsLoading(!isLoading)
  
    return () => {
      setIsLoading(false)
    }
  }, [])
  
  return <Suspense fallback={<div>CARGANDO</div>}>{children}</Suspense>
}

export { CustomSuspense }
