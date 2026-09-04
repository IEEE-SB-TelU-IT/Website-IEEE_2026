import React from 'react';
import { Link } from 'react-router-dom';

// Import department images (used as faded watermark — very subtle like in design)
import imgResearch from '../assets/image/departments/Research 1.png';
import imgHR       from '../assets/image/departments/HR 1.png';
import imgPR       from '../assets/image/departments/Public Relation 1.png';
import imgIT       from '../assets/image/departments/IT 1.png';
import imgEdu      from '../assets/image/departments/EDU (1) 1.png';
import imgCI       from '../assets/image/departments/CI 1.png';

const depts = [
  { id: 'research',        title: 'Research',                 img: imgResearch },
  { id: 'human_resource',  title: 'Human Resource',           img: imgHR       },
  { id: 'public_relation', title: 'Public Relation',          img: imgPR       },
  { id: 'it',              title: 'Information & Technology', img: imgIT       },
  { id: 'education',       title: 'Education',                img: imgEdu      },
  { id: 'creative',        title: 'Creative & Information',   img: imgCI       },
];

const DESC = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci...';

/* ── Department Card — matches Frame 48 exactly ── */
const DeptCard = ({ dept }) => (
  <Link to={`/departments/${dept.id}`} className="block group h-full">
    {/* Outer container: dark navy with blue border */}
    <div
      className="relative h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-0.5"
      style={{
        background: '#051626',
        border: '1.5px solid #1a4a7a',
        boxShadow: '0 0 0 0.5px #0d2d4a',
      }}
    >
      {/* ── Corner fold: solid blue triangle top-right ── */}
      <div
        className="absolute top-0 right-0 z-20"
        style={{
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '0 38px 38px 0',
          borderColor: 'transparent #1a5fa8 transparent transparent',
        }}
      />

      {/* ── Department image watermark ── */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none select-none">
        <img
          src={dept.img}
          alt=""
          aria-hidden="true"
          className="absolute bottom-[44px] right-0 w-[55%] h-[55%] object-contain object-right-bottom"
          style={{ opacity: 0.07 }}
        />
      </div>

      {/* ── Text content ── */}
      <div className="relative z-10 p-5 flex flex-col flex-1 pb-3">
        <h3 className="text-sm sm:text-[15px] font-bold text-white mb-3 pr-8 leading-snug">
          {dept.title}
        </h3>
        <p className="text-[12.5px] text-gray-300 leading-relaxed flex-1">
          {DESC}
        </p>
      </div>

      {/* ── See More — full-width bar at bottom ── */}
      <div
        className="relative z-10 mt-2"
        style={{
          background: 'rgba(2, 40, 80, 0.7)',
          borderTop: '1px solid #1a4a7a',
        }}
      >
        <div className="px-5 py-3 text-center">
          <span
            className="text-sm font-semibold text-white transition-colors group-hover:text-blue-300"
            style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            See More
          </span>
        </div>
      </div>
    </div>
  </Link>
);

/* ── Combined Departments + StudentBranch section ── */
/* In the design these share the same dark background block */
const DepartmentsSection = () => (
  <section className="w-full" style={{ background: '#020d1a' }}>
    {/* Departments */}
    <div
      id="departments"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white text-center">
        Departments
      </h2>
      <p className="text-gray-300 text-sm mb-10 text-center max-w-2xl mx-auto">
        A list of the departments that are part of IEEE SB Telkom University, each representing
        different roles and responsibilities in the organization
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {depts.map((dept) => (
          <DeptCard key={dept.id} dept={dept} />
        ))}
      </div>
    </div>

    {/* Divider */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-t border-white/10" />
    </div>

    {/* Student Branch — sits inside same dark section, below departments */}
    <div
      id="about"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 sm:items-center justify-between">
        {/* Text left */}
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            Student Branch
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            We function as the intermediary between Telkom University student and IEEE as well as
            student development in organizing and involving members in research and innovation
            development activities on a national to international scale.
          </p>
        </div>

        {/* Buttons right */}
        <div className="flex gap-3 sm:gap-4 flex-shrink-0">
          <button
            className="border text-gray-300 hover:text-white py-2 px-5 sm:px-6 rounded-full text-xs sm:text-sm font-medium transition-all duration-300"
            style={{ borderColor: '#2a4a6a', background: 'transparent' }}
          >
            10+ Divisions
          </button>
          <button
            className="text-white py-2 px-5 sm:px-6 rounded-full text-xs sm:text-sm font-medium transition-all duration-300"
            style={{
              background: '#00629B',
              boxShadow: '0 0 16px rgba(0,98,155,0.4)',
            }}
          >
            6 Departments
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default DepartmentsSection;
