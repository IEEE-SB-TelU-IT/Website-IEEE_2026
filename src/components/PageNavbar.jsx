import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import logo from '../assets/image/logo.png';

const PageNavbar = ({ showSearch = false }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/#news' },
    { name: 'Departments', path: '/#departments' },
    { name: 'Achievement', path: '/achievements' },
    { name: 'Event', path: '/events' },
  ];

  return (
    <nav className="flex items-center justify-between py-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <Link to="/" className="flex items-center gap-2">
        <div className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
          <img src={logo} alt="IEEE Logo" className="h-6 object-contain" />
          <span className="hidden sm:inline">IEEE SB Telkom University</span>
        </div>
      </Link>

      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex items-center gap-8 text-sm">
          {navLinks.map((link) => {
            const isHashLink = link.path.startsWith('/#') || link.path.startsWith('#');
            const targetPath = link.path.startsWith('/#') ? link.path.substring(2) : link.path.substring(1);

            const isActive = !isHashLink && (location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)));

            if (isHashLink) {
              return (
                <a
                  key={link.name}
                  href={location.pathname === '/' ? `#${targetPath}` : `/#${targetPath}`}
                  className="transition-colors text-gray-400 hover:text-white"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors ${isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {showSearch && (
          <div className="relative hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              className="bg-[#111c2e] border border-gray-700 text-gray-300 text-sm rounded-full focus:ring-ocean-700 focus:border-ocean-700 block w-full pl-10 p-2 pr-4 transition-all"
            />
          </div>
        )}

        <div className="w-9 h-9 rounded-full bg-orange-300/20 border border-orange-200 flex items-center justify-center cursor-pointer hover:bg-orange-300/40 transition">
          <User className="w-5 h-5 text-orange-200" />
        </div>
      </div>
    </nav>
  );
};

export default PageNavbar;
