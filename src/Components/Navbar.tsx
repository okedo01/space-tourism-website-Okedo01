import React from 'react'
import { Link } from 'react-router-dom'
import ImgLogo from "./assets/shared/logo.svg"

const Navbar: React.FC = () => {
  return (
    <div style={{background: "red"}}>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: "25px",
        right: 0,
        margin: "auto 20px",
        width: "100%"
      }}>
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