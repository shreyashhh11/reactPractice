import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Reactcd .. from 'react'


const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'click me for google'
)

createRoot(document.getElementById('root')).render(
   
  reactElement
)
