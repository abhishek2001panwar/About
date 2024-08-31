import React from "react";

const Specialization = () => {
  return (
    <div
    data-scroll
    data-scroll-speed="5"


      style={{ fontFamily: "Retail Variable48" }}
      className="w-full h-[100vw] rounded-t-[50px] bg-black"
    >
      <div className="text-white  p-20 text-center">
        <h1 className="text-[10vw]">Specialization</h1>
        <h1 className="text-center text-[5vw]">In - Creating</h1>

        <marquee
          className="text-[10vw] text-[12] mt-10"
          behavior="scroll"
          direction="left"
        >
          {" "}
          Unexpected ethical Growing Bold Unique
        </marquee>

        <h3 className="text-[10vw] text-[12] mt-10">Brand identities</h3>
        <h1 className="text-center text-[4vw]">&</h1>
        <h1 className="text-[10vw]">Websites</h1>
      </div>
    </div>
  );
};

export default Specialization;
