import React from "react";
import world from "../assets/world.png";

const Hero: React.FC = () => {
  return (
    <div className="bg-[#F5F3EA] grid grid-cols-1 md:grid-cols-12">
      <div className="md:col-span-6">
        <div className="flex flex-col justify-between">
          <div className="clip-circle w-20 h-20 bg-teal-300 ml-80" />
          <h1 className="ml-20 text-xl font-light">
            BREAKING DOWN LANGUAGE BARRIERS <br /> FOR A CONNECTED WORLD
          </h1>
          <div className="clip-circle2 w-20 h-20 bg-sky-300 ml-10" />
        </div>
      </div>
      <div className="md:col-span-6">
        <div className="flex flex-row justify-between">
          <div className="clip-circle w-20 h-20 bg-sky-300 ml-10" />
          <img
            src={world}
            alt="World"
            className="h-[215px] w-[215px] mr-20 md:mr-30 xl:mr-40 2xl:mr-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
