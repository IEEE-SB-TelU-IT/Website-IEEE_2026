import React from 'react';
import { Link } from 'react-router-dom';
import contoh2 from '../assets/image/contoh2.png';

const RecentActivities = () => {
  const cards = [1, 2, 3];

  return (
    <section id="events" className="py-20 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-3 text-white">Recent Activities</h2>
      <p className="text-gray-300 text-sm mb-12 text-center max-w-lg">
        Take a look at our latest activities and see what we’ve been working on recently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
        {cards.map((item) => (
          <div key={item} className="bg-ocean-900/30 rounded-xl overflow-hidden border border-ocean-700/30 flex flex-col">
            <div className="p-3">
              <div className="relative rounded-lg overflow-hidden pb-[75%] bg-blue-900/30">
                <img
                  src={contoh2}
                  alt="VR Workshop Activity"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/events">
        <button className="bg-ocean-800 hover:bg-ocean-700 text-white font-medium py-2 px-8 rounded-full text-sm transition-all duration-300">
          See More
        </button>
      </Link>
    </section>
  );
};

export default RecentActivities;
