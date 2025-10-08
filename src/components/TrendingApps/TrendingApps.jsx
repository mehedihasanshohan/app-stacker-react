import React from 'react'
import { PiDownloadSimpleBold } from 'react-icons/pi'
import { FaStar } from 'react-icons/fa';

const TrendingApps = ({ app }) => {
  const {id,  image, title, downloads } = app;
  console.log(typeof id);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 p-4 flex flex-col items-center">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-3" />
      <h2 className="text-lg font-semibold mb-2 ">{title}</h2>

      <div className="flex justify-between items-center w-full text-sm">
        <p className="flex items-center bg-gray-400 px-2 rounded-sm gap-1 text-white">
          <PiDownloadSimpleBold className="text-blue-700" />
          {downloads}M
        </p>
        <p className="flex items-center bg-rose-200 rounded-sm px-2 gap-1 text-gray-700">
          <FaStar className='text-yellow-400'></FaStar> 5
        </p>
      </div>
    </div>
  )
}

export default TrendingApps
