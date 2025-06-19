import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Home from './Pages/Home'
import Crew from './Pages/Crew'
import Technology from './Pages/Technology'
import NotFound from './Components/NotFound'
import Destination from './Pages/Destination/Destination'
import Layout from './Layout'

function App() {

  return (
    <div style={{margin: 0,
      padding: 0,
      listStyleType: "none",
      boxSizing: "border-box"
    }}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/dest" element={<Destination />} />
        <Route path="/tech" element={<Technology />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
