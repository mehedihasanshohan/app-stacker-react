import React from 'react'
import { PiDownloadSimpleBold } from 'react-icons/pi'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const TrendingApps = ({ app }) => {
  const {id,  image, title, downloads } = app;
  console.log(typeof id);

  return (
    <Link to={`/app/${id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300  p-4 flex flex-col items-center">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-3" />
      <h2 className="text-lg font-semibold mb-2 ">{title}</h2>

      <div className="flex justify-between items-center w-full text-sm">
        <p className="flex items-center bg-gray-200 font-semibold px-2 py-1  rounded-sm gap-1 text-green-700">
          <PiDownloadSimpleBold className="" />
          {downloads}M
        </p>
        <p className="flex items-center bg-[#FFF0E1] text-[#FF9911] font-semibold rounded-sm px-2 py-1 gap-1">
          <FaStar className='text-[#FF9911]'></FaStar> 5
        </p>
      </div>
    </div>
    </Link>
  )
}

export default TrendingApps
