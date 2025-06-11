import { Route, Routes } from "react-router-dom"
import Navbar from "./Pages/Navbar"
import Home from "./Pages/Home"
import Preview from "./Pages/Preview"
import NotFound from "./Pages/NotFound"
import Layout from "./Pages/Layout"
import Destination from "./Pages/Destination"
import Crew from "./Pages/Crew"
import Technology from "./Pages/Technology"
import "./App.css"

function App() {

  return (
    <div className="bgImage">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/dest" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/tech" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App