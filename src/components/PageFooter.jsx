import React from 'react';
import { Globe, Share2, MapPin } from 'lucide-react';
import logo from '../assets/image/logo.png';

const PageFooter = ({ showLocation = false }) => {
  return (
    <footer className="bg-[#0b101e] mt-20 pt-16 pb-8 text-white relative z-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">

          <div className="pr-4">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="IEEE Logo" className="h-6 object-contain" />
              <span className="font-bold text-lg">IEEE SB Telkom University</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Dedicated to advancing technology for the benefit of humanity at Telkom University and beyond.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-ocean-700 flex items-center justify-center transition">
                <Globe className="w-4 h-4 text-gray-300" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-ocean-700 flex items-center justify-center transition">
                <text className="font-bold text-sm text-gray-300">@</text>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-ocean-700 flex items-center justify-center transition">
                <Share2 className="w-4 h-4 text-gray-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-ocean-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-ocean-400 transition">Latest News</a></li>
              <li><a href="#" className="hover:text-ocean-400 transition">Events</a></li>
              <li><a href="#" className="hover:text-ocean-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-ocean-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-ocean-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-ocean-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-ocean-400 transition">Terms of Service</a></li>
            </ul>
          </div>

          {showLocation && (
            <div>
              <h4 className="font-semibold text-white mb-6">Location</h4>
              <p className="text-sm text-gray-400 mb-4">
                Student Center, 2nd Floor<br />
                Telkom University, Bandung
              </p>
              <div className="w-full h-24 bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-700/50">
                <MapPin className="text-ocean-600 w-6 h-6" />
              </div>
            </div>
          )}
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2024 IEEE Student Branch Telkom University. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
