import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full p-10 rounded-t-2xl pt-20 bg-black text-white py-10 mt-32">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
        {/* Left Section: Name */}
        <div className="w-full lg:w-1/2  mb-10 lg:mb-0">
          <h1 className="text-8xl font-bold">Abhishek <br /> Panwar</h1>
        </div>

        {/* Middle Section: Links */}
        <div className="w-full lg:w-1/4 mb-10 lg:mb-0">
          <ul className="space-y-4 text-xl">
            <li className="">Home</li>
            <li>Work</li>
            <li>Archive</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Case Studies</li>
          </ul>
        </div>

        {/* Right Section: More Links */}
        <div className="w-full lg:w-1/4">
          <ul className="space-y-4 text-xl">
            <li className="text-2xl">Other Projects</li>
            <li>Idol Roc</li>
            <li>Linea 7</li>
            <li>Idiom</li>
            <li>My Story</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Get in Touch & Social Media */}
      <div className="mt-10 flex flex-col lg:flex-row  items-center lg:items-start">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p>Contact us for more information.</p>
        </div>
        <div className="mt-8 lg:mt-0 flex space-x-6 text-3xl">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
