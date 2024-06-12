import { useState, useRef, useEffect } from 'react'
// import reactLogo from './assets/react.svg'


function Counter(){
let  [count,C_func]= useState(1)
let ref=useRef()
let ref2=useRef()
let s=useRef(0);
    const add= ()=>{
     //   C_func(count +1)  
        C_func(count => count +1)
        // C_func(count +1)
        // C_func(count +1)
        // C_func(count +1)
        console.log(s.current++); 
        ref.current.style.backgroundColor= "#52796f" 
        ref2.current.style.backgroundColor= "#ff8fab" 
    }
    
    return(
        <><h1>This is A Dual Counter</h1>
        <h2>Count = {count}</h2>
        <button ref={ref} onClick={add}>Counter 1</button>
        <button ref={ref2} onClick={add}>Counter 2</button></>
        ) 
    }
    
    export default Counter;
