import { useEffect, useRef, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  onLazyLoad?: (img: HTMLImageElement) => void
}

export const LazyImage = ({
  src,
  onLazyLoad,
  ...imgProps
}: Props): JSX.Element => {
  const [image, setImage] = useState<string>(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  )
  const [isLazyLoadedm, setIsLazyLoaded] = useState<boolean>(false)
  const node = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (isLazyLoadedm) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) {
          return
        }

        setImage(src)
        observer.disconnect()
        setIsLazyLoaded(true)

        if (typeof onLazyLoad === 'function') {
          onLazyLoad(node.current)
        }
      })
    })

    if (node.current) {
      observer.observe(node.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [src, onLazyLoad, isLazyLoadedm])

  return <img ref={node} src={image} {...imgProps} />
}
