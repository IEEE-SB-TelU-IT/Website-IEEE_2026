import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Instagram, Linkedin, Music2, User } from 'lucide-react';
import logo from '../assets/image/logo.png';
import { departmentsApi, officersApi, programsApi } from '../services/apiService';

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
        {person.photo_url ? (
          <img src={person.photo_url} alt={person.name} className="w-full h-full object-cover" />
        ) : (
          <User className="w-10 h-10 text-blue-300/40" />
        )}
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
  const [dept, setDept] = useState(null);
  const [officers, setOfficers] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    Promise.all([
      departmentsApi.getById(id),
      officersApi.getByDepartment(id),
      programsApi.getByDepartment(id),
    ])
      .then(([deptRes, officersRes, programsRes]) => {
        if (cancelled) return;
        setDept(deptRes.data || null);
        setOfficers(Array.isArray(officersRes.data) ? officersRes.data : []);
        setPrograms(Array.isArray(programsRes.data) ? programsRes.data : []);
        setError(null);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || 'Gagal ambil data department');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#050f1e', color: 'white' }}>
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    );
  }

  if (!dept || error) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#050f1e', color: 'white' }}>
      <div className="text-center">
        <p className="text-gray-400 mb-4">Department not found.</p>
        <Link to="/departments" className="text-blue-400 hover:text-blue-300">← Back to Departments</Link>
      </div>
    </div>
  );

  const head = officers.find(o => o.level === 0) || { name: '-', position: 'Head' };
  const midAndMembers = officers.filter(o => o.level !== 0);

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
            <PhotoCard person={head} size="lg" />
          </div>
          <div className="px-10 sm:px-12">
            <MemberCarousel members={midAndMembers} />
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
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{dept.description}</p>
          <p className="text-gray-300 text-sm leading-relaxed">{dept.detail}</p>
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
            {programs.length === 0 && (
              <p className="text-gray-400 text-sm text-center">Belum ada program.</p>
            )}
            {programs.map((prog) => (
              <div
                key={prog.id}
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
                  <p className="text-xs text-gray-400 leading-relaxed">{prog.description}</p>
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
