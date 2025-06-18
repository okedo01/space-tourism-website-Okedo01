import React from 'react'
import { Link } from 'react-router-dom'
import "./sandbox.css"

const Navbar: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <img src="./logo.svg" alt="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/">
            Home
          </Link>
          <Link to="/crew">
            Crew
          </Link>
          <Link to="/dest">
            Destionation
          </Link>
          <Link to="/tech">
            Technology
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar