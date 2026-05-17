import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import News from '../components/News';
import DepartmentsSection from '../components/Departments'; // includes StudentBranch
import Grow from '../components/Grow';
import Community from '../components/Community';
import Shine from '../components/Shine';
import AchievementsComponent from '../components/Achievements';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#001220] text-white overflow-x-hidden font-sans relative">

      {/* Radial glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[700px] bg-gradient-radial from-ocean-800/20 via-ocean-900/5 to-transparent pointer-events-none" />

      <Navbar />

      <main className="relative z-10 w-full">

        {/* 1. Hero */}
        <Hero />

        {/* 2. News */}
        <News />

        {/* 3. Departments + Student Branch (same dark section) */}
        <DepartmentsSection />

        {/* 4. Your Place to Grow — white bg */}
        <Grow />

        {/* 5. Who We Are — white bg */}
        <Community />

        {/* 6. Shine — white bg */}
        <Shine />

        {/* 7. Achievements — back to dark */}
        <AchievementsComponent />

      </main>

      <Footer />
    </div>
  );
}

export default Home;
