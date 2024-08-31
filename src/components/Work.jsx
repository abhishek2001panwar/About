import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Work = () => {
    const items = [
        { index: '01', heading: 'Heading 1' },
        { index: '02', heading: 'Heading 2' },
        { index: '03', heading: 'Heading 3' },
        { index: '04', heading: 'Heading 4' },
      ];
  return (
    <>
    <div
      style={{ fontFamily: "Retail Variable48" }}
      className="w-full p-20 "
    >
      <div className="headingdiv flex flex-col  justify-center items-center ">
        <h1 className="font-medium  text-6xl ">Selected Work</h1>
        <div className="subheadings flex gap-8 mt-4 ">
          <h1 className="font-light text-zinc-600   text-2xl gap-2 flex justify-center items-center text-center ">
            All Work{" "}
            <span className="text-sm border-r-[2px] border-black">
              <FaArrowRight />
            </span>
          </h1>
          <h1 className="h-10 bg-black w-[.8px] ">
           
          </h1>
          <h1 className="font-light  border-black text-zinc-600 gap-2 flex items-center text-center justify-center  text-2xl ">Selected Work <span className="text-sm">
              <FaArrowRight />
            </span></h1>
        </div>
      </div>
    </div>
    <div
     style={{ fontFamily: "Retail Variable48" }}
    className="flex flex-col gap-4 max-w-screen-2xl mx-auto  px-10">
      {items.map((item, idx) => (
        <div key={idx} className="w-full h-[10rem] flex items-center justify-between border-b-[1px] border-black">
          <div className="flex items-center gap-7">
            <span className="text-4xl font-bold text-gray-500">{item.index}</span>
            <h2 className="text-3xl font-light">{item.heading}</h2>
          </div>
          <span className="text-6xl font-light text-gray-500">&rarr;</span>
        </div>

       
      ))}
    </div>
    </>
  );
};

export default Work;
