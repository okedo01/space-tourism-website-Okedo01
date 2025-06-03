 import { Route, Routes } from "react-router-dom"
import "../src/App.css"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Crew from "./Pages/Crew"
import Destination from "./Pages/Destination"
import Technology from "./Pages/Technology"

function App() {

  return (
    <div className="space-container">
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
