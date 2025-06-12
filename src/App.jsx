import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Components/Dashboard'
import DashboardItems from './Components/DashboardItems'
import NotFound from './Components/NotFound'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/dash/:id' element={<DashboardItems />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App