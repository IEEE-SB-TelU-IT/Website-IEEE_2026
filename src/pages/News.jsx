import React, { useState } from 'react';
import PageNavbar from '../components/PageNavbar';
import PageFooter from '../components/PageFooter';
import { Calendar, Tag } from 'lucide-react';
import contoh1 from '../assets/image/contoh1.png';
import contoh2 from '../assets/image/contoh2.png';

const allNews = [
  { id: 1, type: 'TECHNOLOGY', title: 'Artificial Intelligence on Human Daily Life', desc: 'Explore how AI is fundamentally reshaping the way people live, work, and interact with the world around them in 2024.', date: 'Jan 10, 2024', img: contoh1 },
  { id: 2, type: 'EVENT', title: 'IoT Innovation Challenge Winners Announced', desc: 'Our team secured top positions at the National IoT Innovation Challenge held in Jakarta with an award-winning smart city solution.', date: 'Jan 25, 2024', img: contoh2 },
  { id: 3, type: 'AWARD', title: 'IEEE R10 Outstanding Student Branch Award', desc: 'IEEE SB Tel-U receives the prestigious Region 10 Outstanding Student Branch award for the second consecutive year.', date: 'Feb 05, 2024', img: contoh1 },
  { id: 4, type: 'WORKSHOP', title: 'Workshop on Embedded Systems & FPGA Design', desc: 'A deep-dive hardware programming workshop attended by over 120 students from three different faculties at Telkom University.', date: 'Feb 18, 2024', img: contoh2 },
  { id: 5, type: 'TECHNOLOGY', title: 'Machine Learning Study Group Kicks Off', desc: 'The newly formed ML Study Group begins its 12-week journey into deep learning, NLP, and computer vision applications.', date: 'Mar 01, 2024', img: contoh1 },
  { id: 6, type: 'EVENT', title: 'IEEE SB Tel-U Hosts Regional Symposium', desc: 'Over 300 students and professionals gathered for a two-day regional symposium on future trends in electrical and computer engineering.', date: 'Mar 20, 2024', img: contoh2 },
  { id: 7, type: 'AWARD', title: 'Best Paper Award at ICOIACT 2024', desc: 'Research on federated learning for privacy-preserving healthcare applications earns best paper recognition at an international conference.', date: 'Apr 08, 2024', img: contoh1 },
  { id: 8, type: 'WORKSHOP', title: 'Cybersecurity Bootcamp: From Zero to Hero', desc: 'A weekend bootcamp covering ethical hacking, network security fundamentals, and practical CTF challenges for beginners.', date: 'Apr 22, 2024', img: contoh2 },
];

const categories = ['All', 'TECHNOLOGY', 'EVENT', 'AWARD', 'WORKSHOP'];

const typeColor = {
  TECHNOLOGY: 'bg-blue-600',
  EVENT: 'bg-green-600',
  AWARD: 'bg-yellow-600',
  WORKSHOP: 'bg-purple-600',
};

const News = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? allNews : allNews.filter(n => n.type === active);

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white font-sans flex flex-col">
      <PageNavbar showSearch={true} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-ocean-500"></span>
            <span className="text-xs font-bold tracking-widest text-ocean-400 uppercase">Latest Updates</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            News & <span className="text-ocean-600">Updates</span>
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed text-sm md:text-base">
            Stay informed with the latest news, announcements, and updates from IEEE SB Telkom University and the broader IEEE community.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-ocean-700 text-white'
                  : 'bg-[#1e293b] text-gray-300 hover:bg-[#2a3a53]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {filtered.map((item) => (
            <div key={item.id} className="bg-[#1e293b]/60 rounded-2xl overflow-hidden border border-slate-700 hover:border-ocean-500/50 transition-all group flex flex-col cursor-pointer">
              <div className="relative h-44 bg-slate-800 overflow-hidden">
                <div className={`absolute top-3 left-3 z-10 ${typeColor[item.type] || 'bg-slate-700'} px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider text-white`}>
                  {item.type}
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-ocean-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed flex-1 line-clamp-3">
                  {item.desc}
                </p>
                <button className="mt-4 text-xs font-semibold text-ocean-400 hover:text-ocean-300 flex items-center gap-1 self-start">
                  Read More <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-slate-700/50 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-600/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="max-w-xl relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Never miss an update</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Subscribe to our newsletter and get the latest news delivered straight to your inbox.
            </p>
          </div>
          <button className="bg-ocean-700 hover:bg-ocean-600 px-8 py-3 rounded-full font-medium whitespace-nowrap transition-colors relative z-10 shadow-[0_0_20px_rgba(3,150,199,0.3)]">
            Subscribe Now
          </button>
        </div>
      </main>

      <PageFooter showLocation={false} />
    </div>
  );
};

export default News;
