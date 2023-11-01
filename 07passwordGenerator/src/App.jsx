import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [char, setChar] = useState(false)
  const [Password, setPassword] = ("")

  const passwordGenarator = () => {}

  return (
    <>
      <h1 className='text-center text-4xl text-white'>Password Genarator</h1>
    </>
  )
}

export default App
