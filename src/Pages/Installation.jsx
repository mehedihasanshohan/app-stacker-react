import React, { useEffect, useState } from "react";
  import { toast } from 'react-toastify';

import d from "/d.png";
import s from "/s.png";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
  }, []);

   const sortedApps = () => {
    if (sortOrder === 'asc') return [...installedApps].sort((a, b) => a.downloads - b.downloads);
    if (sortOrder === 'dsc') return [...installedApps].sort((a, b) => b.downloads - a.downloads);
    return installedApps;
  };

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.error("App uninstalled successfully!");
  };

  return (
    <section className="bg-gradient-to-r pb-0 from-[#f1f0ff] via-[#e8e8ff] to-[#ffffff] min-h-screen py-10 px-4 sm:px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Your Installed Apps</h2>
            <p className="text-gray-500 mt-2 text-center">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
         <p className="text-gray-600 font-medium mb-4">
           {installedApps.length} Apps Found
         </p>
         <select className="border border-gray-300 rounded-md cursor-pointer px-2 py-1 text-sm text-gray-600 focus:outline-none"
                 value={sortOrder}
                 onChange={(e) => setSortOrder(e.target.value)}>
          <option value="none">Sort By Download</option>
          <option value="dsc">HIGH to LOW</option>
          <option value="asc">LOW to HIGH</option>
          </select>
        </div>

        {installedApps.length === 0 ? (
          <div className="text-gray-500 text-lg bg-gray-50 p-6 rounded-lg text-center">
            No apps installed yet.
          </div>
        ) : (
          <div className="space-y-4">
            {sortedApps().map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 sm:p-4 hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16  rounded-lg overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">
                      {app.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 gap-3 mt-1">
                      <div className="flex justify-center items-center gap-1">
                       <span><img src={d} className="w-3 h-3" alt="" /></span>
                       <span className="text-green-600 font-semibold">{app.downloads}M</span>
                      </div>
                      <div className="flex justify-center items-center gap-1">
                       <span><img src={s} className="w-3 h-3" alt="" /></span>
                       <span className="text-orange-400 font-semibold">5</span>
                      </div>
                      <span>{app.size} MB</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">

                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="bg-[#10B981] hover:bg-[#059669] text-white text-sm font-medium px-4 py-2 cursor-pointer rounded-md"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Installation;
