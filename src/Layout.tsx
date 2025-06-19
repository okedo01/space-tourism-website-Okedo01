import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "../src/Components/layout.css"
import HomeImg from "./Components/assets/shared/logo.svg"

const Layout: React.FC = () => {
    const location = useLocation();

    const getBackgroundColor = () => {
        switch (location.pathname) {
        case "/":
            return HomeImg; 
        case "/crew":
            return "green"; 
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