import React from "react";

const Services = () => {
  const services = [
    {
      index: "01",
      heading: "🌐 Website Development",
      description:
        "As a MERN developer, I specialize in building dynamic and responsive websites that provide a seamless user experience. I utilize the latest technologies to create web applications that are both functional and visually appealing.",
    },
    {
      index: "02",
      heading: "🛠️ Website Maintenance",
      description:
        "I offer ongoing maintenance services to ensure that your website remains up-to-date and performs optimally. This includes regular updates, security checks, and performance enhancements to keep your website running smoothly.",
    },
    {
      index: "03",
      heading: "✨ Custom Web Solutions",
      description:
        "I provide tailored web solutions to meet your specific business needs. Whether it's integrating APIs, developing unique features, or optimizing existing applications, I am committed to delivering high-quality results.",
    },
  ];

  return (
    <div
      style={{ fontFamily: "Retail Variable48" }}
      className="max-w-screen-xl h-screen mx-auto mt-32 px-4"
    >
      <h1 className="text-5xl font-light text-center mb-10">Services</h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-8 w-full hover:border-t-2 hover:border-black shadow-lg relative"
          >
            <div className="absolute top-4 right-4 text-6xl font-light text-gray-300">
              {service.index}
            </div>
            <h2 className="text-2xl font-semibold mb-2 mt-20">
              {service.heading}
            </h2>
            <hr className="w-12 border-gray-300 mb-4" />
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
