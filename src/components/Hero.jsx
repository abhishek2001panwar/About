import React, { useState } from "react";

const Hero = () => {

  const [val, setVal] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mt-16 md:mt-32 px-4">
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-tight md:leading-none tracking-wide">
          Abhishek{" "}
          <span className="block md:inline font-thin italic">is a</span> <br />{" "}
          <br className="md:hidden" />
          <span className="font-light pt-2">
            freelance <span className="font-normal">designer</span>{" "}
          </span>{" "}
          & <br /> <br className="md:hidden" />
          <span className="font-normal pt-4">webflow developer</span>
        </h1>
        <div className="mt-10 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5">
          <button className="px-6 py-2 text-sm bg-black text-white rounded-full w-full sm:w-auto">
            See My Work
          </button>

          <div className="h-0.5 bg-black w-32 hidden sm:block"></div>

          <button className="px-6 py-2 border border-black rounded-full w-full sm:w-auto">
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
