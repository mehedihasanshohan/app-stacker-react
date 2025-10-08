import React, { useState } from 'react'
import useApps from '../Hooks/useApps';
import TrendingApps from '../components/TrendingApps/TrendingApps';
import { Link } from 'react-router';
import { FaSearch } from 'react-icons/fa';

const Apps = () => {

    const {apps, error, loading} = useApps();
    const [search, setSearch] = useState('')

    if (loading) return <p className="text-center text-lg font-medium">Loading apps...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    const term = search.trim().toLocaleLowerCase();
    const searchedApp = term ?
          apps.filter(app => app.title.toLocaleLowerCase().includes(term))
          :
          apps;



    return (
     <section className='bg-gradient-to-r from-[#f1f0ff] via-[#e8e8ff] to-[#ffffff] pb-12 pt-12'>
      <div className='max-w-6xl mx-auto '>
         <h2 className='text-5xl text-black font-semibold text-center'>Our All Applications</h2>
         <p className='text-xl text-gray-600 font-semibold text-center mt-6 mb-4'>Explore all the trending app on the market developed by us.</p>
         <div className='flex justify-between items-center mb-6'>
          <p className='font-semibold text-lg'>({searchedApp.length}) Apps Found</p>
         <label className="flex items-center border-2 border-gray-400 rounded-md px-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search apps"
            className="outline-none p-2 flex-1"
          />
        </label>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {searchedApp.map((app, index) => (
          <TrendingApps key={app.id || index} app={app} />
         ))}
        </div>
      </div>
     </section>
  )
}

export default Apps