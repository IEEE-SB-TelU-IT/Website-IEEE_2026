import React from 'react';
import BgHero from '../assets/image/bg-hero.png';

const Hero = () => {
  return (
    <section className="pt-20 sm:pt-24 md:pt-32 pb-10 md:pb-16 flex flex-col items-center text-center relative w-full">
      <div className="absolute top-[-1rem] left-1/2 -translate-x-1/2 w-[100vw] h-[calc(100%+1rem)] bg-black pointer-events-none -z-20"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160vw] sm:w-[800px] md:w-[900px] lg:w-[1100px] aspect-square pointer-events-none -z-10 flex justify-center items-center">
        <img src={BgHero} alt="Hero Background" className="w-full h-full object-contain mix-blend-screen opacity-100" />
      </div>
      <div className="border border-white/20 bg-[#00172d]/50 backdrop-blur-md text-[10px] sm:text-xs md:text-sm text-gray-200 py-1.5 px-5 rounded-full mb-4 sm:mb-6 shadow-lg mt-8 lg:mt-12 relative z-10">
        Welcome to IEEE Tel-U
      </div>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-6 sm:mb-8 leading-[1.1] px-4 w-full max-w-3xl">
        <span className="text-white">Foster Technological</span>
        <br />
        <span className="text-white">Innovation and Excellence</span>
      </h1>
      <button className="bg-[#00629B] hover:bg-[#0077ba] text-white font-semibold py-2 sm:py-3 px-10 sm:px-14 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,98,155,0.4)] hover:shadow-[0_0_30px_rgba(0,98,155,0.6)] mb-8 sm:mb-12 text-sm sm:text-base border border-white/10 relative z-10">
        See More
      </button>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2 sm:mt-4 w-full max-w-5xl px-4 relative z-10">
        <Badge number="9" text="Years on Tel-U" />
        <Badge number="13" text="Work Program" />
        <Badge number="6" text="Departments" />
        <Badge number="105" text="Current Officers" />
      </div>
    </section>
  );
};

const Badge = ({ number, text }) => (
  <div className="flex items-center gap-2 bg-black/40 border border-white/10 backdrop-blur-md p-1 pr-4 rounded-full text-sm font-medium text-gray-300 shadow-lg hover:bg-black/60 transition-colors">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00629B] flex shrink-0 items-center justify-center text-white font-semibold text-[10px] sm:text-xs shadow-inner">
      {number}
    </div>
    <span className="text-[10px] sm:text-xs whitespace-nowrap tracking-wide">{text}</span>
  </div>
);

export default Hero;