// import React, {  useState } from 'react'
// import useApps from '../Hooks/useApps';
// import TrendingApps from '../components/TrendingApps/TrendingApps';
// import { FaSearch } from 'react-icons/fa';
// import errorImg from '/assets/app-error.png'
// import { Link } from 'react-router';

// const Apps = () => {
//     const {apps, error, loading} = useApps();
//     const [search, setSearch] = useState('');


//     if (loading) return <p className="text-center text-lg font-medium">Loading apps...</p>;
//     if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//     const term = search.trim().toLocaleLowerCase();
//     const searchedApp = term ?
//           apps.filter(app => app.title.toLocaleLowerCase().includes(term))
//           :
//           apps;




//     return (
//      <section className='bg-gradient-to-r from-[#f1f0ff] via-[#e8e8ff] to-[#ffffff] pb-12 pt-12 px-4 sm:px-6'>
//       <div className='max-w-6xl mx-auto '>
//          <h2 className='text-2xl sm:text-3xl md:text-2xl lg:text-5xl text-black font-semibold text-center'>Our All Applications</h2>
//          <p className='text-xl sm:lg md:xl lg:xl text-gray-600 font-semibold text-center mt-6 mb-4'>Explore all the trending app on the market developed by us.</p>
//          <div className='flex justify-between items-center mb-6'>
//           <p className='font-semibold text-lg'>({searchedApp.length}) Apps Found</p>
//          <label className="flex items-center border-2 border-gray-400 rounded-md px-2">
//           <FaSearch className="text-gray-500 mr-2" />
//           <input
//             type="search"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="search apps..."
//             className="outline-none p-2 flex-1"
//           />
//         </label>
//         </div>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//          {searchedApp.length > 0 ? (
//             searchedApp.map((app, index) => (
//               <TrendingApps key={app.id || index} app={app} />
//             ))
//           ) : (
//             <div className="col-span-full flex flex-col items-center justify-center text-center mt-10">
//              <img src={errorImg} className='' alt="error image" />
//               <h2 className='text-[#001931] text-4xl mt-8 font-semibold'>OPPS! APP NOT FOUND</h2>
//               <p className='text-[#627382] mt-4'>The App you are requesting is not found on our system. Please try another apps</p>
//               <Link
//                     onClick={() => setSearch('')}
//                     className="btn text-white bg-gradient-to-r mt-2 from-[#632EE3] to-[#9F62F2]
//                              hover:to-[#632EE3] hover:from-[#9F62F2]">
//                   GO Back!
//               </Link>
//             </div>
//           )}

//         </div>
//       </div>
//      </section>
//   )
// }

// export default Apps





import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import TrendingApps from "../components/TrendingApps/TrendingApps";
import { FaSearch } from "react-icons/fa";
import errorImg from "/assets/app-error.png";
import { Link } from "react-router";

const Apps = () => {
  const { apps, error, loading } = useApps();
  const [search, setSearch] = useState("");
  const [searchedApp, setSearchedApp] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  if (loading) return <p className="text-center text-lg font-medium">Loading apps...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchLoading(true);

    setTimeout(() => {
      const term = value.trim().toLowerCase();

      if (term) {
        const filtered = apps.filter((app) =>
          app.title.toLowerCase().includes(term)
        );
        setSearchedApp(filtered);
      } else {
        setSearchedApp(apps);
      }

      setSearchLoading(false);
    }, 500);
  };

  const displayApps = search ? searchedApp : apps;

  return (
    <section className="bg-gradient-to-r from-[#f1f0ff] via-[#e8e8ff] to-[#ffffff] pb-12 pt-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-5xl text-black font-semibold text-center">
          Our All Applications
        </h2>
        <p className="text-xl text-gray-600 font-semibold text-center mt-6 mb-4">
          Explore all the trending app on the market developed by us.
        </p>

        <div className="flex justify-between items-center mb-6">
          <p className="font-semibold text-lg">
            ({displayApps.length}) Apps Found
          </p>
          <label className="flex items-center border-2 border-gray-400 rounded-md px-2">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="search"
              value={search}
              onChange={handleSearch}
              placeholder="search apps..."
              className="outline-none p-2 flex-1"
            />
          </label>
        </div>

        {searchLoading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-[#632EE3]"></div>
            <p className="ml-3 text-lg font-medium text-gray-600">Searching...</p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayApps.length > 0 ? (
              displayApps.map((app, index) => (
                <TrendingApps key={app.id || index} app={app} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center text-center mt-10">
                <img src={errorImg} className="" alt="error image" />
                <h2 className="text-[#001931] text-4xl mt-8 font-semibold">
                  OOPS! APP NOT FOUND
                </h2>
                <p className="text-[#627382] mt-4">
                  The App you are requesting is not found on our system. Please try another app.
                </p>
                <Link
                  onClick={() => setSearch("")}
                  className="btn text-white bg-gradient-to-r mt-2 from-[#632EE3] to-[#9F62F2]
                               hover:to-[#632EE3] hover:from-[#9F62F2]"
                >
                  Go Back!
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Apps;
