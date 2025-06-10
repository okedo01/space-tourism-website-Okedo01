 import { Route, Routes } from "react-router-dom"
import "../src/App.css"
// import Home from "./Pages/Home"
// import Crew from "./Pages/Crew"
// import Destination from "./Pages/Destination"
// import Technology from "./Pages/Technology"
import Navbar from "./Navbar"
import Home from "./Pages/Home"

function App() {

  return (
    <div className="space-container">
      <Navbar />
      <Home />
      {/* <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
        </Route>
      </Routes> */}
    </div>
  )
}
export default App
