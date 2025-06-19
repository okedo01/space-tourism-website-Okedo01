import React from 'react'
import Logo from "./destination/image-mars.png"
import Sidebar from './Sidebar/Sidebar'

const Destination: React.FC = () => {
  return (
    <div style={{
        display: "flex",
        height: "503px"
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