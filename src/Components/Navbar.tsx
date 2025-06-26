// import React from 'react'
// import { Link } from 'react-router-dom'
// import Logo from "/assets/shared/logo.svg"

// const Navbar: React.FC = () => {

//   return (
//     <div>
//       <nav className='nav-bar'>
//         <Link to="/" style={{marginLeft: "50px"}}>
//           <img src={Logo} alt="Logo" />
//         </Link>
//         <div className="nav-links">
//           <Link to="/" style={{textDecoration: "none"}}>
//            <h4><span>00</span>HOME</h4>
//           </Link>
//           <Link to="/destination" style={{textDecoration: "none"}}>
//             <h4><span>01</span>DESTINATION</h4>
//           </Link>
//           <Link to="/crew" style={{textDecoration: "none"}}>
//             <h4><span>02</span>CREW</h4>
//           </Link>
//           <Link to="/technology" style={{textDecoration: "none"}}>
//             <h4><span>03</span>TECHNOLOGY</h4>
//           </Link>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar



import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "/assets/shared/logo.svg"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className='nav-bar'>
        <Link to="/" style={{ marginLeft: "50px" }}>
          <img src={Logo} alt="Logo" />
        </Link>

        {/* Menu icon - visible only on mobile */}
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation links */}
        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: "none" }}>
            <h4><span>00</span>HOME</h4>
          </Link>
          <Link to="/destination" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: "none" }}>
            <h4><span>01</span>DESTINATION</h4>
          </Link>
          <Link to="/crew" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: "none" }}>
            <h4><span>02</span>CREW</h4>
          </Link>
          <Link to="/technology" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: "none" }}>
            <h4><span>03</span>TECHNOLOGY</h4>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
