import React from 'react';
import { Instagram, Linkedin, Music2 } from 'lucide-react';
import logo from '../assets/image/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#00629B] rounded-[40px] px-10 md:px-16 pt-10 pb-10 text-white relative overflow-hidden shadow-2xl">

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto leading-tight">
            Reach us, If you want to join or know more about IEEE Telkom University Student Branch.
          </h2>
        </div>

        <div className="w-full h-[1px] bg-white/20 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="text-sm font-medium mb-1 opacity-80 uppercase tracking-wider">Where to find us</p>
            <div className="text-sm leading-relaxed space-y-0.5 opacity-90 font-light">
              <p>Jl. Telekomunikasi,</p>
              <p>Jl. Terusan Buah Batu No.01,</p>
              <p>Sukapura, Dayeuhkolot, Bandung, Jawa Barat 40257</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <img src={logo} alt="IEEE Logo" className="h-8 object-contain brightness-0 invert" />
          </div>

          <div className="text-xs md:text-sm opacity-70 text-center font-light">
            © 2024 IEEE SB Telkom University · All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:opacity-100 opacity-80 transition-opacity">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:opacity-100 opacity-80 transition-opacity">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:opacity-100 opacity-80 transition-opacity">
              <Music2 size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;