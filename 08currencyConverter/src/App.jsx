import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen bg-blue-400'>
        <h1 className='text-3xl text-white'>Hi from Raju</h1>
      </div>
    </>
  )
}

export default App
