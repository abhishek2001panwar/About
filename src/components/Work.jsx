import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    { index: '01', heading: 'Connectify', image: 'https://media.istockphoto.com/id/2157719357/photo/man-woman-and-vr-in-office-with-holographic-overlay-lines-or-teamwork-for-futuristic-iot-in.jpg?s=612x612&w=0&k=20&c=z_R1WHY4db6YXFamQecMqB-4qsJC6AqRbhjCAxpIrCE=' },
    { index: '02', heading: 'Quick Buy', image: 'https://media.istockphoto.com/id/1702795313/photo/page-not-found-error-404-concept-on-black-background.jpg?s=612x612&w=0&k=20&c=tkRrowC_o5bMcCRQ4caHwur2LlceYADNcgtvvxEH24o=' },
    { index: '03', heading: 'Learnify', image: 'https://media.istockphoto.com/id/1478299081/photo/3d-media-concept-stock-illustration.jpg?s=612x612&w=0&k=20&c=slletp0sWXHO52VDmLHilnUmjY8Yy_K9R0NagkrOzQQ=' },
    { index: '04', heading: 'Vistar.tech', image: 'https://media.istockphoto.com/id/1805749263/photo/web-3-0-technology-chip-concepts.jpg?s=612x612&w=0&k=20&c=nNpfqgtVKK_r218V6_xkZqN85uh6Zl_k23SciuXafJ0=' },
  ];

  return (
    <>
      <div style={{ fontFamily: "Retail Variable48" }} className="w-full p-20">
        <div className="headingdiv flex flex-col justify-center items-center">
          <h1 className="font-medium text-6xl">Selected Work</h1>
          <div className="subheadings flex gap-8 mt-4">
            <h1 className="font-light text-zinc-600 text-2xl gap-2 flex justify-center items-center text-center">
              All Work{" "}
              <span className="text-sm border-r-[2px] border-black">
                <FaArrowRight />
              </span>
            </h1>
            <h1 className="h-10 bg-black w-[.8px]"></h1>
            <h1 className="font-light border-black text-zinc-600 gap-2 flex items-center text-center justify-center text-2xl">
              Selected Work <span className="text-sm">
                <FaArrowRight />
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div style={{ fontFamily: "Retail Variable48" }} className="flex flex-col gap-4 max-w-screen-2xl mx-auto px-10">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="w-full h-[10rem] flex items-center justify-between border-b-[1px] border-black bg-white relative" // Added relative for positioning
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ cursor: 'pointer' }}
            initial={{ scale: 1 }}
            animate={{ scale: hoveredIndex === idx ? 1.05 : 1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <div className="flex items-center overflow-hidden  gap-7 z-99">
              <span className="text-4xl font-bold text-gray-500">{item.index}</span>
              <h2 className="text-3xl font-light">{item.heading}</h2>
              {hoveredIndex === idx && ( // Only show image on hover
                <img
                  src={item.image}
                  alt={item.heading}
                 
                  className="w-[40vw] h-70  rounded-xl object-cover transition-opacity duration-1000" // Adjust size as needed
                /> 
              )}
            </div>
            <span className="text-6xl font-light text-gray-500">&rarr;</span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Work;
