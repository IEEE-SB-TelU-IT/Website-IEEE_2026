import React from 'react';
import { Link } from 'react-router-dom';
import contoh1 from '../assets/image/contoh1.png';

const newsData = [
  {
    id: 1,
    year: '2024',
    title: 'Artificial Intelligence on Human Daily Life',
    excerpt: 'Read more about how AI is shaping our future and transforming everyday experiences.',
    img: contoh1,
  },
  {
    id: 2,
    year: '2024',
    title: 'IoT Innovation Challenge Winners Announced',
    excerpt: 'Our team secured top positions at the national IoT competition in Jakarta.',
    img: contoh1,
  },
  {
    id: 3,
    year: '2024',
    title: 'IEEE R10 Outstanding Student Branch Award',
    excerpt: 'IEEE SB Tel-U recognized for exceptional activities and student engagement.',
    img: contoh1,
  },
  {
    id: 4,
    year: '2024',
    title: 'Workshop on Embedded Systems & FPGA',
    excerpt: 'A deep-dive session into hardware programming attended by 120+ students.',
    img: contoh1,
  },
];

const News = () => {
  return (
    <section id="news" className="py-14 sm:py-20 flex flex-col items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">News</h2>
      <p className="text-gray-300 text-sm mb-10 sm:mb-12 text-center max-w-lg">
        Check out our latest news happening inside and outside IEEE SB Telkom University
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mb-8 sm:mb-10">
        {newsData.map((item) => (
          <div key={item.id} className="bg-ocean-900/40 rounded-xl overflow-hidden border border-ocean-700/30 flex flex-col hover:border-ocean-700/60 transition-colors group cursor-pointer">
            <div className="p-3">
              <div className="relative rounded-lg overflow-hidden pb-[60%] bg-blue-900/30">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="px-4 sm:px-5 pb-5 pt-2 flex flex-col flex-grow">
              <span className="text-xs text-blue-2 mb-1">{item.year}</span>
              <h3 className="text-sm font-semibold text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 mt-auto">
                {item.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link to="/news">
        <button className="bg-ocean-800 hover:bg-ocean-700 text-white font-medium py-2.5 px-8 rounded-full text-sm transition-all duration-300">
          See More
        </button>
      </Link>
    </section>
  );
};

export default News;
