import React from 'react';

const StudentBranch = () => {
  return (
    <section className="py-16 text-white border-t border-ocean-900 mt-8 relative">
      <div className="flex flex-col md:flex-row gap-10 md:items-end justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 text-white">Student Branch</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            We function as the intermediary between Telkom University student and IEEE as well as student development in organizing and involving members in research and innovation development activities on a national to international scale.
          </p>
        </div>

        <div className="flex gap-4 pb-2">
          <button className="bg-transparent border border-gray-500 hover:border-white text-gray-300 hover:text-white mb-4 py-2 px-6 rounded-full text-sm font-medium transition-all duration-300">
            10 Divisions
          </button>
          <button className="bg-ocean-800 hover:bg-ocean-700 text-white mb-4 py-2 px-6 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(1,108,165,0.4)]">
            6 Departments
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentBranch;
