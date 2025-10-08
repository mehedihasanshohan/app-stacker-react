import React from "react";

const Preview = () => {
  const stats = [
    { number: "29.6M", label: "Total Downloads", subtext: "21% More Than Last Month" },
    { number: "906K", label: "Total Reviews", subtext: "46% More Than Last Month" },
    { number: "132+", label: "Active Apps", subtext: "31 More Will Launch" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#632EE3] to-[#9F63F2] text-white lg:py-16 md:py-8 sm:py-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        Trusted By Millions, Built For You
      </h2>

      <div className="flex flex-col md:flex-row  justify-center items-center gap-6 md:gap-10">
        {stats.map((item, index) => (
          <div key={index}>
            <p className="text-lg mt-2 font-medium">{item.label}</p>
            <h3 className="text-4xl md:text-5xl font-extrabold">{item.number}</h3>
            <p className="text-sm mt-1 opacity-80">{item.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Preview;
