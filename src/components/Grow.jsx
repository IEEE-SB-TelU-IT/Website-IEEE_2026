import React from 'react';

const Grow = () => {
  return (
    <section className="bg-white text-black py-24 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mt-12 mb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between">
        <div className="max-w-xl md:pr-10">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
            Your Place to <span className="text-ocean-800 font-black">Grow</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-sm">
            Our organization allows you to improve your leadership, communication, and time management skills and trains you to deal with pressure and manage your time more effectively, making this experience a solid foundation for personal and professional development.
          </p>
          <button className="bg-ocean-800 hover:bg-ocean-700 text-white font-medium py-2.5 px-8 rounded-full shadow-[0_4px_14px_rgba(1,108,165,0.4)] transition-all duration-300">
            See More
          </button>
        </div>

        <div className="bg-ocean-800 rounded-xl flex items-center justify-center p-8 lg:p-12 w-full md:w-[480px] shadow-2xl">
          <div className="flex w-full divide-x divide-blue-400 text-white">
            <div className="flex-1 text-center px-4">
              <h3 className="text-4xl font-extrabold mb-2">9</h3>
              <p className="text-xs font-semibold text-blue-200 tracking-wider">Executive Board</p>
            </div>
            <div className="flex-1 text-center px-4">
              <h3 className="text-4xl font-extrabold mb-2">106</h3>
              <p className="text-xs font-semibold text-blue-200 tracking-wider">Current Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grow;
