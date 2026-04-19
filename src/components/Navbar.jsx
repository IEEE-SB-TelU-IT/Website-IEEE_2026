import React, { useState, useEffect } from 'react';
import logo from '../assets/image/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'News', href: '#news' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Events', href: '#events' },
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
          <div className="flex items-center w-auto md:w-1/4">
            <img src={logo} alt="IEEE Logo" className="h-6 sm:h-7 object-contain" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex justify-end w-1/4">
            <button className="bg-[#00629B] hover:bg-[#0077ba] text-white text-sm font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,98,155,0.4)] hover:shadow-[0_0_25px_rgba(0,98,155,0.6)] border border-white/10">
              Membership
            </button>
          </div>

          {/* Mobile: Membership + Hamburger */}
          <div className="flex md:hidden items-center gap-3 ml-auto">
            <button className="bg-[#00629B] hover:bg-[#0077ba] text-white text-xs font-semibold py-2 px-4 rounded-full transition-all duration-300 border border-white/10">
              Membership
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#001220]/90 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
