import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, rajuCounter] = useState(10)
  const addValue = () => {
    console.log('value added', counter)
    if (counter >= 0 & counter <20) {
      rajuCounter(counter + 1)
    }
  }

  const removeValue = () => {
    console.log('value removed', counter)
    if (counter > 0) {
      rajuCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>V Shanmukha Raju | React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
