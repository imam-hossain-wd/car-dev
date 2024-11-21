import { useState } from "react";
import Model from "../shared/Model";
import Link from "next/link";
import Image from "next/image";

const Services = ({ services }) => {
  const [serviceData, setServiceData] = useState("");

  return (
    <div id="service" className="mt-10">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center text-xl font-bold p-1 px-5 mb-10 bg-gray-300 ">
          Quality Car Care Solutions
        </h3>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[85%] mx-auto">
          {services &&
            services.map((service, index) => (
              <div
                key={index}
                style={{ backgroundColor: "#F8F8F8" }}
                className="flex rounded drop-shadow-2xl flex-col items-center w-[330px] mx-auto lg:w-[350px] p-5 border-2"
              >
                <div className="">
                  <Image
                    className="w-96 h-52  rounded"
                    src={service.image_url}
                    width={500}
                    height={500}
                    alt={service.name}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold m-2">{service.name}</h2>
                  <h3 className="text-[15px] bg-gray-200 p-1 font-semibold text-black mb-2">
                    {service.service_time}
                  </h3>

                  <li className=" capitalize text-[16px]">{service?.list1}</li>
                  <li className=" capitalize  text-[16px]">{service?.list2}</li>
                  <li className=" capitalize  text-[16px]">{service?.list3}</li>
                  <li className=" capitalize text-[16px]">{service?.list4}</li>
                </div>

               <div className="w-full flex justify-around items-center">

               <button
                  className="text-white py-[7px] w-32 mt-2 bg-[#2c2c2d] duration-500  hover:bg-neavyBlueHover rounded hover:transition"
                >
                  <Link href={`/services/${service?.title}`}>Details</Link>
                 
                </button>
               <button
                  onClick={() => {
                    setServiceData(service);
                    document.getElementById("my_modal_1").showModal();
                  }}
                  className="text-white py-[7px] w-32  mt-2 bg-[#2c2c2d]   duration-500  hover:bg-neavyBlueHover rounded hover:transition"
                >
                  Get Service
                </button>

               </div>
              </div>
            ))}
        </div>
      </div>
      <Model serviceData={serviceData} />

      <div className="flex justify-center items-center">
        <Link
          href="/services"
          className="bg-neavyBlue text-white px-5 py-2 font-semibold hover:bg-neavyBlueHover duration-500 m-5 rounded"
        >
          Show All Services
        </Link>
      </div>
    </div>
  );
};

export default Services;
