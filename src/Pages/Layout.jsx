import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import "./sandbox.css"

const Layout = () => {
  return (
    <div className='lay'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout