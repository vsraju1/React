import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")

  return (
    <div className='w-screen h-screen duration-200'
    style={{backgroundColor: color}}
    >
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-end gap-3 shadow-lg bg-black px-3 py-2 rounded-full'>
        <button
        onClick={() => setColor("red")} 
        className='outline-none px-4 py-1 rounded-full text-white'
        style={{backgroundColor: "red"}}
        >Red</button>
        <button
        onClick={() => setColor("green")}
        className='outline-none px-4 py-1 rounded-full text-white'
        style={{backgroundColor: "green"}}
        >green</button>
        <button
        onClick={() => setColor("blue")}
        className='outline-none px-4 py-1 rounded-full text-white'
        style={{backgroundColor: "blue"}}
        >blue</button>
        <button 
        onClick={() => setColor("yellow")}
        className='outline-none px-4 py-1 rounded-full text-black'
        style={{backgroundColor: "yellow"}}
        >yellow</button>
        <button
        onClick={() => setColor("white")}
        className='outline-none px-4 py-1 rounded-full text-black'
        style={{backgroundColor: "white"}}
        >white</button>
      </div>
     </div>
    </div>
  )
}

export default App
