import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/shared/logo.svg"

const Navbar: React.FC = () => {

  return (
    <div>
      <nav className='nav-bar'>
        <Link to="/" style={{marginLeft: "50px"}}>
          <img src={Logo} alt="" />
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