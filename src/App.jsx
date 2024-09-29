import React, { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Specialization from "./components/Specialization";
import LocomotiveScroll from 'locomotive-scroll';
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const [val, setval] = useState(false);

  const handleclick = () => {
    setval(!val);
  };
  return (
    <>
      <div
        style={{ fontFamily: "Retail Variable48" }}
        className="w-full h-screen "
      >
        <Navbar className="" handleclick={handleclick} setval={setval} />
        <Hero />
      </div>
      <Specialization />
      <Work />
      <Services />
      <About />
      <Footer />
      {/* <Interview/> */}
    </>
  );
};

export default App;
