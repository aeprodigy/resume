import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-black">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-gray-300 text-3xl">Hey, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#cccdf6]">
          Mike Mambwe
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Software Developer.
        </h2>
        <p className="text-[#b7bdd1] text-2xl py-4 max-w-[700px]">
          I'm a Software developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I am focused on
          building responsive full-stack web applications and Mobile
          Applications
        </p>
        <div>
          <button className="text-white text-2xl group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8892b0] hover:border-[#8892b0]">
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home