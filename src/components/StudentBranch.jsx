import React from 'react';

const StudentBranch = () => {
  return (
    <section id="about" className="py-12 sm:py-16 text-white border-t border-ocean-900 mt-4 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 sm:items-end justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Student Branch</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            We function as the intermediary between Telkom University student and IEEE as well as student development in organizing and involving members in research and innovation development activities on a national to international scale.
          </p>
        </div>

        <div className="flex gap-3 sm:gap-4 pb-2 flex-shrink-0">
          <button className="bg-transparent border border-gray-500 hover:border-white text-gray-300 hover:text-white py-2 px-5 sm:px-6 rounded-full text-xs sm:text-sm font-medium transition-all duration-300">
            10 Divisions
          </button>
          <button className="bg-ocean-800 hover:bg-ocean-700 text-white py-2 px-5 sm:px-6 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(1,108,165,0.4)]">
            6 Departments
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentBranch;
