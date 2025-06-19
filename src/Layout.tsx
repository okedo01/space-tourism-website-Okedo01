import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "../src/Components/layout.css"

const Layout: React.FC = () => {
    const location = useLocation();

    const getBackgroundColor = () => {
        switch (location.pathname) {
        case "/":
            return "#f2f2f2"; 
        case "/crew":
            return "#dff6ff"; 
        case "/dest":
            return "#dff6ff"; 
        case "/tech":
            return "#dff6ff"; 
        default:
            return "#f2f2f2";
        }
    }
  return (
    <div>
        
        <div className="layout" style={{ backgroundColor: getBackgroundColor(), minHeight: "100vh" }}>
            <Navbar />
            <Outlet />
        </div>
    </div>
  )
}

export default Layout