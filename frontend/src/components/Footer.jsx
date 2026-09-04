import React from 'react';
import { Instagram, Linkedin, Music2 } from 'lucide-react';
import logo from '../assets/image/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#00629B] rounded-[28px] sm:rounded-[40px] px-6 sm:px-10 md:px-16 pt-8 sm:pt-10 pb-8 sm:pb-10 text-white relative overflow-hidden shadow-2xl">

        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-3xl mx-auto leading-tight">
            Reach us, If you want to join or know more about IEEE Telkom University Student Branch.
          </h2>
        </div>

        <div className="w-full h-[1px] bg-white/20 mb-6 sm:mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mb-8 sm:mb-12">
          <div>
            <p className="text-sm font-bold mb-1 tracking-wider">Where to find us</p>
            <div className="text-sm leading-relaxed space-y-0.5 font-bold opacity-90">
              <p>Jl. Telekomunikasi,</p>
              <p>Jl. Terusan Buah Batu No.01,</p>
              <p>Sukapura, Dayeuhkolot, Bandung, Jawa Barat 40257</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-6">
          <div className="flex items-center">
            <img src={logo} alt="IEEE Logo" className="h-7 sm:h-8 object-contain brightness-0 invert" />
          </div>

          <div className="text-xs sm:text-sm opacity-90 text-center font-bold order-last sm:order-none">
            © 2024 IEEE SB Telkom University · All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <a href="#" className="hover:opacity-100 opacity-80 transition-opacity p-1">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:opacity-100 opacity-80 transition-opacity p-1">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:opacity-100 opacity-80 transition-opacity p-1">
              <Music2 size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;