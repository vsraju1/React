import { useState, useCallback, useEffect, useRef } from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  //useRef variable
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNQRSTUVWXYZabcdefghijklmnqrstuvwxyz"
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "~!@#$%^&*()_{}:"
    

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
  console.log(str)

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword]);

  const passwordcopytoclipboard = useCallback(() => {
    passwordref.current?.select()
    // passwordref.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='text-center w-full rounded-lg max-w-md mx-auto shadow-md px-8 py-4 my-8 text-white bg-black'>
        <h1 className='pb-4 text-2xl'>Password Generator</h1>

        <div className='mb-4 flex shadow overflow-hidden rounded-lg'>
          <input type="text"
            className='ouline-none w-full py-1 px-3 text-black'
            value={Password}
            placeholder='password'
            readOnly
            ref={passwordref}
          />
          <button
            onClick={passwordcopytoclipboard}
            className='bg-gray-400 text-black px-4 py-2 overflow-hidden shrink-0 outline-none'
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div
            className='flex items-center gap-x-1'
          >
            <input type="range"
              min={8}
              max={16}
              value={length}
              className='cursor-pointer '
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
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
