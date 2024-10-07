import React from 'react'
import Hackathon from './components/Hackathon'
import Home from './pages/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Hackathon />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App