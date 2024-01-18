import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn.jsx'
import Landingpg from './pages/Landingpg'
import SignUp from './pages/SignUp.jsx'
import NavBar from './components/NavBar.jsx'

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landingpg />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
