import React from 'react';

const Grow = () => {
  return (
    <section className="bg-white text-black py-14 sm:py-20 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 sm:gap-12 items-center justify-between">

          {/* Left Column: Text & Button */}
          <div className="max-w-xl text-left w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-tight text-black inline-block relative">
              <span>Your Place to <span className="text-[#00629B]">Grow</span></span>
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#00629B]" />
            </h2>

            <p className="text-gray-700 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base font-medium">
              Our organization allows you to improve your leadership, communication, and
              time management skills and trains you to deal with pressure and manage
              your time more effectively, making this experience a solid foundation for
              personal and professional development.
            </p>

            <button className="bg-[#00629B] hover:bg-[#005282] text-white font-semibold py-2.5 sm:py-3 px-8 sm:px-10 rounded-full shadow-[0_10px_20px_rgba(0,98,155,0.3)] transition-all duration-300 text-sm sm:text-base">
              See More
            </button>
          </div>

          {/* Right Column: Stat Card */}
          <div className="bg-[#00629B] rounded-2xl flex items-center justify-center p-8 sm:p-10 w-full md:w-[420px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex-shrink-0">
            <div className="flex w-full divide-x divide-white/20 text-white">
              <div className="flex-1 text-center px-3 sm:px-4">
                <h3 className="text-4xl sm:text-5xl font-bold mb-2 sm:mb-3">9</h3>
                <p className="text-xs sm:text-sm font-light text-blue-50">Years on Tel-U</p>
              </div>
              <div className="flex-1 text-center px-3 sm:px-4">
                <h3 className="text-4xl sm:text-5xl font-bold mb-2 sm:mb-3">105</h3>
                <p className="text-xs sm:text-sm font-light text-blue-50">Current Officers</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Grow;
