import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  let [counter, setCounter] = useState(3)
  const addvalue = () => {
    if (counter < 10)
      setCounter(counter + 1)
  }
  const removeValue = () => {
    if (!counter <= 0)
      setCounter(counter - 1)
  }
    useEffect(() => {
      alert("On First Render")


    }, [])
 
    useEffect(()=>{
      alert("On Every Render")

    })
    
    useEffect(()=>{
      alert("On changing counter")

    },[counter])

  return (

    <>
      <h1> Egora </h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>

  )
}
export default App