import { useState } from 'react';
import './App.css'

function App() {
const [counter, setCounter]= useState(0)

const incrementCounter=()=>{
  setCounter(counter + 1);
}
console.log("render");

  return (
    <>
    {counter}
    <br></br>
      <button onClick={incrementCounter}>Increment</button>
    </>
  )
}

export default App

