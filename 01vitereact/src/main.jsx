import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const anotherUser = "Adarsh Jaiswal"

// const reactElement = React.createElement(
//   'a',
//   {
//     href: 'https://google.com',
//     target: '_blank',
//   },
//   'visit google',
//   anotherUser
// )



createRoot(document.getElementById('root')).render(
  <App/>
)
