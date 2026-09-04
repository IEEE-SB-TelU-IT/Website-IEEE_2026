import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/image/logo.png';

// Navbar untuk halaman non-Home
// Selalu 3 link: About Us | News | Achievements
const PageNavbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'About Us',     path: '/#about'       },
    { name: 'News',         path: '/news'          },
    { name: 'Achievements', path: '/achievements'  },
  ];

  return (
    <nav className="w-full px-4 sm:px-8 lg:px-10 py-4 flex items-center justify-between relative z-20">
      <Link to="/" className="flex items-center gap-2 flex-shrink-0">
        <img src={logo} alt="IEEE Logo" className="h-6 sm:h-7 object-contain" />
        <span className="hidden sm:inline text-white font-bold text-sm">IEEE SB Telkom University</span>
      </Link>

      <div className="hidden md:flex flex-1 justify-center items-center gap-10 text-sm font-medium">
        {links.map((link) => {
          const active = location.pathname === link.path;
          return (
            <Link key={link.name} to={link.path}
                  className={`transition-colors ${active ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`}>
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="hidden md:flex">
        <button className="bg-[#00629B] hover:bg-[#0077ba] text-white text-sm font-semibold py-2 px-6 rounded-full border border-white/10 shadow-[0_0_16px_rgba(0,98,155,0.35)] transition-all">
          Membership
        </button>
      </div>

      <div className="flex md:hidden items-center gap-3 ml-auto">
        <button className="bg-[#00629B] text-white text-xs font-semibold py-2 px-4 rounded-full border border-white/10">
          Membership
        </button>
        <button onClick={() => setOpen(!open)} className="text-white p-1" aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-4 right-4 mt-1 bg-[#001220]/95 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-4 flex flex-col gap-2 shadow-2xl">
          {links.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setOpen(false)}
                  className="py-2.5 px-4 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default PageNavbar;
