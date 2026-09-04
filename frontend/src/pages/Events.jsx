import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, ChevronDown, SlidersHorizontal, Clock, Users } from 'lucide-react';
import logo from '../assets/image/logo.png';
import contoh1 from '../assets/image/contoh1.png';
import contoh2 from '../assets/image/contoh2.png';
import { eventsApi } from '../services/apiService';

// BE ngirim: { id, title, description, category, location, image_url }
function mapEventFromApi(item, idx) {
  return {
    id: item.id,
    status: 'OPEN', statusColor: '#22c55e',
    tags: item.category ? [item.category] : [],
    location: (item.location || 'TBA').toUpperCase(),
    title: item.title,
    desc: item.description,
    avatars: 3, extra: 0,
    action: 'Join Now', actionType: 'link',
    img: item.image_url || (idx % 2 === 0 ? contoh1 : contoh2),
    filter: item.category || 'All Events',
  };
}

/* ─────────────────────────────────────────────────────────
   NAVBAR — 3 links only: About Us | News | Achievements
   ───────────────────────────────────────────────────────── */
const EventNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className="w-full sticky top-0 z-50"
      style={{ background: '#0a1628', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="IEEE" className="h-7 object-contain" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link to="/#about"      className="text-gray-300 hover:text-white transition-colors">About Us</Link>
          <Link to="/news"        className="text-white font-semibold">News</Link>
          <Link to="/achievements" className="text-gray-300 hover:text-white transition-colors">Achievements</Link>
        </div>

        {/* Membership */}
        <div className="hidden md:flex">
          <button
            className="text-white text-sm font-semibold py-2 px-6 rounded-full transition-all duration-300 border border-white/10"
            style={{ background: '#00629B', boxShadow: '0 0 18px rgba(0,98,155,0.4)' }}
          >
            Membership
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 w-full bg-white rounded transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}/>
            <span className={`block h-0.5 w-full bg-white rounded transition-all ${mobileOpen ? 'opacity-0' : ''}`}/>
            <span className={`block h-0.5 w-full bg-white rounded transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}/>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2" style={{ background: '#0a1628' }}>
          <Link to="/#about"       onClick={() => setMobileOpen(false)} className="py-2.5 px-4 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5">About Us</Link>
          <Link to="/news"         onClick={() => setMobileOpen(false)} className="py-2.5 px-4 rounded-lg text-sm text-white font-semibold bg-white/5">News</Link>
          <Link to="/achievements" onClick={() => setMobileOpen(false)} className="py-2.5 px-4 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5">Achievements</Link>
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────── */
const FILTERS = ['All Events', 'Workshops', 'Seminars', 'Competitions', 'Hackathons'];

/* ─────────────────────────────────────────────────────────
   EVENT CARD
   ───────────────────────────────────────────────────────── */
const EventCard = ({ ev }) => (
  <div
    className="rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-0.5"
    style={{
      background: '#0d1e30',
      border: '1px solid #1a2d45',
    }}
  >
    {/* Image */}
    <div className="relative overflow-hidden" style={{ height: '180px' }}>
      <span
        className="absolute top-3 right-3 z-10 text-white text-[10px] font-bold px-2.5 py-1 rounded-full"
        style={{ background: ev.statusColor }}
      >
        {ev.status}
      </span>
      {ev.tags.length > 0 && (
        <div className="absolute bottom-3 left-3 z-10 flex gap-2">
          {ev.tags.map((t) => (
            <span
              key={t}
              className="text-white text-[10px] font-medium px-2 py-0.5 rounded"
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            >
              {t}
            </span>
          ))}
        </div>
      )}
      <img
        src={ev.img}
        alt={ev.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        style={{ filter: 'brightness(0.75) saturate(0.7)' }}
      />
    </div>

    {/* Body */}
    <div className="p-5 flex flex-col flex-1">
      {/* Location */}
      <div className="flex items-center gap-1.5 mb-2.5">
        <MapPin style={{ width: 11, height: 11, color: '#00B3DC' }} />
        <span
          className="font-bold tracking-widest uppercase"
          style={{ fontSize: 10, color: '#00B3DC' }}
        >
          {ev.location}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-[17px] font-bold text-white mb-2 leading-snug">
        {ev.title}
      </h3>

      {/* Desc */}
      <p className="text-xs text-gray-400 leading-relaxed flex-1 mb-4">
        {ev.desc}
      </p>

      {/* Footer row */}
      <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        {/* Left: avatars / registered / time */}
        <div className="flex items-center gap-1.5">
          {ev.timeLabel ? (
            <>
              <Clock style={{ width: 12, height: 12, color: '#6b7280' }} />
              <span className="text-xs text-gray-400">{ev.timeLabel}</span>
            </>
          ) : ev.registered ? (
            <>
              <Users style={{ width: 12, height: 12, color: '#6b7280' }} />
              <span className="text-xs text-gray-400">{ev.registered}</span>
            </>
          ) : (
            <div className="flex items-center gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2"
                  style={{
                    marginLeft: i > 0 ? '-7px' : 0,
                    background: `linear-gradient(135deg, #3b82f6, #1d4ed8)`,
                    borderColor: '#0d1e30',
                  }}
                />
              ))}
              <span className="text-xs text-gray-400 ml-1.5">+{ev.extra}</span>
            </div>
          )}
        </div>

        {/* Right: action */}
        {ev.actionType === 'button' ? (
          <button
            className="text-xs font-semibold px-4 py-2 rounded-lg transition-colors text-white hover:opacity-90"
            style={{ background: '#1e3a5f' }}
          >
            {ev.action}
          </button>
        ) : (
          <button
            className="text-xs font-semibold flex items-center gap-1 transition-colors"
            style={{ color: '#00B3DC' }}
          >
            {ev.action}
            <ArrowRight style={{ width: 12, height: 12 }} />
          </button>
        )}
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   MAIN PAGE
   ───────────────────────────────────────────────────────── */
const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All Events');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    eventsApi.getAll()
      .then((res) => {
        if (cancelled) return;
        const list = Array.isArray(res.data) ? res.data : [];
        setEvents(list.map(mapEventFromApi));
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message || 'Gagal ambil data event');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const filtered = activeFilter === 'All Events'
    ? events
    : events.filter((e) => e.filter === activeFilter);

  return (
    <div className="min-h-screen font-sans" style={{ background: '#080f1a', color: 'white' }}>

      <EventNavbar />

      {/* ── Hero / Featured Event ── */}
      <section
        className="relative mx-3 sm:mx-6 lg:mx-8 mt-5 mb-10 rounded-2xl overflow-hidden"
        style={{ minHeight: 340 }}
      >
        {/* BG image with gradient overlay */}
        <div className="absolute inset-0">
          <img
            src={contoh1}
            alt="Featured event"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.55) saturate(0.6)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(8,15,26,0.97) 0%, rgba(8,15,26,0.75) 50%, rgba(8,15,26,0.1) 100%)' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 sm:px-14 py-12 sm:py-16 flex flex-col justify-center" style={{ minHeight: 340 }}>
          <span
            className="inline-block mb-5 text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full w-fit"
            style={{
              color: '#00B3DC',
              border: '1px solid rgba(0,179,220,0.4)',
              background: 'rgba(0,179,220,0.1)',
            }}
          >
            FEATURED WORKSHOP
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            AI & Robotics:<br />
            <span style={{ color: '#00B3DC' }}>The Future is Here</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-lg mb-7 leading-relaxed">
            Join us for an intensive 2-day workshop on neural networks and autonomous robotic systems.
            Limited seats available for the 2024...
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <button
              className="flex items-center gap-2 font-bold text-sm px-7 py-3 rounded-full transition-all hover:opacity-90"
              style={{ background: '#1a5fa8', color: 'white', boxShadow: '0 0 20px rgba(0,98,155,0.5)' }}
            >
              Register Now <ArrowRight style={{ width: 16, height: 16 }} />
            </button>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Calendar style={{ width: 16, height: 16, color: '#00B3DC' }} />
              <span>Oct 24 - 25, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filters + Sort ── */}
      <div className="px-4 sm:px-6 lg:px-8 mb-8 flex flex-wrap items-center justify-between gap-4">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="text-sm font-medium px-5 py-2 rounded-full transition-all duration-200"
              style={
                activeFilter === f
                  ? { background: '#00629B', color: 'white', boxShadow: '0 0 16px rgba(0,98,155,0.5)' }
                  : { background: 'transparent', color: '#9ca3af', border: '1px solid #1e3a5f' }
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* Sort */}
        <button
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-full transition-colors"
          style={{ color: '#9ca3af', border: '1px solid #1e3a5f' }}
        >
          <SlidersHorizontal style={{ width: 14, height: 14 }} />
          Sort by: <span className="font-semibold text-white">Upcoming</span>
        </button>
      </div>

      {/* ── Event Cards Grid ── */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        {loading && <p className="text-gray-400 text-sm">Loading events...</p>}
        {!loading && error && <p className="text-red-400 text-sm">Gagal ambil data: {error}</p>}
        {!loading && !error && filtered.length === 0 && (
          <p className="text-gray-400 text-sm">Belum ada event.</p>
        )}
        {!loading && !error && filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((ev) => (
            <EventCard key={ev.id} ev={ev} />
          ))}
        </div>
        )}
      </div>

      {/* ── Load More ── */}
      <div className="flex justify-center mb-20">
        <button
          className="flex items-center gap-2 text-sm font-medium px-12 py-3 rounded-full transition-all"
          style={{
            background: 'transparent',
            color: '#d1d5db',
            border: '1px solid #1e3a5f',
          }}
        >
          Load More Events <ChevronDown style={{ width: 16, height: 16 }} />
        </button>
      </div>

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid #111e2e' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: '#00629B' }}
            >
              <img src={logo} alt="IEEE" className="w-5 h-5 object-contain" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">IEEE SB Telkom University</p>
              <p className="text-xs text-gray-400">Advancing Technology for Humanity</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <Link to="/"             className="hover:text-white transition-colors">Home</Link>
            <Link to="/#about"       className="hover:text-white transition-colors">About</Link>
            <a href="#"              className="hover:text-white transition-colors">Members</a>
            <a href="#"              className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social icons */}
          <div className="flex gap-2">
            {['↗', '✉'].map((icon, i) => (
              <button
                key={i}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors text-sm"
                style={{ border: '1px solid #1e3a5f' }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        <div
          className="text-center py-4 tracking-widest uppercase"
          style={{ fontSize: 10, color: '#374151', borderTop: '1px solid #0d1e2e' }}
        >
          © 2024 IEEE Student Branch Telkom University. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default EventsPage;
