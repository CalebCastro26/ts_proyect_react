import React from 'react'
//import type { FunctionComponent, FC } from 'react'

const random = (): number => Math.floor(Math.random() * 123) + 1

export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${random()}.jpg`

  return (
    <img src={image} width={320} height='auto' className='rounded-lg' />
  )
}

// export const RandomFox: FunctionComponent = () => {
//   return (
//     <img />
//   )
// }
// export const RandomFox: FC = (): JSX.Element => {
//   return (
//     <img />
//   )
// }

