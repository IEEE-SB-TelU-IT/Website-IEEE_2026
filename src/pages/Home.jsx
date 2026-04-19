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
    <div className="w-full min-h-screen bg-[#001220] text-white overflow-x-hidden font-sans relative">

      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-[700px] bg-gradient-radial from-ocean-800/20 via-ocean-900/5 to-transparent pointer-events-none" />

      {/* Navbar */}
      <Navbar />

      {/* Main content — each section manages its own container */}
      <main className="relative z-10 w-full">
        <Hero />

        {/* Dark-bg sections: wrapped in a common container reference */}
        <div className="w-full">
          <News />
          <StudentBranch />
          <Departments />
        </div>

        {/* White-bg sections */}
        <Grow />
        <Community />
        <Shine />

        {/* Back to dark */}
        <div className="w-full">
          <AchievementsComponent />
          <RecentActivities />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
