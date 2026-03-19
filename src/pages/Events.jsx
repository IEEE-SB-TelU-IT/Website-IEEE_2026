import React from 'react';
import PageNavbar from '../components/PageNavbar';
import PageFooter from '../components/PageFooter';
import { Calendar, MapPin } from 'lucide-react';

const Events = () => {
  const categories = ['All Events', 'Workshops', 'Seminars', 'Competitions'];

  const events = [
    { type: 'WORKSHOP', title: 'AI Workshop 2024', desc: 'Master the fundamentals of Neural Networks and Deep Learning through hands-on practice sessions.', date: 'Jan 20, 2024', loc: 'GKJ Hall', img: 'contoh1.png' },
    { type: 'COMPETITION', title: 'National Robot Battle', desc: 'The biggest robotics challenge at Telkom University. Bring your bots to the arena and win amazing prizes.', date: 'Feb 05, 2024', loc: 'Sport Center', img: 'contoh2.png' },
    { type: 'SEMINAR', title: 'Cybersecurity Insider', desc: 'Learn from industry experts about the latest trends in network security and ethical hacking.', date: 'Feb 12, 2024', loc: 'Online (Zoom)', img: 'contoh1.png' },
    { type: 'WORKSHOP', title: 'Web Dev Bootcamp', desc: 'A 3-day intensive bootcamp to learn modern full-stack development using React and Node.js.', date: 'Mar 01, 2024', loc: 'Informatics Lab', img: 'contoh2.png' },
    { type: 'COMPETITION', title: 'IoT Innovation Hack', desc: 'Solve real-world problems using Internet of Things. 24 hours to build, 5 minutes to pitch.', date: 'Mar 15, 2024', loc: 'Creative Center', img: 'contoh1.png' },
    { type: 'SEMINAR', title: 'Data Science Career', desc: 'Discover the career paths available in data science and how to build a killer portfolio.', date: 'Apr 02, 2024', loc: 'Multimedia Room', img: 'contoh2.png' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white font-sans relative flex flex-col">
      <PageNavbar showSearch={true} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-ocean-500"></span>
            <span className="text-xs font-bold tracking-widest text-ocean-400 uppercase">Happening Now</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            Events & <span className="text-ocean-600">Workshops</span>
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed text-sm md:text-base">
            Empowering students through technical excellence. Join our upcoming sessions to enhance your skills and network with industry leaders at Telkom University.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={`py-2 px-6 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${idx === 0
                  ? 'bg-ocean-700 text-white'
                  : 'bg-[#1e293b] text-gray-300 hover:bg-[#2a3a53]'
                }`}
            >
              {idx === 1 && <span className="text-xl">📺</span>}
              {idx === 2 && <span className="text-xl">👥</span>}
              {idx === 3 && <span className="text-xl">🏆</span>}
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {events.map((ev, i) => (
            <div key={i} className="bg-[#1e293b]/60 rounded-2xl overflow-hidden border border-slate-700 hover:border-ocean-500/50 transition-all group flex flex-col">
              <div className="relative h-48 bg-slate-800 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-white/10">
                  {ev.type}
                </div>
                <img
                  src={`/src/assets/image/${ev.img}`}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 mix-blend-luminosity hover:mix-blend-normal"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{ev.title}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-1 leading-relaxed line-clamp-3">
                  {ev.desc}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    {ev.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    {ev.loc}
                  </div>
                </div>

                <button className="w-full py-2.5 rounded-full bg-ocean-800 hover:bg-ocean-700 text-white font-medium transition-colors text-sm flex items-center justify-center gap-2">
                  {ev.type === 'COMPETITION' ? 'Register Team' : (ev.type === 'SEMINAR' ? 'Secure Spot' : 'Join Now')}
                  <span className="text-lg leading-none">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-slate-700/50 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-600/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="max-w-xl relative z-10">
            <h2 className="text-3xl font-bold mb-4">Become part of the global technical community</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Stay updated with the latest technological trends, access exclusive resources, and join a network of passionate engineers.
            </p>
          </div>

          <button className="bg-ocean-700 hover:bg-ocean-600 px-8 py-3 rounded-full font-medium whitespace-nowrap transition-colors relative z-10 shadow-[0_0_20px_rgba(3,150,199,0.3)]">
            Join Our Branch
          </button>
        </div>

      </main>

      <PageFooter showLocation={false} />
    </div>
  );
};

export default Events;
