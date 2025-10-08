import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { FaStar } from "react-icons/fa";
import { BiDownload } from 'react-icons/bi';
import d from '/d.png'
import r from '/r.png'
import s from '/s.png'
import Charts from "../components/Charts/Charts";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  if (loading)
    return (
      <p className="text-center text-lg font-medium text-gray-600 mt-10">
        Loading app details...
      </p>
    );
  if (error)
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  const app = apps.find((p) => p.id === Number(id));
  if (!app)
    return <p className="text-center text-gray-500 mt-10">App not found!</p>;

  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-r pb-0 from-[#f1f0ff] via-[#e8e8ff] to-[#ffffff] p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 pb-8">
        <img
          src={app.image}
          alt={app.title}
          className="w-64 h-64 object-cover rounded-2xl border-2 border-gray-200"
        />

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            {app.title}
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Developed by
            <span className="text-indigo-600 ml-2 font-semibold">
              {app.companyName}
            </span>
          </p>

          <div className="h-[1px] bg-gray-200 w-full mx-auto mb-4"></div>


          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <div className="flex flex-col items-center gap-[4px]">
              <img src={d} alt="" />
              <p className="text-gray-700 font-bold text-lg">
                {app.downloads}M
              </p>
              <p className="text-gray-500 text-sm">Downloads</p>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <img src={s} alt="" />
              <p className="text-lg font-bold ml-1">{app.ratingAvg}</p>
              <p className="text-gray-500 text-sm">Avg Rating</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[4px]">
              <img src={r} alt="" />
              <p className="text-gray-700 font-bold text-lg">
                {app.reviews || "54K"}
              </p>
              <p className="text-gray-500 text-sm">Total Reviews</p>
            </div>
          </div>

          <button className="mt-5 bg-gradient-to-r from-[#54CF68] to-[#00827A]
                           text-white px-6 py-2 rounded-full shadow-md
                           hover:to-[#54CF68] hover:from-[#00827A] cursor-pointer transition">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

          <div className="h-[1px] bg-gray-200 w-full mx-auto mb-4"></div>


      {/* Ratings Bar Section */}
      <Charts app={app}></Charts>

      {/* Description Section */}
      <div className="mt-10 text-left">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Description
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {app.description ||
            "No description available for this app yet. Stay tuned for updates!"}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
