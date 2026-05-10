import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/image/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleAboutUs = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === '/') {
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  };

  const links = [
    { label: 'About Us',     onClick: handleAboutUs },
    { label: 'News',         to: '/news'            },
    { label: 'Achievements', to: '/achievements'    },
  ];

  return (
    <nav className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-5xl mx-auto">
        <div
          className={`flex items-center justify-between px-5 py-3 backdrop-blur-md border border-white/30 rounded-full shadow-lg transition-all duration-300 ${
            scrolled ? 'bg-[#001220]/80' : 'bg-white/15'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="w-auto md:w-1/4">
            <img src={logo} alt="IEEE Logo" className="h-6 sm:h-7 object-contain" />
          </Link>

          {/* Desktop: 3 links */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-10 text-sm font-medium">
            {links.map((link) =>
              link.onClick ? (
                <a key={link.label} href="#about" onClick={link.onClick}
                   className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.to}
                      className="text-gray-300 hover:text-white transition-colors">
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Membership */}
          <div className="hidden md:flex justify-end w-1/4">
            <button className="bg-[#00629B] hover:bg-[#0077ba] text-white text-sm font-semibold py-2 px-6 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,98,155,0.4)] transition-all duration-300">
              Membership
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3 ml-auto">
            <button className="bg-[#00629B] text-white text-xs font-semibold py-2 px-4 rounded-full border border-white/10">
              Membership
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col justify-center items-center w-8 h-8 gap-1.5" aria-label="Toggle menu">
              <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-[#001220]/95 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-4 flex flex-col gap-2">
            {links.map((link) =>
              link.onClick ? (
                <a key={link.label} href="#about" onClick={link.onClick}
                   className="py-2.5 px-4 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.to} onClick={() => setMenuOpen(false)}
                      className="py-2.5 px-4 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
