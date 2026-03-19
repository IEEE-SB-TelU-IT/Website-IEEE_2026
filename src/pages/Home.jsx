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
    // Parent utama tetap gelap sesuai desain hero Anda
    <div className="w-full min-h-screen bg-[#001220] text-white overflow-x-hidden font-sans relative">

      {/* Background radial gradient tetap ada */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-[700px] bg-gradient-radial from-ocean-800/20 via-ocean-900/5 to-transparent pointer-events-none"></div>

      {/* HAPUS div max-w-7xl yang membungkus main.
         Kita akan memindahkan max-width ke dalam masing-masing komponen yang membutuhkannya.
      */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Navbar />
        </div>

        <main>
          {/* Komponen yang butuh lebar terbatas (seperti Hero) dibungkus di dalam komponennya sendiri */}
          <Hero />
          <News />
          <Departments />
          <StudentBranch />
          <Grow />

          {/* Komponen Community sekarang bisa full white karena tidak terkurung max-w-7xl */}
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
