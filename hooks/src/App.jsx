import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  let counter = 10;
  const addvalue = () => {
    counter++;
  }
  return (

    <>
      <h1> Egora </h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button>Remove Value</button>
    </>

  )
}
export default App