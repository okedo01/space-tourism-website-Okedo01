import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <img src="./" alt="logo" />
        </Link>
      </nav>
    </div>
  )
}

export default Navbar