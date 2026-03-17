import React from 'react';
import BgHero from '../assets/image/bg-hero.png';

const Hero = () => {
  return (
    <section className="pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-24 flex flex-col items-center text-center relative w-full overflow-hidden sm:overflow-visible">

      <div className="absolute top-[42%] sm:top-[45%] md:top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] sm:w-[130vw] md:w-[1000px] lg:w-[1200px] xl:w-[1300px] pointer-events-none -z-10 flex justify-center items-center">
        <img src={BgHero} alt="Hero Background" className="w-full h-auto object-contain opacity-100 max-w-none" />
      </div>

      <div className="border border-white/20 bg-[#00172d]/50 backdrop-blur-md text-[10px] sm:text-xs md:text-sm text-gray-200 py-1.5 px-4 sm:px-6 rounded-full mb-6 sm:mb-8 shadow-lg">
        Welcome to IEEE Tel-U
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] font-bold tracking-tight mb-6 sm:mb-8 leading-tight px-4 w-full max-w-4xl">
        <span className="text-white">Foster Technological</span>
        <br />
        <span className="text-white">Innovation and Excellence</span>
      </h1>

      <button className="bg-[#00629B] hover:bg-[#0077ba] text-white font-semibold py-2.5 sm:py-3 px-10 sm:px-16 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,98,155,0.4)] hover:shadow-[0_0_30px_rgba(0,98,155,0.6)] mb-12 sm:mb-20 text-sm sm:text-lg border border-white/10 relative z-10">
        See More
      </button>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6 sm:mt-12 w-full max-w-5xl px-4 relative z-10">
        <Badge number="9" text="Years on Tel-U" />
        <Badge number="13" text="Work Program" />
        <Badge number="6" text="Departments" />
        <Badge number="105" text="Current Officers" />
      </div>
    </section>
  );
};

const Badge = ({ number, text }) => (
  <div className="flex items-center gap-2 sm:gap-3 bg-black/50 border border-white/20 backdrop-blur-md p-1 pr-4 sm:pr-6 rounded-full text-sm font-medium text-gray-300 shadow-lg hover:bg-black/60 transition-colors">
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00629B] flex shrink-0 items-center justify-center text-white font-semibold text-[11px] sm:text-sm shadow-inner">
      {number}
    </div>
    <span className="text-[11px] sm:text-sm whitespace-nowrap">{text}</span>
  </div>
);

export default Hero;
