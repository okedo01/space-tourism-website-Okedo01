import React from 'react'
import Navbar from '../src/Navbar'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/navs" element={<Navbar />} />
      </Routes>
    </div>
  )
}

export default App