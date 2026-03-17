import React from 'react';
import fotobersama from '../assets/image/fotobersama.png';

const Community = () => {
  return (
    // Section ini akan benar-benar putih dari ujung kiri ke ujung kanan layar
    <section className="w-full bg-white py-16 flex justify-center">

      {/* Div inilah yang menjaga konten agar tidak melebar kebangetan (max-w-6xl) */}
      <div className="max-w-6xl w-full px-6 md:px-12 flex flex-col items-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-10 flex gap-3 text-center">
          <span className="text-[#6BA7C9]">Who</span>
          <span className="text-[#004B71]">We Are</span>
        </h2>

        <div className="relative w-full mb-12">
          <div className="absolute -inset-1 bg-blue-100 rounded-[2rem] blur-2xl opacity-40"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <img src={fotobersama} alt="Community" className="w-full h-auto" />
          </div>
        </div>

        <p className="text-xl md:text-2xl text-[#1a1a1a] font-medium leading-relaxed text-left w-full">
          From the condition of our organization which lacked human resources,
          we returned and started building a community that benefited society.
        </p>
      </div>
    </section>
  );
};

export default Community;