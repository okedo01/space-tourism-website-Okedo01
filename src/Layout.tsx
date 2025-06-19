import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "../src/Components/layout.css"

const Layout: React.FC = () => {
    const location = useLocation();

    const getBackgroundColor = () => {
        switch (location.pathname) {
        case "/":
            return "red"; 
        case "/crew":
            // return "url('../assets/destination/background-destination-desktop.jpg')"; 
        case "/dest":
            return "blue"; 
        case "/tech":
            return "yellow"; 
        default:
            return "black";
        }
    }
  return (
    <div>
        
        <div className="layout" style={{ backgroundColor: getBackgroundColor(), backgroundImage: getBackgroundColor()}}>
            <Navbar />
            <Outlet />
        </div>
    </div>
  )
}

export default Layout