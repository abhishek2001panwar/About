import React from "react";
import image from "../assets/images.jpg";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-80 md:mt-20 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
        {/* Left side: Image */}
        <div className="flex-shrink-0 overflow-hidden">
          <img
            src={image}
            alt="About Me"
            className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Right side: Name, Description, and Button */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Abhishek 👨‍💻</h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            I am a passionate web developer specializing in the MERN stack 🖥️, with over 5 years of experience in creating dynamic and user-friendly websites. I enjoy building projects that challenge me to learn and grow 🌱.
          </p>
          <button className="text-black px-4 py-2 rounded-full font-light border-[1px] transition-colors">
            Learn More About Me
          </button>
        </div>
      </div>

      <div className="mt-32 md:mt-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-center">
          Let's create something <br /> together 🤝
        </h1>
        <button className="text-sm mt-5 md:mt-10 px-6 py-1 bg-black text-white rounded-full">
          Connect
        </button>
      </div>
    </div>
  );
};

export default About;
