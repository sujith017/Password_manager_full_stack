// import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/contact'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
export default App
