import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Instagram, Linkedin, Music2 } from 'lucide-react';
import logo from '../assets/image/logo.png';

/* ─── NAVBAR — 3 links: About Us | News | Achievements ─── */
const Navbar = () => (
  <div
    className="w-full sticky top-0 z-50"
    style={{ background: 'rgba(5,10,20,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
      <Link to="/">
        <img src={logo} alt="IEEE" className="h-8 object-contain" />
      </Link>
      <div className="hidden md:flex items-center gap-10 text-sm font-medium">
        <Link to="/#about"       className="text-gray-300 hover:text-white transition-colors">About Us</Link>
        <Link to="/news"         className="text-gray-300 hover:text-white transition-colors">News</Link>
        <Link to="/achievements" className="text-gray-300 hover:text-white transition-colors">Achievements</Link>
      </div>
      <button
        className="text-white text-sm font-bold py-2 px-6 rounded-full border border-white/10"
        style={{ background: '#00629B' }}
      >
        Membership
      </button>
    </div>
  </div>
);

/* ─── FOOTER — persis sama dengan Footer di Home ─── */
const HomeFooter = () => (
  <footer className="bg-black py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto bg-[#00629B] rounded-[28px] sm:rounded-[40px] px-6 sm:px-10 md:px-16 pt-8 sm:pt-10 pb-8 sm:pb-10 text-white relative overflow-hidden shadow-2xl">

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-3xl mx-auto leading-tight">
          Reach us, If you want to join or know more about IEEE Telkom University Student Branch.
        </h2>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/20 mb-6 sm:mb-8" />

      {/* Address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mb-8 sm:mb-12">
        <div>
          <p className="text-sm font-bold mb-1 tracking-wider">Where to find us</p>
          <div className="text-sm leading-relaxed space-y-0.5 font-bold opacity-90">
            <p>Jl. Telekomunikasi,</p>
            <p>Jl. Terusan Buah Batu No.01,</p>
            <p>Sukapura, Dayeuhkolot, Bandung, Jawa Barat 40257</p>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-6">
        <div className="flex items-center">
          <img src={logo} alt="IEEE Logo" className="h-7 sm:h-8 object-contain brightness-0 invert" />
        </div>
        <div className="text-xs sm:text-sm opacity-90 text-center font-bold order-last sm:order-none">
          © 2024 IEEE SB Telkom University · All rights reserved.
        </div>
        <div className="flex items-center gap-4 sm:gap-5">
          <a href="#" className="hover:opacity-100 opacity-80 transition-opacity p-1"><Instagram size={20} /></a>
          <a href="#" className="hover:opacity-100 opacity-80 transition-opacity p-1"><Linkedin size={20} /></a>
          <a href="#" className="hover:opacity-100 opacity-80 transition-opacity p-1"><Music2 size={20} /></a>
        </div>
      </div>
    </div>
  </footer>
);

/* ─── DEPT DATA ─── */
const departments = {
  research: {
    label: 'Research',
    whatWeDo: 'Research is tasked with building and facilitating scientific development by providing a forum for research activities at IEEE SB Telkom University. This aims to support innovation and knowledge sharing among all officers.',
    whatWeDo2: 'This aims to create good academic impact and support the running of activities or research-based events.',
    programs: [
      { name: 'Research Expo', desc: 'The Research Expo Division is responsible for organising the annual showcase of student research projects, recognising the best research each cycle through "Research of the Month", and publishing research findings through IEEE channels. In addition, the division manages research project timelines, compiles research summaries, and creates templates for research reports.' },
      { name: 'Innovation Lab', desc: "The Innovation Lab Division is tasked with facilitating hands-on experiments and prototyping sessions, organising study groups on emerging technologies, and collaborating with other branches to explore research trends. They also host ideation workshops and maintain the division's internal research repository." },
    ],
    head: { name: 'Nama', position: 'Head of Research' },
    mid: [
      { name: 'Nama', position: 'Posisi' },
      { name: 'Nama', position: 'Posisi' },
      { name: 'Nama', position: 'Posisi' },
      { name: 'Nama', position: 'Posisi' },
    ],
    members: [
      { name: 'Nama', position: 'Posisi' },
      { name: 'Nama', position: 'Posisi' },
      { name: 'Nama', position: 'Posisi' },
      { name: 'Nama', position: 'Posisi' },
      { name: 'Nama', position: 'Posisi' },
      { name: 'Nama', position: 'Posisi' },
    ],
  },
  education: {
    label: 'Education',
    whatWeDo: 'Education is responsible for developing the intellectual capacity of all IEEE SB Telkom members through workshops, seminars, and structured learning programs aligned with IEEE global standards.',
    whatWeDo2: 'This aims to foster a culture of continuous learning and skill development among all student engineers at Telkom University.',
    programs: [
      { name: 'Workshop Division', desc: 'The Workshop Division organises hands-on technical sessions covering topics such as programming, hardware design, and data science. They create workshop materials, manage registrations, and ensure participants receive certificates upon completion.' },
      { name: 'Seminar Division', desc: 'The Seminar Division is tasked with planning and executing knowledge-sharing seminars, inviting academic and industry experts, managing live streaming for virtual participants, and compiling session recordings for the IEEE SB archive.' },
    ],
    head: { name: 'Nama', position: 'Head of Education' },
    mid: [{ name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }],
    members: [{ name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }],
  },
  public_relation: {
    label: 'Public Relation',
    whatWeDo: 'Public Relations is tasked with building and establishing relationships with external branch parties, between SB Telkom University and other SBs, the University, Telkom University students, other external agencies, and the general public.',
    whatWeDo2: 'This aims to create good relationships and be able to support the running of activities or events.',
    programs: [
      { name: 'Design', desc: 'The Design Division is responsible for upgrading the Instagram feed with attractive and informative designs. They create visual content such as officer photos, recognise the best officer each month through "Officer of the Month", and inform important events and announcements from IEEE through "IEEE Louds". In addition, the division is also responsible for graphic design, which includes creating posters for events and announcements, providing story templates for Instagram stories, creating templates for event live reports, and designing certificates for various award and participation purposes. In addition, the division also created designs for IEEE SB TELU merchandise, which includes products such as jackets, caps, lanyards, stickers, tumblers, keychains, wristbands, and totebags.' },
      { name: 'Social Media', desc: 'The Social Media Division is tasked with the role of Instagram and TikTok admin, which involves providing interactive live sessions on social media platforms through the programme "Live with Minbieee", as well as collaborating with other media to expand reach through the programme "Media Partner". In addition, they are also responsible as content creators, which includes creating membership-related content, compiling trivia, generating Road to an Event content, delivering the latest news and important information, and showcasing the Today Wear IEEE Jacket.' },
    ],
    head: { name: 'Nama', position: 'Head of...' },
    mid: [{ name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }],
    members: [{ name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }],
  },
  human_resource: {
    label: 'Human Resource',
    whatWeDo: 'Human Resources manages member recruitment, internal welfare, bonding activities, and develops the organizational capabilities of all IEEE SB Tel-U members.',
    whatWeDo2: 'This ensures every member thrives through structured onboarding, mentorship, and an inclusive organizational culture.',
    programs: [
      { name: 'Recruitment Division', desc: 'The Recruitment Division manages the open recruitment process for new IEEE SB members, which includes designing the selection process, conducting interviews, and onboarding new members. They also create recruitment campaign materials and manage communication with applicants throughout the process.' },
      { name: 'Member Welfare Division', desc: 'The Member Welfare Division is responsible for organising bonding activities, celebrating member achievements, providing mental health support resources, and conducting regular check-ins with officers. They also coordinate internal gatherings and maintain the member database.' },
    ],
    head: { name: 'Nama', position: 'Head of HR' },
    mid: [{ name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }],
    members: [{ name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }],
  },
  creative: {
    label: 'Creative & Information',
    whatWeDo: 'Creative & Information is responsible for all visual design, creative content, documentation, and information management across IEEE SB Tel-U.',
    whatWeDo2: 'This department crafts compelling visual stories and manages the information ecosystem of the organization to maintain brand consistency.',
    programs: [
      { name: 'Creative Design Division', desc: "The Creative Design Division handles all visual assets for the organisation, including event posters, social media graphics, presentation templates, and merchandise design. They maintain brand guidelines and ensure all visual content aligns with IEEE SB Tel-U's identity." },
      { name: 'Documentation Division', desc: 'The Documentation Division archives all organisational activities, produces the annual report, manages the organisation\'s digital library, and creates video documentation of events. They also handle the production of official letters and administrative documents.' },
    ],
    head: { name: 'Nama', position: 'Head of Creative' },
    mid: [{ name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }],
    members: [{ name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }],
  },
  it: {
    label: 'Information & Technology',
    whatWeDo: 'Information & Technology maintains the website, develops internal tools, manages digital infrastructure, and supports all technical needs of IEEE SB Telkom University.',
    whatWeDo2: 'The IT department leads digital transformation initiatives and represents IEEE in national-level hackathons and competitions.',
    programs: [
      { name: 'Web Development Division', desc: 'The Web Development Division is responsible for building and maintaining the official IEEE SB Tel-U website, developing internal management tools, implementing new features based on organisational needs, and ensuring the platform is always up-to-date and secure. They also manage domain and hosting services.' },
      { name: 'Competition Division', desc: "The Competition Division organises and coordinates the branch's participation in national and regional hackathons and technology competitions. They recruit and train competitive teams, provide resources and mentoring, and document the branch's competition history and achievements." },
    ],
    head: { name: 'Nama', position: 'Head of IT' },
    mid: [{ name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }],
    members: [{ name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }, { name: 'Nama', position: 'Posisi' }],
  },
};

/* ─── PHOTO CARD ─── */
const PhotoCard = ({ person, size = 'md' }) => {
  const isLg = size === 'lg';
  return (
    <div
      className={`flex flex-col items-center rounded-xl overflow-hidden flex-shrink-0 ${isLg ? 'w-36 sm:w-40' : 'w-24 sm:w-28'}`}
      style={{ border: '2px solid #1a5fa8', background: '#040d1a' }}
    >
      <div
        className={`w-full flex items-center justify-center ${isLg ? 'h-32 sm:h-36' : 'h-20 sm:h-24'}`}
        style={{ background: '#0a1e30' }}
      >
        <img src={logo} alt={person.name} className="w-3/4 h-3/4 object-contain opacity-50" />
      </div>
      <div className="w-full text-center py-2 px-1" style={{ background: '#003a6b' }}>
        <p className={`font-semibold text-white leading-tight ${isLg ? 'text-xs' : 'text-[9px]'}`}>{person.position}</p>
        <p className={`text-blue-300 ${isLg ? 'text-[10px]' : 'text-[8px]'}`}>{person.name}</p>
      </div>
    </div>
  );
};

/* ─── MEMBER CAROUSEL ─── */
const MemberCarousel = ({ members }) => {
  const [page, setPage] = useState(0);
  const perPage = 5;
  const totalPages = Math.ceil(members.length / perPage);
  const visible = members.slice(page * perPage, page * perPage + perPage);

  return (
    <div className="relative">
      <button
        onClick={() => setPage(p => Math.max(0, p - 1))}
        disabled={page === 0}
        className="absolute -left-8 sm:-left-10 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-20"
        style={{ background: '#0a1e30', border: '1px solid #1a4a7a' }}
      >
        <ChevronLeft className="w-4 h-4 text-white" />
      </button>

      <div className="flex justify-center gap-3 sm:gap-4 overflow-hidden">
        {visible.map((p, i) => (
          <PhotoCard key={i} person={p} size="md" />
        ))}
      </div>

      <button
        onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
        disabled={page >= totalPages - 1}
        className="absolute -right-8 sm:-right-10 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-20"
        style={{ background: '#0a1e30', border: '1px solid #1a4a7a' }}
      >
        <ChevronRight className="w-4 h-4 text-white" />
      </button>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="rounded-full transition-all"
              style={{ width: i === page ? 20 : 8, height: 8, background: i === page ? '#00629B' : '#1e3a5f' }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── MAIN ─── */
const DepartmentDetail = () => {
  const { id } = useParams();
  const dept = departments[id];

  if (!dept) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#050f1e', color: 'white' }}>
      <div className="text-center">
        <p className="text-gray-400 mb-4">Department not found.</p>
        <Link to="/departments" className="text-blue-400 hover:text-blue-300">← Back to Departments</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans" style={{ background: '#050f1e', color: 'white' }}>
      <Navbar />

      {/* ── TITLE ── */}
      <section className="text-center pt-14 pb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-black text-white">{dept.label}</h1>
      </section>

      {/* ── TEAM PHOTOS ── */}
      <section className="pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-10">
            <PhotoCard person={dept.head} size="lg" />
          </div>
          <div className="px-10 sm:px-12">
            <MemberCarousel members={dept.mid.concat(dept.members)} />
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-10 px-4">
        <div
          className="max-w-2xl mx-auto rounded-2xl p-8"
          style={{ background: 'rgba(0,23,50,0.6)', border: '1px solid rgba(30,74,122,0.5)' }}
        >
          <h2 className="text-xl font-black text-white text-center mb-5">What We Do</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{dept.whatWeDo}</p>
          <p className="text-gray-300 text-sm leading-relaxed">{dept.whatWeDo2}</p>
        </div>
      </section>

      {/* ── WORK PROGRAMS ── */}
      <section className="py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Work Programs</h2>
            <div className="flex justify-center">
              <div className="h-0.5 w-16 rounded-full" style={{ background: '#00629B' }} />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {dept.programs.map((prog, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-2xl overflow-hidden"
                style={{ background: 'rgba(0,18,40,0.8)', border: '1px solid rgba(30,74,122,0.4)' }}
              >
                {/* Image placeholder */}
                <div
                  className="flex-shrink-0 w-24 sm:w-28 flex items-center justify-center"
                  style={{ background: '#0a1624', minHeight: 100 }}
                >
                  <div className="flex items-center justify-center opacity-30">
                    <div className="w-10 h-10 rounded border border-gray-500 flex items-center justify-center text-gray-400 text-xl">
                      🖼
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="py-5 pr-5 flex flex-col justify-center">
                  <h4 className="text-sm font-bold text-white mb-2">{prog.name}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER — sama dengan Home ── */}
      <HomeFooter />
    </div>
  );
};

export default DepartmentDetail;
