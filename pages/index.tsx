import { useState } from 'react'
import type { MouseEventHandler } from 'react'
import { LazyImage } from '../components/LazyImage'

type Props = {}

const random = (): number => Math.floor(Math.random() * 123) + 1



export default function Home({ }: Props) {
  const [images, setImages] = useState<IImagesItems[]>([
    {
      id: crypto.randomUUID(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    },
  ])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (e): void => {
    const newImageItem: IImagesItems = {
      id: crypto.randomUUID(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    }
    setImages([...images, newImageItem])
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-10 text-2xl text-center">Little Foxes</h1>
      <button className="boton_awesome w-[150px] mt-5" onClick={addNewFox}>
        Random
      </button>
      <div className="mt-10 p-4 flex gap-5 justify-center flex-wrap">
        {images.map(({ id, url }) => (
          <LazyImage
            src={url}
            key={id}
            width={320}
            height="auto"
            className="rounded-lg object-cover bg-gray-300"
            onClick={() => console.log('Hey')}
            onLazyLoad={() => console.log(`Se cargo el ID ${id}`)}
          />
        ))}
      </div>
    </div>
  )
}
