import { Route, Routes } from "react-router-dom"
import Navbar from "./Pages/Navbar"
import Home from "./Pages/Home"
import Preview from "./Pages/Preview"

function App() {

  return (
    <div className="space-container">
      
      <Routes>
        <Route path="/nav" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/prev" element={<Preview />} />
      </Routes>
    </div>
  )
}
export default App