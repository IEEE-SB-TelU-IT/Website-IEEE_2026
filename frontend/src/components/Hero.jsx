import React from 'react';
import Orb from './Orb';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center text-center relative w-full px-4 overflow-hidden">

      {/* Dark base background */}
      <div className="absolute inset-0 bg-[#000B18] -z-20 pointer-events-none" />

      {/* Orb fills the ENTIRE hero section — full screen on desktop */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Orb
          hoverIntensity={0.55}
          rotateOnHover
          hue={0}
          forceHoverState={false}
          backgroundColor="#000B18"
        />
      </div>

      {/* Content centered vertically */}
      <div className="flex flex-col items-center justify-center flex-1 w-full pt-28 sm:pt-32 pb-12 sm:pb-20">

        {/* Welcome pill */}
        <div className="border border-white/20 bg-[#00172d]/50 backdrop-blur-md text-[10px] sm:text-xs text-gray-200 py-1.5 px-5 rounded-full mb-5 sm:mb-6 shadow-lg">
          Welcome to IEEE Tel-U
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 sm:mb-7 leading-[1.1] w-full max-w-4xl">
          <span className="text-white">Foster Technological</span>
          <br />
          <span className="text-white">Innovation and Excellence</span>
        </h1>

        {/* CTA Button */}
        <button className="bg-[#00629B] hover:bg-[#0077ba] text-white font-semibold py-2.5 sm:py-3 px-10 sm:px-14 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,98,155,0.4)] hover:shadow-[0_0_30px_rgba(0,98,155,0.6)] mb-10 sm:mb-14 text-sm sm:text-base border border-white/10">
          See More
        </button>

        {/* Stats Badges */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-2xl sm:max-w-3xl">
          <Badge number="9" text="Years on Tel-U" />
          <Badge number="13" text="Work Program" />
          <Badge number="6" text="Departments" />
          <Badge number="105" text="Current Officers" />
        </div>
      </div>
    </section>
  );
};

const Badge = ({ number, text }) => (
  <div className="flex items-center gap-2.5 bg-black/40 border border-white/10 backdrop-blur-md p-1.5 pr-4 rounded-full font-medium text-gray-300 shadow-lg hover:bg-black/60 transition-colors w-full sm:w-auto justify-center sm:justify-start">
    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#00629B] flex shrink-0 items-center justify-center text-white font-bold text-xs shadow-inner">
      {number}
    </div>
    <span className="text-xs sm:text-sm whitespace-nowrap tracking-wide">{text}</span>
  </div>
);

export default Hero;