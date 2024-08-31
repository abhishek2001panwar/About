import React from "react";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-32">
        {/* Left side: Image */}
        <div className="flex-shrink-0 overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=612x612&w=0&k=20&c=dJPY0jBIe4JGgzN9ijZMrBRnvpx02_YZfc3T7hB-K9Q="
            alt="About Me"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Right side: Name, Description, and Button */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">John Doe</h2>
          <p className="text-gray-600 mb-6">
            I am a passionate web developer with over 5 years of experience in
            creating dynamic and user-friendly websites. I specialize in the
            MERN stack and enjoy building projects that challenge me to learn
            and grow.
          </p>
          <button className=" text-black px-6 py-2 rounded-full font-light border-[1px]   transition-colors">
            Start About Me
          </button>
        </div>
      </div>

      <div className="mt-52 flex justify-center items-center " >
        <h1 className="text-7xl">lets create Something <br /> together  <button className=" text-sm ml-52 px-6 py-1 bg-black text-white  rounded-full">Connect</button> </h1>
      </div>
    </div>
  );
};

export default About;
