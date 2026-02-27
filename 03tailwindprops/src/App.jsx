import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'




function App() {
  let myobj = {
    username: "hitesh",
    age: 21
  }
  let myarr = [1,2,3,4,5]
  return (
    <>
    <h1 className="text-4xl font-bold text-blue-600">
      Tailwind Working 🚀
    </h1>
    
    <Card channel ="Adarsh" btnText ="Buy Now"/>
    <Card channel = "Ankit" btnText ="visit me"/>
    
    </>
  )
}

export default App
