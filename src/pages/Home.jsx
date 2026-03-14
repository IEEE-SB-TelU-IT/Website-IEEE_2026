import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import News from '../components/News';
import Departments from '../components/Departments';
import StudentBranch from '../components/StudentBranch';
import Grow from '../components/Grow';
import Community from '../components/Community';
import Shine from '../components/Shine';
import AchievementsComponent from '../components/Achievements';
import RecentActivities from '../components/RecentActivities';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#001220] text-white overflow-hidden font-sans relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-[700px] bg-gradient-radial from-ocean-800/20 via-ocean-900/5 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col pt-4">
        <Navbar />
        <main>
          <Hero />
          <News />
          <Departments />
          <StudentBranch />
          <Grow />
          <Community />
          <Shine />
          <AchievementsComponent />
          <RecentActivities />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
