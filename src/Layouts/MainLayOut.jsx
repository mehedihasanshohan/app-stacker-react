import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'
import { ToastContainer } from 'react-toastify';

const MainLayOut = () => {
  return (
    <div>
      <Navbar></Navbar>
        <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer position='top-right' autoClose={1000}></ToastContainer>
    </div>
  )
}

export default MainLayOut