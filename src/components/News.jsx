import React from 'react';
import contoh1 from '../assets/image/contoh1.png';

const News = () => {
  const cards = [1, 2, 3, 4];

  return (
    <section id="news" className="py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-3 text-white">News</h2>
      <p className="text-gray-300 text-sm mb-12 text-center max-w-lg">
        Check out our latest news happening inside and outside IEEE SB Telkom University
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-10">
        {cards.map((item) => (
          <div key={item} className="bg-ocean-900/40 rounded-xl overflow-hidden border border-ocean-700/30 flex flex-col">
            <div className="p-3">
              <div className="relative rounded-lg overflow-hidden pb-[60%] bg-blue-900/30">
                <img
                  src={contoh1}
                  alt="News Robot Arm"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="px-5 pb-5 pt-2 flex flex-col flex-grow">
              <span className="text-xs text-blue-2 mb-1">2024</span>
              <h3 className="text-sm font-semibold text-white mb-2 leading-snug">
                Artificial Intelligence on Human Daily Life
              </h3>
              <p className="text-xs text-gray-400 mt-auto">
                Read more about how AI shaping our future
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-ocean-800 hover:bg-ocean-700 text-white font-medium py-2 px-8 rounded-full text-sm transition-all duration-300">
        See More
      </button>
    </section>
  );
};

export default News;
