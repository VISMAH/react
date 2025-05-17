import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Support from './components/Support'
import About from './components/labs'
import NotFound from './components/NotFound'
import labs from './components/labs'

function App() {


  return (
    <>
     <div className='App'>
     <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="/support" element ={<Support/>}></Route>
      <Route path="/about " element ={<About/>}></Route>
      <Route path="/labs" element ={<Labs/>}></Route>
      <Route path="*" element ={<NotFound/>}></Route>
      </Routes></div> 
    </>
  )
}

export default App;
