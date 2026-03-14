import React from 'react';
import logo from '../assets/image/logo.png';

const Footer = () => {
  return (
    <footer className="bg-ocean-800 relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pt-16 pb-8 mt-20 text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <div className="text-center mb-10 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Reach us, If you want to join or know more about IEEE Telkom University Student Branch.
          </h2>
        </div>

        <div className="w-full flex-col md:flex-row flex justify-between items-start md:items-end gap-10 border-t border-ocean-700/50 pt-10">
          <div className="text-sm text-blue-100 flex-1">
            <p className="mb-1"><strong>www.ieee.org</strong></p>
            <p className="mb-1">Jl. Telekomunikasi.</p>
            <p className="mb-1">1, Terusan Buahbatu.</p>
            <p>Bandung 40257 Jawa Barat, Indonesia.</p>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <img src={logo} alt="IEEE Logo" className="h-10 object-contain opacity-90" />
          </div>

          <div className="flex-1 flex justify-end items-center gap-6 text-sm text-blue-200">
            <a href="#" className="hover:text-white transition-colors">© 2024 IEEE IT Student Branch. All rights reserved.</a>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-ocean-900/50 flex items-center justify-center hover:bg-ocean-700">In</a>
              <a href="#" className="w-8 h-8 rounded-full bg-ocean-900/50 flex items-center justify-center hover:bg-ocean-700">Ig</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
