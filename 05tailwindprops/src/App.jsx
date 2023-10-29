import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold underline bg-red-400 p-4 rounded-xl mb-5'>Tailwind test</h1>
      <Card />
      <Card />
   
    </>
  )
}

export default App
