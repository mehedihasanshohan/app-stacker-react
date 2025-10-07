import React from 'react'
import { Link } from 'react-router'
import errorImg from '/assets/error-404.png'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Errorpage = () => {
  return (
    <div>
    <Navbar></Navbar>
    <div className='bg-[#CCE1F7] min-h-screen flex flex-col justify-center items-center gap-6'>
      <img src={errorImg} alt="" />
      <h2 className='text-black font-bold text-2xl'>Oops! page not found!</h2>
      <p className='text-gray-500 font-normal '>The page you are looking is not available</p>
      <Link to={-1} className='btn btn-info'>Go Back!</Link>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Errorpage