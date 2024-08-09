import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="relative h-screen flex items-center justify-center min-h-screen pt-10" id="home">
      <div className="bg-carousel"></div>
      <div className="bg-overlay"></div>
      <div className="z-10 flex flex-col items-center lg:items-center lg:text-left mb-10 lg:mb-0 lg:w-1/2">
        <h1 className="text-5xl font-bold text-white text-center lg:text-left">Welcome to DIMAN</h1>
        <p className="text-2xl text-[#FFFFFF] font-bold mt-4 text-center lg:text-left">Phamagro Company Ltd</p>
        <div className="flex">
          <button className="mt-6 px-6 py-3 mr-6 bg-[#000033] text-white rounded-full hover:bg-[#009900] hover:text-[#000033] transition duration-300">Our services</button>
          <button className="mt-6 px-6 py-3 bg-[#000033] text-white rounded-full hover:bg-[#009900] hover:text-[#000033] transition duration-300">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
