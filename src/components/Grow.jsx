import React from 'react';

const Grow = () => {
  return (
    <section className="bg-white text-black py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between">

        {/* Kolom Kiri: Teks & Button */}
        <div className="max-w-xl text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-black inline-block relative">
            {/* Seluruh Kalimat */}
            <span>Your Place to <span className="text-[#00629B]">Grow</span></span>

            {/* Garis Bawah untuk seluruh kalimat */}
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#00629B]"></span>
          </h2>

          <p className="text-gray-700 mb-10 leading-relaxed text-base font-medium">
            Our organization allows you to improve your leadership, communication, and
            time management skills and trains you to deal with pressure and manage
            your time more effectively, making this experience a solid foundation for
            personal and professional development.
          </p>

          <button className="bg-[#00629B] hover:bg-[#005282] text-white font-semibold py-3 px-10 rounded-full shadow-[0_10px_20px_rgba(0,98,155,0.3)] transition-all duration-300">
            See More
          </button>
        </div>

        {/* Kolom Kanan: Stat Card */}
        <div className="bg-[#00629B] rounded-2xl flex items-center justify-center p-10 w-full md:w-[450px] shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
          <div className="flex w-full divide-x divide-white/20 text-white">
            <div className="flex-1 text-center px-4">
              <h3 className="text-5xl font-bold mb-3">9</h3>
              <p className="text-sm font-light text-blue-50">Years on Tel-U</p>
            </div>
            <div className="flex-1 text-center px-4">
              <h3 className="text-5xl font-bold mb-3">105</h3>
              <p className="text-sm font-light text-blue-50">Current Officers</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Grow;
