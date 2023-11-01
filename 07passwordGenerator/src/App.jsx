import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [Password, setPassword] = ("")

  const passwordGenarator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!@#$%&*+=-_"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
      
    }

    setPassword(pass)
    
  }, [length, numberAllow, charAllow])

  return (
    <>
      <h1 className='text-center text-4xl text-white'>Password Genarator</h1>
    </>
  )
}

export default App
