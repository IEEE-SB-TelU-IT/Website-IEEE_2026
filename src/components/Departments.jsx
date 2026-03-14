import React from 'react';

const Departments = () => {
  const depts = [
    { title: "Secretary", desc: "Responsible for administration and secretarial duties that run the branch." },
    { title: "Human Resources", desc: "Manage member recruitment, bonding activities, and internal capabilities." },
    { title: "Public Relations", desc: "Handles external communications, social media, and university connections." },
    { title: "Information Technology", desc: "Maintains the website, develops tools, and supports technical needs." },
    { title: "Research & Development", desc: "Leads technical projects, study groups, and hackathon participations." },
    { title: "Finance & Fundraising", desc: "Manages financial aspects, sponsorships, and merchandise." }
  ];

  return (
    <section id="departments" className="py-20 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Departments</h2>
      <p className="text-gray-300 text-sm mb-16 text-center max-w-2xl">
        A list of the departments that are part of IEEE SB Telkom University, each representing different roles and responsibilities in the organization
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {depts.map((dept, idx) => (
          <div key={idx} className="relative group p-[1px] bg-gradient-to-br from-blue-3/50 to-ocean-900/10 rounded-xl overflow-hidden">
            <div className="h-full bg-[#001220] p-8 rounded-xl flex flex-col relative z-10 transition-colors group-hover:bg-[#001a2e]">
              <h3 className="text-lg font-bold text-blue-1 mb-3">{dept.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-8 flex-grow">
                {dept.desc}
              </p>

              <div className="text-xs text-blue-5 font-semibold mt-auto flex items-center">
                See More <span className="ml-1">→</span>
              </div>

              <div className="absolute right-0 bottom-0 opacity-10 text-6xl transform translate-x-1/4 translate-y-1/4">
                ⚙️
              </div>
            </div>

            <div className="absolute top-0 right-0 w-8 h-8 bg-black z-20" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Departments;
