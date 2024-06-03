import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


// function App() {
//   let x = useRef(55);



//   let [counter, setCounter] = useState(3)
//   const addva flue = () => {
//     if (counter < 10)
//       setCounter(counter + 1)
//     x.current = x.current + 1
//     alert(`X = ${x.current}`)
//   }

//   const removeValue = () => {
//     if (!counter <= 0)
//       setCounter(counter - 1)
//   }

//   let [variable, setCounter2] = useState(2);

//   const funs = () => {

//     alert("Triggerd")

//   }

//   const allRem = () => {
//     funs()
//     removeValue()

//   }


  // useEffect(() => {
  //   alert("On First Render")
  // }, [])

  // useEffect(()=>{
  //   alert("On Every Render")
  // })

  // useEffect(()=>{
  //   alert("On changing counter")
  // },[counter])

  return (

    <>
      <h1> Egora </h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={allRem}>Remove Value</button>
    </>

  )
export default App