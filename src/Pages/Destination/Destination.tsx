import React from 'react'
import Sidebar from './Sidebar'

const Destination: React.FC = () => {
  return (
    <div style={{
        display: "flex"
    }}>
        <h2>PICK YOUR DESTINATION</h2>
        <aside>
            <Sidebar />
        </aside>
    </div>
  )
}

export default Destination