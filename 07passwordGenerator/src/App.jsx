import { useState, useCallback, useEffect } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenarator = useCallback(() => {
    let pass = " "
    let str = "ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "0123456789"
    if (charAllow) str += "!@#$%&*+=-_"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword])
  useEffect(() => {
    passwordGenarator()
  }, [length, numberAllow, charAllow, passwordGenarator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500 pb-5'>
        <h1 className='text-center text-white'>Password Genarator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mt-3'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />
          <button className='outline-none bg-blue-700 px-3 py-o.5 shrink-0'>copy</button>
        </div>

        <div className='flex text-sm gap-x-3 mt-3'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={18}
              value={length}
              className='cursor-pointer bg-blue-700'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id='numberInput'
              onChange={() => {
                setNumberAllow((prev) => !prev)
              }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id='charInput'
              onChange={() => {
                setCharAllow((prev) => !prev)
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
