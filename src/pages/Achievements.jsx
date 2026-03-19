import React from 'react';
import PageNavbar from '../components/PageNavbar';
import PageFooter from '../components/PageFooter';
import { Trophy, CheckCircle, ExternalLink, Download } from 'lucide-react';
import contoh1 from '../assets/image/contoh1.png';
import contoh2 from '../assets/image/contoh2.png';
import fotobersama from '../assets/image/fotobersama.png'; // Will use as profile placeholders for now

const Achievements = () => {
  const tabs = ['Awards', 'Technical Projects', 'Member Recognition'];

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white font-sans relative flex flex-col">
      <PageNavbar showSearch={false} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-20">

        <div className="bg-gradient-to-r from-[#012a52] to-[#01427a] rounded-3xl p-10 md:p-14 mb-16 relative overflow-hidden flex flex-col justify-between shadow-2xl">
          <div className="absolute -top-24 -right-10 w-64 h-64 bg-ocean-500/20 rounded-full blur-[60px]"></div>

          <div className="relative z-10 max-w-2xl mb-16">
            <div className="inline-block px-3 py-1 bg-white/10 rounded border border-white/20 text-[10px] font-bold tracking-widest uppercase mb-6">
              EXCELLENCE IN ENGINEERING
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Achievements & Hall of Fame
            </h1>
            <p className="text-blue-100/80 leading-relaxed max-w-lg">
              Celebrating the milestones, technical breakthroughs, and the outstanding community that defines our IEEE Student Branch.
            </p>

            <div className="absolute top-0 right-0 hidden md:block opacity-20">
              <Trophy className="w-48 h-48" strokeWidth={1} />
            </div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 flex-wrap">
            <StatBox icon={<span className="text-xl">🏆</span>} label="AWARDS WON" value="45+" />
            <StatBox icon={<span className="text-xl">💻</span>} label="ACTIVE PROJECTS" value="12" />
            <StatBox icon={<span className="text-xl">👥</span>} label="MEMBERS RECOGNITION" value="300+" />
          </div>
        </div>

        <div className="flex gap-8 border-b border-gray-800 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              className={`whitespace-nowrap pb-4 text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors ${idx === 0 ? 'border-ocean-500 text-ocean-400' : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
            >
              {idx === 0 && <span className="text-ocean-500 font-bold">!</span>}
              {idx === 1 && <span className="text-gray-500">⚙️</span>}
              {idx === 2 && <span className="text-gray-500">👥</span>}
              {tab}
            </button>
          ))}
        </div>

        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold">Global & National Awards</h2>
            <a href="#" className="text-sm text-ocean-500 hover:text-ocean-400 flex items-center">
              View All <span className="ml-1 leading-none text-lg">›</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AwardCard
              year="2024"
              title="Outstanding Student Branch"
              desc="IEEE Region 10 (Asia Pacific) recognition for exceptional activities and student engagement."
              org="IEEE R10 Council"
              icon={<CheckCircle className="w-5 h-5 text-ocean-400" />}
            />
            <AwardCard
              year="2023"
              title="1st Place IoT Innovation"
              desc="National Smart City Hackathon winner for AI-driven traffic management system."
              org="Kemendikbud Ristek"
              icon={<Download className="w-5 h-5 text-gray-500" />}
            />
            <AwardCard
              year="2023"
              title="Best Community Impact"
              desc="IEEE Humanitarian Activities Committee recognition for 'Tech to Village' program."
              org="IEEE HAC"
              icon={<span className="w-6 h-6 rounded bg-ocean-900 flex items-center justify-center text-xs">👥</span>}
            />
          </div>
        </div>

        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Technical Showcases</h2>
              <p className="text-gray-400 text-sm">Pioneering projects in AI, IoT, and Renewable Energy.</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-gray-400">#ArtificialIntelligence</span>
              <span className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-gray-400">#InternetOfThings</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              tags={['AI LAB', 'ACTIVE']}
              title="NeuroAssist Vision"
              desc="A machine learning framework designed to assist visually impaired individuals using real-time spatial mapping and object recognition."
              img={contoh1}
            />
            <ProjectCard
              tags={['IOT UNIT', 'BETA']}
              title="EcoGrid Smart Monitoring"
              desc="Integrated IoT system for monitoring residential energy consumption with cloud-based predictive analytics for optimization."
              img={contoh2}
            />
          </div>
        </div>

        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Member Recognition</h2>
          <p className="text-gray-400 text-sm mb-12">Honoring the individuals whose dedication and expertise have pushed our student branch forward.</p>

          <div className="flex justify-center flex-wrap gap-x-12 gap-y-10">
            <MemberProfile name="Fadhil Rahman" role="Chairperson 2023" award="IEEE Leadership Excellence Award" />
            <MemberProfile name="Sarah Amira" role="Lead Developer" award="Best Technical Contributor" />
            <MemberProfile name="Kevin Wijaya" role="External Relations" award="Networker of the Year" />
            <MemberProfile name="Larasati Putri" role="Secretary" award="Member Excellence Award" />
            <MemberProfile name="Budi Santoso" role="Treasurer" award="Operational Excellence" />
          </div>
        </div>

      </main>

      <PageFooter showLocation={true} />
    </div>
  );
};

const StatBox = ({ icon, label, value }) => (
  <div className="bg-[#0b1c31]/60 backdrop-blur-md rounded-xl p-6 flex flex-col justify-between border border-blue-500/20 min-w-[200px] flex-1">
    <div className="flex items-center gap-2 mb-6 text-sm font-semibold text-blue-200 tracking-wider">
      {icon} {label}
    </div>
    <div className="text-4xl font-black text-white">{value}</div>
  </div>
);

const AwardCard = ({ year, title, desc, org, icon }) => (
  <div className="bg-[#1e293b]/40 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:bg-[#1e293b]/80 transition">
    <div>
      <div className="flex justify-between items-start mb-4">
        <span className="px-2 py-0.5 rounded border border-ocean-800 text-ocean-400 text-xs font-medium">{year}</span>
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">{desc}</p>
    </div>
    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
      <div className="w-5 h-5 rounded-full bg-slate-700"></div>
      {org}
    </div>
  </div>
);

const ProjectCard = ({ tags, title, desc, img }) => (
  <div className="bg-[#1e293b]/30 border border-slate-800 rounded-2xl flex flex-col sm:flex-row overflow-hidden hover:border-slate-700 transition">
    <div className="w-full sm:w-2/5 md:w-1/2 p-2">
      <div className="w-full h-48 sm:h-full bg-black rounded-xl overflow-hidden relative">
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity" />
      </div>
    </div>
    <div className="w-full sm:w-3/5 md:w-1/2 p-6 flex flex-col justify-center">
      <div className="flex gap-2 mb-3">
        {tags.map(t => (
          <span key={t} className={`px-2 py-0.5 rounded text-[10px] font-bold ${t === 'ACTIVE' ? 'bg-green-500 text-white' : 'bg-ocean-600 text-white'}`}>{t}</span>
        ))}
      </div>
      <h3 className="text-md font-bold mb-2">{title}</h3>
      <p className="text-xs text-gray-400 mb-5 leading-relaxed">{desc}</p>

      <a href="#" className="flex items-center gap-2 text-xs font-semibold text-ocean-400 hover:text-ocean-300">
        Documentation <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  </div>
);

const MemberProfile = ({ name, role, award }) => (
  <div className="flex flex-col items-center">
    <div className="w-24 h-24 rounded-full border border-dashed border-ocean-500 p-1 mb-4">
      <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden">
        <img src={fotobersama} alt={name} className="w-full h-full object-cover" />
      </div>
    </div>
    <h4 className="font-bold text-sm mb-1">{name}</h4>
    <p className="text-xs text-ocean-400 mb-0.5">{role}</p>
    <p className="text-[10px] text-gray-500 max-w-[120px] text-center">{award}</p>
  </div>
);

export default Achievements;
