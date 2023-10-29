import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// can create directly and use the function in the same code
function MyApp(){
  return(
    <h1>Hi there, this is a vite project and also a new function.</h1>
  )
}



// to create a new element normal way
const anotherElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)

// react converts into this format but it is our own format react cannot read this
const Element = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'click me to visit google'
}
// React has syntax to create element, look into the below code using react

// to create a new element using react
const ReactElement = React.createElement(
  'a',
  {'href': 'https://google.com', 'target': '_blank'},
  'click me to vist google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  
)
