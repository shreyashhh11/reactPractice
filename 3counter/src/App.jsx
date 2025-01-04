import { useState } from 'react'

import './App.css'

function App() {
  
  // let counter = 15
  let [county , setcounter] =  useState(15)

  const addValue = () => {
    // console.log("value added",Math.random());
    if(county < 20){
    setcounter(county + 1)
    console.log("clicked",county)}
    
    
  }
  
  const removeValue = () => {
    if(county > 0){
    setcounter(county - 1)}
  }

  return (
    
    <>
    <h1>hello</h1>
    <h2>counter value:{county}</h2>
    <button onClick={addValue}>add value</button>
    <br />
    <button onClick={removeValue}>remove value</button>
    <p>footer:{county}</p>
    </>
  )
}

export default App
