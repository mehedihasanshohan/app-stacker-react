import React, { useEffect, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";

import d from "/d.png";
import s from "/s.png";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    // toast.error("App uninstalled successfully!");
  };

  return (
    <section className="bg-gradient-to-r pb-0 from-[#f1f0ff] via-[#e8e8ff] to-[#ffffff] min-h-screen py-16">
      {/* <Toaster position="top-right" /> */}
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
         <select className="border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-600 focus:outline-none">
          <option>Sort By Size</option>
          <option>Sort By Name</option>
          </select>
        </div>

        {installedApps.length === 0 ? (
          <div className="text-gray-500 text-lg bg-gray-50 p-6 rounded-lg text-center">
            No apps installed yet.
          </div>
        ) : (
          <div className="space-y-4">
            {installedApps.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
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
                    className="bg-[#10B981] hover:bg-[#059669] text-white text-sm font-medium px-4 py-2 rounded-md"
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
