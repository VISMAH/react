import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Random} from './components/Random'
import { Tag } from './components/Tag'

function App() {


  return (
    <>
     <div className='w-full h-screen flex flex-col background relative overflow-x-hidden items-center'>
      <h1 className='bg-white rounded-sm w-11/12 text-center mt-[40px]
      px-10 py-2 text-4xl font-bold'>RANDOM GIFS</h1>
      <div className=' flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
     </div>
    </>
  )
}

export default App
