import React from 'react'
import Banner from '../components/Banner/Banner'
import Preview from '../components/Preview/Preview'
import useApps from '../Hooks/useApps'
import TrendingApps from '../components/TrendingApps/TrendingApps'
import { Link } from 'react-router'


const Home = () => {
  const {apps, error, loading} = useApps();
  console.log(apps);

  if (loading) return <p className="text-center text-lg font-medium">Loading apps...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;


  return (
    <div>
      <Banner></Banner>
      <Preview></Preview>
      <div >
         <h2 className='text-5xl text-black font-semibold text-center mt-12'>Trending Apps</h2>
         <p className='text-xl text-gray-600 font-semibold text-center mt-6 mb-4'>Explore all the trending app on the market developed by us.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
         {apps.slice(0,8).map((app, index) => (
          <TrendingApps key={app.id || index} app={app} />
         ))}
        </div>
        <div className='flex justify-center mb-6'>
         <button className='btn btn-info'>
           <Link to={'/apps'}>See All Apps</Link>
         </button>
        </div>
      </div>
    </div>
  )
}

export default Home