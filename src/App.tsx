import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Crew from './Pages/Crew'
import Technology from './Pages/Technology'
import NotFound from './Components/NotFound'
import Destination from './Pages/Destination/Destination'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/dest" element={<Destination />} />
        <Route path="/tech" element={<Technology />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
