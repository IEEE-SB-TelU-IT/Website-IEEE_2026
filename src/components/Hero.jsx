import React from 'react';

const Hero = () => {
  return (
    <section className="pt-35 pb-24 flex flex-col items-center text-center relative">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
        <span className="text-white">Foster </span>
        <span className="text-blue-1">Technological</span>
        <br />
        <span className="text-white">Innovation</span>
      </h1>

      <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-sm md:text-base">
        We embrace Telkom University students to upscale their skills in technology field
      </p>

      <button className="bg-ocean-800 hover:bg-ocean-700 text-white font-medium py-2.5 px-8 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(1,108,165,0.4)] mb-16">
        See More
      </button>

      <div className="flex flex-wrap justify-center gap-4">
        <Badge text="9 Years on Tel-U" />
        <Badge text="13 Work Programs" />
        <Badge text="6 Departmens" />
        <Badge text="105 Current Officiers" />
      </div>
    </section>
  );
};

const Badge = ({ text }) => (
  <div className="flex items-center gap-2 bg-ocean-900/60 border border-ocean-700/50 backdrop-blur-sm py-2 px-4 rounded-full text-xs font-medium text-blue-1 shadow-[0_0_10px_rgba(4,187,223,0.15)]">
    <div className="w-4 h-4 rounded-full bg-blue-3 flex items-center justify-center">
      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
    </div>
    {text}
  </div>
);

export default Hero;
