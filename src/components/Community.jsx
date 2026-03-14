import React from 'react';
import fotobersama from '../assets/image/fotobersama.png';

const Community = () => {
  return (
    <section className="py-10 bg-white -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-12">
          <img
            src={fotobersama}
            alt="IEEE Student Branch Community"
            className="w-full h-auto object-cover max-h-[600px]"
          />
        </div>

        <p className="text-xl md:text-2xl font-semibold text-black max-w-4xl mx-auto leading-normal py-10">
          From the condition of our organization which lacked human resources, we returned and started building a community that benefited society.
        </p>
      </div>
    </section>
  );
};

export default Community;
