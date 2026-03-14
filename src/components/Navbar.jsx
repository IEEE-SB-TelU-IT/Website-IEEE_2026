import React from 'react';
import logo from '../assets/image/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between px-5 py-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-full shadow-lg transition-all duration-300">

          <div className="flex items-center w-1/4">
            <img src={logo} alt="IEEE Logo" className="h-7 object-contain" />
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center gap-10 text-sm font-medium">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
            <a href="#news" className="text-gray-300 hover:text-white transition-colors">News</a>
            <a href="#achievements" className="text-gray-300 hover:text-white transition-colors">Achievements</a>
          </div>

          <div className="flex justify-end w-1/4">
            <button className="bg-[#00629B] hover:bg-[#0077ba] text-white text-sm font-semibold py-2.5 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,98,155,0.4)] hover:shadow-[0_0_25px_rgba(0,98,155,0.6)] border border-white/10">
              Membership
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
