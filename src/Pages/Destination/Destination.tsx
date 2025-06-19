import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Logo from "./destination/image-mars.png"

const Destination: React.FC = () => {
  return (
    <div style={{
        display: "flex"
    }}>
        <h2>PICK YOUR DESTINATION</h2>
        <img src={Logo} alt="" />
        <aside>
            <Sidebar />
        </aside>
    </div>
  )
}

export default Destination