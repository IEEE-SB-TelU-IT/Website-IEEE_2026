import React from 'react';
import logo from '../assets/image/logo.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center gap-2">
        <img src={logo} alt="IEEE Logo" className="h-8 object-contain" />
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <a href="#about" className="hover:text-white transition-colors">About Us</a>
        <a href="#news" className="hover:text-white transition-colors">News</a>
        <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
      </div>

      <div>
        <button className="bg-ocean-800 hover:bg-ocean-700 text-white text-sm font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(1,108,165,0.5)]">
          Join with Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
