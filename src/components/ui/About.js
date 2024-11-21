/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-[90%] mx-auto my-10">
      <div className="flex justify-center">
        <h3 className="text-center w-60 p-1 bg-gray-200 font-bold text-xl mb-5">
          About us
        </h3>
      </div>
      <div className="flex justify-center mt-2">
      <h2 className="text-3xl font-bold mb-3">Best Car Service And Car Repair In Dubai</h2>
      </div>
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div className="relative text-white bg-white p-2 rounded z-9 w-full lg:w-[60%]">
          <h2 className="absolute font-bold top-0 right-3">
            <span className="text-6xl">10</span>{" "}
            <span className="text-3xl">
              Years <br /> Experience
            </span>{" "}
          </h2>
          <Image
            className="h-[400px] w-full"
            src="https://i.ibb.co/LPyv1Vd/engine-oil-changing.png"
            width={600}
            height={700}
            alt="car repair and servicing"
          />
        </div>
        <div className="mt-10 lg:mt-0 ml-10 w-full lg:w-[40%]">
         
          <h2 className="text-xl font-bold mb-2 mt-2">
            <span className="text-red-700 ">CarDev</span> Is The Best Place For
            Your Auto Car
          </h2>
          <p className="">
          Experience <Link className="text-red-400 underline" href="https://en.wikipedia.org/wiki/Automotive_industry">automotive</Link>  excellence at CarDev, your dedicated partner for comprehensive car care. Our skilled technicians are passionate about craftsmanship, ensuring your vehicle's peak performance and safety. From maintenance to repairs, we use cutting-edge technology and genuine parts, all at competitive prices. At CarDev, we don't just service; we revitalize your driving experience
          </p>

          <div className="flex items-center  mt-5 ">
            <div className="bg-gray-200 w-12 h-12 flex justify-center items-center mr-4">
              <p className="font-bold text-lg">01</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Professional & Expert</h3>
              <p>Diam dolor diam ipsum sit amet diam et eos</p>
            </div>
          </div>
          <div className="flex items-center  mt-5">
            <div className="bg-gray-200 w-12 h-12 flex justify-center items-center mr-4">
              <p className="font-bold text-lg">02</p>
            </div>
            <div>
              <h3 className="font-bold text-lg ">Quality Servicing Center</h3>
              <p>Diam dolor diam ipsum sit amet diam et eos</p>
            </div>
          </div>
          <div className="flex items-center  mt-5">
            <div className="bg-gray-200 w-12 h-12 flex justify-center items-center mr-4">
              <p className="font-bold text-lg">03</p>
            </div>
            <div>
              <h3 className="font-bold text-lg ">Awards Winning Workers</h3>
              <p>Diam dolor diam ipsum sit amet diam et eos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
