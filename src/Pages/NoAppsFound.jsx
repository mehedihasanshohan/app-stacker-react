import React from 'react'
import { Link } from 'react-router'
import errorImg from '/assets/app-error.png'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const NoAppsFound = () => {
  return (
    <div>
    <div className='bg-[#CCE1F7] p-4 flex flex-col justify-center items-center gap-6'>
      <img src={errorImg} alt="" />
      <h2 className='text-black font-bold text-2xl'>Oops! page not found!</h2>
      <p className='text-gray-500 font-normal '>The page you are looking is not available</p>
      <Link to={-1} className='btn btn-info'>Go Back!</Link>
    </div>
    </div>
  )
}

export default NoAppsFound