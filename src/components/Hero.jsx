import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";

const Hero = () => {
  const [val, setVal] = useState(false);
  const [images, setImages] = useState([
    {
      url:"https://media.istockphoto.com/id/1427923997/photo/user-with-gear-sign-on-dark-background-3d-render-concept-for-project.jpg?s=612x612&w=0&k=20&c=hG2v9LmlFjJ-hChDDlt4eUd-IMshXI-A4KkryAh7_Eg=",
      top: "45%", // Adjusted for closer alignment
      left: "45%", // Closer to center
      isActive: false,
    },
    {
      url:"https://media.istockphoto.com/id/1219854221/photo/web-design-development-and-coding-concept.jpg?s=612x612&w=0&k=20&c=FqSjdRh6subL_UMSpuXxeRpvkt1krxUiyCQZ1ws7rOk=",
      top: "45%", 
      left: "55%", // Closer but slightly apart from the first image
      isActive: false,
    },
    {
url:"https://media.istockphoto.com/id/1186122160/photo/app-developer-and-smart-phone.jpg?s=612x612&w=0&k=20&c=DAAec5TUrCd7Wq7cAhVJxQEPfQbW-m1dfkL-9dq4u2g=",
      top: "55%", 
      left: "50%", // Centered between top-left and bottom
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1719937206168-f4c829152b91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
      top: "65%", // Slightly further down but still central
      left: "45%", 
      isActive: false,
    },
    {

url:"https://media.istockphoto.com/id/2157719357/photo/man-woman-and-vr-in-office-with-holographic-overlay-lines-or-teamwork-for-futuristic-iot-in.jpg?s=612x612&w=0&k=20&c=z_R1WHY4db6YXFamQecMqB-4qsJC6AqRbhjCAxpIrCE=",
      top: "65%", 
      left: "55%", 
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    switch (Math.floor(latest * 100)) {
      case 0:
        setImages(
          images.map((image, index) =>
            index === 0
              ? { ...image, isActive: true }
              : { ...image, isActive: false }
          )
        );
        break;
      case 1:
        setImages(
          images.map((image, index) =>
            index === 1
              ? { ...image, isActive: true }
              : { ...image, isActive: false }
          )
        );
        break;
      case 3:
        setImages(
          images.map((image, index) =>
            index === 2
              ? { ...image, isActive: true }
              : { ...image, isActive: false }
          )
        );
        break;
      case 4:
        setImages(
          images.map((image, index) =>
            index === 3
              ? { ...image, isActive: true }
              : { ...image, isActive: false }
          )
        );
        break;
        case 5:
        setImages(
          images.map((image, index) =>
            index === 4
              ? { ...image, isActive: true }
              : { ...image, isActive: false }
          )
        );
        break;
    }
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mt-16 md:mt-32 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-tight md:leading-none tracking-wide">
          Abhishek{" "}
          <span className="block md:inline font-thin italic">is a</span>
          <br className="hidden md:block" />
          <br className=" hidden md:hidden" />
          <span className="font-light pt-1   md:pt-2">
            freelance <span className="font-normal">designer</span>
          </span>{" "}
          & <br /> <br className=" hidden md:hidden" />
          <span className="font-normal pt-4">webflow developer</span>
        </h1>
        <div className="mt-10 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5">
          <button className="px-6 py-2 text-sm bg-black text-white rounded-full w-full sm:w-auto">
            See My Work
          </button>

          <div className="h-32 md:h-0.5 bg-black w-0.5 md:w-32 hidden sm:block"></div>

          <button className="px-6 py-2 border border-black rounded-full w-full sm:w-auto">
            Get in Touch
          </button>
        </div>
      </div>
      <div className="absolute inset-0">
        {images.map(
          (image, index) =>
            image.isActive && (
              <img
                key={index}
                src={image.url}
                alt=""
                style={{
                  top: image.top,
                  left: image.left,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md  w-[50px] h-[50px]  md:w-[250px] md:h-[250px]"
              />
            )
        )}
      </div>
    </>
  );
};

export default Hero;
