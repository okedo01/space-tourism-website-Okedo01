import { Route, Routes } from "react-router-dom"
import Navbar from "./Pages/Navbar"
import Home from "./Pages/Home"
import Preview from "./Pages/Preview"
import NotFound from "./Pages/NotFound"
import Layout from "./Pages/Layout"

function App() {

  return (
    <div className="space-container">

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/prev" element={<Preview />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App