import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageNavbar from '../components/PageNavbar';
import PageFooter from '../components/PageFooter';
import fotobersama from '../assets/image/fotobersama.png';
import './Departments.css';
import {
  ChevronDown, ArrowRight, Users, Briefcase, Megaphone,
  Code2, FlaskConical, TrendingUp, Handshake, Star, Lightbulb
} from 'lucide-react';

/* ─── Data ───────────────────────────────────────────────────────────── */
const departments = [
  {
    id: 'research', label: 'Research', icon: <FlaskConical className="w-4 h-4" />,
    accentColor: '#7c3aed',
    description: 'Focusing on reasoning which provides a forum for scientific development in the field of research and facilitates the potential achievements of all IEEE SB Telkom University officers.',
    detail: 'Apart from that, there is Outlook Project Management which is tasked with supervising each research project and reporting the results of research project achievements on a short or long term scale.',
    goals: [
      { title: 'Harmonization', desc: 'Creating good relationships between IEEE Telkom University Student Branch officers while undergoing the specified work program.', icon: <Handshake className="w-5 h-5" /> },
      { title: 'Synergy & Collaboration', desc: 'Carrying out work programs with other agencies that have new goals in developing the quality of each agency.', icon: <Users className="w-5 h-5" /> },
      { title: 'Performance', desc: 'Become a center of excellence for the work of Telkom University students which is ready to be launched on an international scale.', icon: <TrendingUp className="w-5 h-5" /> },
      { title: 'Innovation', desc: 'Creating new ideas from IEEE SB Telkom University members and officers to improve the quality of human resources IEEE SB Telkom University.', icon: <Lightbulb className="w-5 h-5" /> },
    ],
    directors: [
      { name: 'Nama', position: 'Posisi', level: 0 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
    ],
  },
  {
    id: 'education', label: 'Education', icon: <Star className="w-4 h-4" />,
    accentColor: '#2563eb',
    description: 'Responsible for developing the intellectual capacity of all IEEE SB Telkom members through workshops, seminars, and educational initiatives.',
    detail: 'The Education department curates and delivers programs that align with IEEE global standards to foster a culture of continuous learning among student engineers.',
    goals: [
      { title: 'Knowledge Sharing', desc: 'Facilitate knowledge transfer between members and the broader student community.', icon: <Lightbulb className="w-5 h-5" /> },
      { title: 'Skill Development', desc: 'Provide technical and soft-skill training to prepare members for professional roles.', icon: <Star className="w-5 h-5" /> },
      { title: 'Collaboration', desc: 'Partner with faculty and industry experts to deliver impactful educational programs.', icon: <Handshake className="w-5 h-5" /> },
      { title: 'Excellence', desc: 'Uphold high educational standards that reflect the values of IEEE globally.', icon: <TrendingUp className="w-5 h-5" /> },
    ],
    directors: [
      { name: 'Nama', position: 'Posisi', level: 0 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
    ],
  },
  {
    id: 'public_relation', label: 'Public Relation', icon: <Megaphone className="w-4 h-4" />,
    accentColor: '#db2777',
    description: "Handles external communications, social media management, sponsorships, and university connections to build IEEE SB Tel-U's public image.",
    detail: 'The PR department bridges the gap between IEEE SB Tel-U and the wider community, including corporate partners, universities, and media outlets.',
    goals: [
      { title: 'Brand Awareness', desc: 'Increase the visibility and credibility of IEEE SB Tel-U across all platforms.', icon: <Megaphone className="w-5 h-5" /> },
      { title: 'Partnership', desc: 'Establish mutually beneficial relationships with external organizations.', icon: <Handshake className="w-5 h-5" /> },
      { title: 'Engagement', desc: 'Foster active engagement with the broader student and tech community.', icon: <Users className="w-5 h-5" /> },
      { title: 'Impact', desc: "Create campaigns that meaningfully represent IEEE's mission and values.", icon: <TrendingUp className="w-5 h-5" /> },
    ],
    directors: [
      { name: 'Nama', position: 'Posisi', level: 0 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
    ],
  },
  {
    id: 'human_resource', label: 'Human Resource', icon: <Users className="w-4 h-4" />,
    accentColor: '#059669',
    description: 'Manages member recruitment, internal welfare, bonding activities, and develops the organizational capabilities of all IEEE SB Tel-U members.',
    detail: 'Human Resources ensures every member thrives through structured onboarding, mentorship programs, and inclusive organizational culture initiatives.',
    goals: [
      { title: 'Recruitment', desc: 'Attract talented and passionate students to join the IEEE family.', icon: <Users className="w-5 h-5" /> },
      { title: 'Retention', desc: 'Build loyalty through consistent engagement and recognition programs.', icon: <Star className="w-5 h-5" /> },
      { title: 'Development', desc: 'Equip members with leadership and organizational skills for the future.', icon: <TrendingUp className="w-5 h-5" /> },
      { title: 'Culture', desc: 'Foster a positive, inclusive, and collaborative working environment.', icon: <Handshake className="w-5 h-5" /> },
    ],
    directors: [
      { name: 'Nama', position: 'Posisi', level: 0 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
    ],
  },
  {
    id: 'creative', label: 'Creative & Information', icon: <Briefcase className="w-4 h-4" />,
    accentColor: '#d97706',
    description: 'Responsible for all visual design, creative content, documentation, and information management across IEEE SB Tel-U.',
    detail: 'The Creative & Information department crafts compelling visual stories and manages the information ecosystem of the organization.',
    goals: [
      { title: 'Visual Identity', desc: 'Maintain a consistent and professional brand identity for IEEE SB Tel-U.', icon: <Star className="w-5 h-5" /> },
      { title: 'Documentation', desc: 'Archive all organizational activities for institutional memory and transparency.', icon: <Briefcase className="w-5 h-5" /> },
      { title: 'Content', desc: 'Produce high-quality creative content that resonates with our audience.', icon: <Lightbulb className="w-5 h-5" /> },
      { title: 'Innovation', desc: 'Push creative boundaries to express the innovative spirit of IEEE.', icon: <TrendingUp className="w-5 h-5" /> },
    ],
    directors: [
      { name: 'Nama', position: 'Posisi', level: 0 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
    ],
  },
  {
    id: 'it', label: 'Information & Technology', icon: <Code2 className="w-4 h-4" />,
    accentColor: '#0284c7',
    description: 'Maintains the website, develops internal tools, manages digital infrastructure, and supports all technical needs of IEEE SB Telkom University.',
    detail: 'The IT department leads digital transformation initiatives, builds technical capacity among members, and represents IEEE in national-level hackathons and competitions.',
    goals: [
      { title: 'Digital Infrastructure', desc: 'Maintain reliable and secure digital systems for the organization.', icon: <Code2 className="w-5 h-5" /> },
      { title: 'Innovation', desc: 'Develop cutting-edge applications and tools that add value to the community.', icon: <Lightbulb className="w-5 h-5" /> },
      { title: 'Collaboration', desc: 'Work with all departments to deliver technical solutions.', icon: <Handshake className="w-5 h-5" /> },
      { title: 'Excellence', desc: 'Compete and excel in regional and national technology competitions.', icon: <TrendingUp className="w-5 h-5" /> },
    ],
    directors: [
      { name: 'Nama', position: 'Posisi', level: 0 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 1 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
      { name: 'Nama', position: 'Posisi', level: 2 },
    ],
  },
];

/* ─── Page ────────────────────────────────────────────────────────────── */
const DepartmentsPage = () => {
  const [activeId, setActiveId] = useState('research');
  const active = departments.find((d) => d.id === activeId);

  return (
    <div className="w-full min-h-screen bg-[#000B18] text-white font-sans flex flex-col overflow-x-hidden">

      {/* Hero */}
      <section className="relative w-full bg-[#000B18] pb-10">
        <PageNavbar />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none">
          <div className="absolute inset-0 rounded-full bg-blue-800/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center pt-4 pb-6">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
            IEEE Telkom University Student Branch
          </p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-8">
            DEPARTMENTS
          </h1>
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-[#00629B] text-white rounded-xl px-7 py-3 text-center min-w-[110px]">
              <div className="text-2xl font-black">9</div>
              <div className="text-[10px] text-blue-100 mt-0.5">Years on Tel-U</div>
            </div>
            <div className="bg-[#00629B] text-white rounded-xl px-7 py-3 text-center min-w-[110px]">
              <div className="text-2xl font-black">105</div>
              <div className="text-[10px] text-blue-100 mt-0.5">Current Officers</div>
            </div>
          </div>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Our organization allows you to improve your leadership, communication, and time management
            skills and trains you to deal with pressure and manage your time more effectively, making this
            experience a solid foundation for personal and professional development.
          </p>
          <div className="mt-8 flex justify-center animate-bounce">
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </section>

      {/* What is IEEE SB Tel-U — white bg */}
      <section className="w-full bg-white py-14">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#003B6F] mb-8">
            What is <span className="text-[#00629B]">IEEE SB Tel-U?</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-[45%] rounded-xl overflow-hidden shadow-md flex-shrink-0">
              <img src={fotobersama} alt="IEEE Community" className="w-full h-52 sm:h-64 object-cover" />
            </div>
            <div className="flex flex-col justify-start gap-5 flex-1">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                <strong className="text-[#003B6F]">IEEE SB Telkom University</strong> is the official
                reasoning UKM organization at Telkom University, functions as an intermediary between
                Telkom University students and IEEE as well as developing students in organizing and
                involving members in research and innovation development activities on a national to
                international scale.
              </p>
              <Link to="/">
                <button className="self-start bg-[#00629B] hover:bg-[#004f80] text-white font-semibold py-2.5 px-8 rounded-full text-sm transition-all duration-300 shadow-md">
                  See Departments
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision — split: white left / dark right */}
      <section className="w-full flex flex-col lg:flex-row">

        {/* LEFT — Vision — WHITE bg */}
        <div className="relative w-full lg:w-1/2 bg-white overflow-hidden flex items-center justify-center py-16 px-8 sm:px-14 min-h-[360px]">
          {/* Watermark — CENTERED with breathing animation */}
          <span
            className="watermark-breathe absolute inset-0 flex items-center justify-center select-none pointer-events-none text-[100px] sm:text-[130px] font-black text-gray-400 tracking-tight leading-none"
            aria-hidden="true"
          >
            VISION
          </span>
          <div className="relative z-10 max-w-sm">
            <p className="text-xs font-bold tracking-widest text-[#00629B] uppercase mb-4">OUR VISION</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              IEEE SB Telkom University is the official reasoning UKM organization at Telkom University,
              functions as an intermediary between Telkom University students and IEEE as well as
              developing students in organizing and involving members in research and innovation
              development activities on a national to international scale.
            </p>
          </div>
        </div>

        {/* RIGHT — Mission — DARK bg */}
        <div className="relative w-full lg:w-1/2 bg-[#000B18] overflow-hidden flex items-center justify-center py-16 px-8 sm:px-14 min-h-[360px]">
          {/* Watermark — CENTERED with breathing animation */}
          <span
            className="watermark-breathe absolute inset-0 flex items-center justify-center select-none pointer-events-none text-[100px] sm:text-[130px] font-black text-white/10 tracking-tight leading-none"
            aria-hidden="true"
          >
            MISSION
          </span>
          <div className="relative z-10 max-w-sm w-full">
            <p className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-5">OUR MISSION</p>
            <ul className="space-y-2.5">
              {[
                'Improving the quality of IEEE SB Tel-U officers better and being ready to take part in activities.',
                'Making IEEE SB Telkom University an open, innovative, creative and solution organization with a spirit of professionalism among officers.',
                'Making IEEE SB Telkom University a forum for students to move, work and discuss in the field of technology.',
                'Collaborating with internal campus and external campus parties.',
                'Creating IEEE Telkom University as part of UKM TEL-U which is active in the field of reasoning.',
                'Carrying out scientific studies, research and community service, especially in the application of technology in Indonesia.',
              ].map((m, i) => (
                <li key={i} className="flex gap-3 text-xs sm:text-sm text-gray-300 bg-white/5 border border-white/5 rounded-lg px-3 py-2.5 leading-snug">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Department Tabs */}
      <section className="w-full bg-[#000B18] py-14 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {departments.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveId(d.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 ${
                  activeId === d.id
                    ? 'bg-white text-[#001220] border-white shadow-lg'
                    : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-gray-200'
                }`}
              >
                {d.icon}
                {d.label}
              </button>
            ))}
          </div>

          <div
            key={activeId}
            className="dept-card-enter relative bg-[#00172d]/80 border border-blue-900/40 rounded-2xl p-8 sm:p-10 text-left overflow-hidden"
            style={{ boxShadow: `0 0 50px ${active.accentColor}18` }}
          >
            <div
              className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: active.accentColor }}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-black text-white mb-4">{active.label}</h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-3">{active.description}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{active.detail}</p>
              <button
                className="flex items-center gap-2 text-white text-sm font-semibold py-2 px-6 rounded-full border border-white/20 hover:bg-white hover:text-[#001220] transition-all duration-300"
                style={{ background: `${active.accentColor}33` }}
              >
                See Detail <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <GoalsSection goals={active.goals} accentColor={active.accentColor} />

      {/* Directors Team — SVG-based connector lines */}
      <DirectorsSection
        key={activeId}
        directors={active.directors}
        accentColor={active.accentColor}
        deptName={active.label}
      />

      <PageFooter showLocation={true} />
    </div>
  );
};

/* ─── Goals ──────────────────────────────────────────────────────────── */
const GoalsSection = ({ goals, accentColor }) => (
  <section className="w-full bg-[#000B18] py-14 sm:py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-black text-center text-white mb-12 tracking-tight">
        GOALS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {goals.map((g, i) => (
          <div
            key={i}
            className="relative bg-[#00172d]/60 border border-white/5 rounded-xl p-5 sm:p-7 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
          >
            <SvgDecor idx={i} />
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white mb-4"
              style={{ background: `${accentColor}33`, border: `1px solid ${accentColor}55` }}
            >
              {g.icon}
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-2">{g.title}</h4>
            <p className="text-gray-400 text-xs leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SvgDecor = ({ idx }) => {
  const paths = [
    'M0 55 Q25 35 50 45 T100 30 T140 40',
    'M0 45 Q30 25 60 35 T120 15 T160 30',
    'M0 35 L40 55 L80 25 L120 45 L160 30',
    'M0 50 Q45 30 85 40 T150 20',
  ];
  return (
    <svg className="absolute top-3 right-3 opacity-15 pointer-events-none" width="130" height="65" viewBox="0 0 140 65" fill="none">
      <path d={paths[idx % 4]} stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

/* ─── Directors Section — SVG lines measured from real DOM ───────────── */
const DirectorsSection = ({ directors, accentColor, deptName }) => {
  const head    = directors.filter(d => d.level === 0);
  const mid     = directors.filter(d => d.level === 1);
  const members = directors.filter(d => d.level === 2);

  const containerRef  = useRef(null);
  const headRefs      = useRef([]);
  const midRefs       = useRef([]);
  const memberRefs    = useRef([]);
  const [lines, setLines]     = useState([]);
  const [svgH, setSvgH]       = useState(0);
  const [svgW, setSvgW]       = useState(0);

  const computeLines = () => {
    const container = containerRef.current;
    if (!container) return;
    const cRect = container.getBoundingClientRect();
    if (cRect.width === 0) return;

    setSvgW(cRect.width);
    setSvgH(cRect.height);

    const rel = (el) => {
      const r = el.getBoundingClientRect();
      return { cx: r.left + r.width / 2 - cRect.left, top: r.top - cRect.top, bottom: r.bottom - cRect.top };
    };

    const newLines = [];
    const headEls    = headRefs.current.filter(Boolean);
    const midEls     = midRefs.current.slice(0, mid.length).filter(Boolean);
    const memberEls  = memberRefs.current.slice(0, members.length).filter(Boolean);

    // head bottom → horizontal bridge → drops into each mid card top
    if (headEls.length > 0 && midEls.length > 0) {
      const h = rel(headEls[0]);
      const firstM = rel(midEls[0]);
      const lastM  = rel(midEls[midEls.length - 1]);
      const barY   = h.bottom + (firstM.top - h.bottom) / 2;   // midpoint gap

      // vertical from head bottom to barY
      newLines.push([h.cx, h.bottom, h.cx, barY]);
      // horizontal bar
      newLines.push([firstM.cx, barY, lastM.cx, barY]);
      // vertical drops to each mid card
      midEls.forEach(el => {
        const p = rel(el);
        newLines.push([p.cx, barY, p.cx, p.top]);
      });
    }

    // mid row center → horizontal bridge → drops into each member card top
    if (midEls.length > 0 && memberEls.length > 0) {
      const midPositions = midEls.map(el => rel(el));
      const maxMidBottom = Math.max(...midPositions.map(p => p.bottom));
      const midGroupCx   = (rel(midEls[0]).cx + rel(midEls[midEls.length - 1]).cx) / 2;
      const firstMem     = rel(memberEls[0]);
      const lastMem      = rel(memberEls[memberEls.length - 1]);
      const barY         = maxMidBottom + (firstMem.top - maxMidBottom) / 2;

      // vertical from mid center bottom to barY
      newLines.push([midGroupCx, maxMidBottom, midGroupCx, barY]);
      // horizontal bar
      newLines.push([firstMem.cx, barY, lastMem.cx, barY]);
      // vertical drops to each member card
      memberEls.forEach(el => {
        const p = rel(el);
        newLines.push([p.cx, barY, p.cx, p.top]);
      });
    }

    setLines(newLines);
  };

  useLayoutEffect(() => { 
    computeLines(); 
  }, [directors]);

  useEffect(() => {
    window.addEventListener('resize', computeLines);
    return () => window.removeEventListener('resize', computeLines);
  }, [directors]);

  return (
    <section className="w-full bg-[#000B18] py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-black text-center text-white mb-1 tracking-tight">
          OUR DIRECTORS TEAM
        </h2>
        <p className="text-center text-gray-500 text-xs mb-14">{deptName} Department</p>

        {/* Org chart wrapper — SVG overlay reads positions relative to this */}
        <div ref={containerRef} className="relative pb-4">
          {/* SVG connector overlay — drawn on top of everything */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={svgW}
            height={svgH}
            style={{ overflow: 'visible' }}
          >
            {lines.map((l, i) => (
              <line
                key={i}
                x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]}
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ))}
          </svg>

          {/* Level 0 — Head */}
          <div className="flex justify-center mb-16">
            <div ref={el => { headRefs.current[0] = el; }}>
              {head.length > 0 && <PersonCard person={head[0]} accentColor={accentColor} size="lg" />}
            </div>
          </div>

          {/* Level 1 — Mid row */}
          {mid.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16">
              {mid.map((p, i) => (
                <div key={i} ref={el => { midRefs.current[i] = el; }}>
                  <PersonCard person={p} accentColor={accentColor} size="md" />
                </div>
              ))}
            </div>
          )}

          {/* Level 2 — Members row */}
          {members.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {members.map((p, i) => (
                <div key={i} ref={el => { memberRefs.current[i] = el; }}>
                  <PersonCard person={p} accentColor={accentColor} size="sm" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/* ─── Person Card ─────────────────────────────────────────────────────── */
const PersonCard = ({ person, accentColor, size }) => {
  const cfg = {
    lg: { wrap: 'w-28 sm:w-32', img: 'w-16 h-16 sm:w-20 sm:h-20', pos: 'text-[10px] sm:text-xs', name: 'text-[9px] sm:text-[10px]' },
    md: { wrap: 'w-24 sm:w-28', img: 'w-14 h-14 sm:w-16 sm:h-16', pos: 'text-[9px] sm:text-[10px]', name: 'text-[8px] sm:text-[9px]' },
    sm: { wrap: 'w-20 sm:w-24', img: 'w-11 h-11 sm:w-14 sm:h-14', pos: 'text-[8px] sm:text-[9px]', name: 'text-[7px] sm:text-[8px]' },
  }[size];

  return (
    <div
      className={`${cfg.wrap} flex flex-col items-center bg-[#001a2e] border rounded-xl p-2.5 sm:p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer`}
      style={{ borderColor: `${accentColor}44` }}
    >
      <div
        className={`${cfg.img} rounded-lg overflow-hidden mb-2 flex items-center justify-center text-white font-bold text-base`}
        style={{ background: `${accentColor}33`, border: `1.5px solid ${accentColor}66` }}
      >
        {person.name[0]}
      </div>
      <p className={`${cfg.pos} font-semibold text-white text-center leading-tight`}>{person.position}</p>
      <p className={`${cfg.name} text-gray-400 text-center`}>{person.name}</p>
    </div>
  );
};

export default DepartmentsPage;
