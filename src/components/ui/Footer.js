import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#1E1E1E" }}
      className="contaier  text-white"
    >
      <footer className="p-10">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16  justify-around ">
          <div>
            <div className="">
              <div className="flex items-center">
                <Image
                  className="w-14 h-14 rounded-full"
                  src="https://i.ibb.co/863c3CY/car-service-logo.jpg"
                  width={500}
                  height={500}
                  alt="car service logo"
                />
                <h3 className="text-xl hover:text-red-500 ml-2 font-semibold ">
                  Car <span className="text-red-400 ">Workshop</span>
                </h3>
              </div>
              <div className="flex my-4">
                <span className="text-2xl border-2 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white text-black duration-300 p-1  ml-2">
                  <FaFacebook />
                </span>
                <span className="text-2xl border-2 rounded p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white text-black duration-300  ml-2">
                  <FaWhatsapp />
                </span>
                <span className="text-2xl border-2 rounded p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white text-black duration-300 ml-2">
                  <FaGoogle />
                </span>
              </div>
            </div>
            <p className="hover:text-red-500">Al Satwa, Dubai, UAE</p>
          </div>

          <div className="">
            <div>
              <h2 className="text-xl font-semibold mb-2 hover:text-red-500">
                Services
              </h2>
            </div>
            <div>
              <h4 className="hover:text-red-500">
                <Link href="/services/car-battery-replacement-dubai">
                  Bettery Repair & Replace
                </Link>
              </h4>
              <h4 className="hover:text-red-500">
                <Link href="/services/engine_gear_oil_change">
                  {" "}
                  Engine & Gear Oil Change
                </Link>
              </h4>
              <h4 className="hover:text-red-500">
                <Link href="/services/car_engine_diagnostic">
                  Car Engine Diagnostic
                </Link>
              </h4>
              <h4 className="hover:text-red-500">
                <Link
                  href="/services/ac_repair
"
                >
                  {" "}
                  Ac Repair
                </Link>
              </h4>
              <h4 className="hover:text-red-500">
                <Link href=" /services/radiator_repair_replacement">Radiator Repair and Replacement</Link>
                
              </h4>
            </div>
          </div>

          <div>
            <div className="ml-2 text-lg mb-2">
              <h2 className="text-xl font-semibold hover:text-red-500">
                Contact Us
              </h2>
            </div>
            <div>
              <div className="flex items-center mb-1 hover:text-red-500">
                <h4>
                  <FaPhoneAlt />{" "}
                </h4>
                <Link href="tel:971568703512" className="ml-2">
                  +971568703512
                </Link>
              </div>
              <div className="flex items-center hover:text-red-500">
                <h4>
                  <FaEnvelope />{" "}
                </h4>
                <p className="ml-2">carrepairsdubai@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-2 hover:text-red-500">
          Copyright © 2023 - All right reserved by Car Dev
        </p>
      </footer>
    </div>
  );
};

export default Footer;
