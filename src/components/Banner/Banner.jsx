import React from 'react';
import { IoMdAppstore } from 'react-icons/io';
import { FaGooglePlay } from 'react-icons/fa';
import heroPng from '/assets/hero.png';
import playStore from '/play.png'

const Banner = () => {
  return (
    <section className="bg-gradient-to-r pb-0 from-[#f1f0ff] via-[#e8e8ff] to-[#ffffff] py-16 px-6 md:px-12 text-center rounded-3xl shadow-lg overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F63F2] bg-clip-text text-transparent">
            Productive
          </span>{' '}
          Apps
        </h2>

        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
          At <span className="font-semibold text-gray-800">HERO.IO</span>, we craft innovative apps
          designed to make everyday life simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <button
              onClick={() => window.open("https://play.google.com/store/games?hl=en", "_blank")}
              className="flex items-center gap-2 bg-gray-200 text-gray-800 cursor-pointer
                         px-5 py-2 rounded-xl font-medium hover:bg-gray-400">
            <img src={playStore} className='w-6 h-6' alt="" />
            Google Play
          </button>

          <button
             onClick={() => window.open("https://apps.microsoft.com/home?hl=en-US&gl=BD", "_blank")}
             className="flex items-center gap-2 bg-gray-200 text-gray-800 px-5 py-2 rounded-xl font-medium hover:bg-gray-300 transition-all">
            <IoMdAppstore className="text-xl text-blue-500 cursor-pointer"/>
            App Store
          </button>
        </div>

        <div className="mt-10">
          <img
            src={heroPng}
            alt="Hero Banner"
            className="w-full max-w-lg mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
