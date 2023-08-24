
import React from 'react'
import { RandomFox } from '../components/RandomFox'

type Props = {}

export default function Home({ }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <RandomFox />
    </div >
  )
}