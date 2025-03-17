import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]= useState(5) ;  // hookes method 

  // let counter =5;

  const addvalue= ()=>{
    console.log("clicked ",counter); 

    //  counter+=1;
    setCounter(counter +1)

    
  }
  
  const removevalue= ()=>{
    setCounter(counter -1)
  }
  return (
    <>
      <h1>Mahesh  in React </h1>
      <h2>Counter value :{counter}</h2>

      <button
      onClick={addvalue}> Add Value {counter}</button>

      <button
      onClick={removevalue}>Remove Value {counter} </button>
    </>
  )
}

export default App
