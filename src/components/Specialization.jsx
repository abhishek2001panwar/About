import React from "react";

const Specialization = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="1"
      style={{ fontFamily: "Retail Variable48" }}
      className="w-full h-[130vw] md:h-[100vw] rounded-t-[50px] bg-black"
    >
      <div className="text-white p-10 md:p-20 text-center">
        <h1 className="text-[14vw] md:text-[8vw]">Specialization</h1>
        <h1 className="text-center text-[7vw] md:text-[4vw]">In - Creating</h1>

        {/* <div
          className="text-[10vw] md:text-[8vw] text-[12] mt-10 whitespace-nowrap"
          behavior="scroll"
          direction="left"
        >
          Unexpected ethical Growing Bold Unique
        </div> */}

        <h3 className="text-[16vw] md:text-[8vw] text-[12] mt-10">Brand identities</h3>
        <h1 className="text-center text-[4vw] md:text-[3vw]">&</h1>
        <h1 className="text-[10vw] md:text-[8vw]">Websites</h1>
      </div>
    </div>
  );
};

export default Specialization;
