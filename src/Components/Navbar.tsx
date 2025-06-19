import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ImgLogo from "../Components/assets/shared/logo.svg"
import CrewImg from '../Pages/Destination/image-mars.png'

const Navbar: React.FC = () => {
   const location = useLocation();

  const getImage = () => {
    switch (location.pathname) {
      case '/':
        return ImgLogo;
      case '/crew':
        return CrewImg;
      default:
        return ImgLogo;
    }
  };

  return (
    <div style={{background: "red"}}>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: "0",
        right: 0,
        margin: "auto 20px",
        width: "100%"
      }}>
        <img src={getImage()} alt="Route specific" className="navbar-image" />
        <Link to="/" style={{marginLeft: "50px"}}>
          <img src={ImgLogo} alt="logo" />
        </Link>
        <div style={{
          background: "gray",
          display: "flex",
          gap: "0 20px",
          padding: "5px 20px"
        }}>
          <Link to="/" style={{textDecoration: "none"}}>
            Home
          </Link>
          <Link to="/crew" style={{textDecoration: "none"}}>
            Crew
          </Link>
          <Link to="/dest" style={{textDecoration: "none"}}>
            Destionation
          </Link>
          <Link to="/tech" style={{textDecoration: "none"}}>
            Technology
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar