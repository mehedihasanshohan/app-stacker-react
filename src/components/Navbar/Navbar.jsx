import React from 'react'
import { Link, NavLink } from 'react-router'
import icon from '/assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu  text-lg dropdown-content bg-white text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/apps'>Apps</Link></li>
        <li><Link to='/installations'>Installations</Link></li>
      </ul>
    </div>
     <Link to={'/'}>
      <img src={icon} className='h-8 w-8 ml-4 mr-2' alt="logo" />
     </Link>
     <h2 className='text-2xl font-bold text-purple-800'>
     <Link to={'/'}>App Stacker</Link>
    </h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-lg font-semibold px-1">
       <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1"
            : "text-gray-700"
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/apps"
        className={({ isActive }) =>
          isActive
            ? "text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1"
            : "text-gray-700"
        }
      >
        Apps
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/installations"
        className={({ isActive }) =>
          isActive
            ? "text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1"
            : "text-gray-700"
        }
      >
        Installations
      </NavLink>
    </li>
    </ul>
  </div>
  <div className="navbar-end">
    <button
      onClick={() => window.open("https://github.com/mehedihasanshohan", "_blank")}
      className="btn relative overflow-hidden rounded-xl
                  bg-gradient-to-r from-[#632EE3] to-[#9F63F2]
                text-white border-none backdrop-blur-lg flex
                  items-center gap-2 px-5 py-2 hover:from-[#9F63F2] hover:to-[#632EE3] mr-4 ]">
    <FaGithub className="text-lg" />
    <Link to="/" className="font-medium">Contribution</Link>
  </button>

  </div>
</div>
  )
}

export default Navbar