import React from 'react';

const Services = () => {
  const services = [
    { index: '01', heading: 'Service 1', description: 'This is the description for service 1.This is the description for service 1.This is the description for service 1.This is the description for service 1.This is the description for service 1.' },
    { index: '02', heading: 'Service 2', description: 'This is the description for service 1.This is the description for service 1.This is the description for service 1.This is the description for service 1.This is the description for service 1' },
    { index: '03', heading: 'Service 3', description: 'This is the description for service 1.This is the description for service 1.This is the description for service 1.This is the description for service 1.This is the description for service 1.' },
  ];

  return (
    <div
    style={{ fontFamily: "Retail Variable48" }}
    className="max-w-screen-xl h-screen mx-auto mt-32  px-4">
      <h1 className="text-5xl font-light text-center mb-10">Services</h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        {services.map((service, idx) => (
          <div  key={idx} className="bg-white p-8 w-full hover:border-t-2 hover:border-black  shadow-lg relative">
            <div className="absolute top-4 right-4 text-6xl  font-light text-gray-300">{service.index}</div>
            <h2 className="text-2xl font-semibold mb-2 mt-20">{service.heading}</h2>
            <hr className="w-12 border-gray-300 mb-4" />
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
