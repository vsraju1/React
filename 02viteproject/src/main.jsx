import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Hi there, this is a vite project and also a new function.</h1>
  )
}

// to create a new element normal way
const anotherElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)

// to create a new element using react
const ReactElement = React.createElement(
  'a',
  {'href': 'https://google.com', 'target': '_blank'},
  'click me to vist google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    anotherElement
  
)
