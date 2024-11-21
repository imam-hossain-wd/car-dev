import RootLayout from "@/components/Layout/RootLayout";
import Model from "@/components/shared/Model";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Services = ({ serviceDatas }) => {

  const [serviceData, setServiceData] = useState("");
  return (
    <div className="mt-24 mb-10">
      <Head>
        <title>Best Car Services In Dubai</title>
        <link rel="canonical" href="https://24carservicedubai.com/services" />
        <meta
          name="description"
          content="Premier car service and repair in Dubai. Your trusted destination for expert automotive care. Visit our service page for excellence in maintenance and repairs."
          key="desc"
        />
        <meta name="keywords" content="best car repair and service in dubai" />
      </Head>
      <h4 className="text-2xl font-bold text-center my-10">
        Your Car Our Priority{" "}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[85%] mx-auto">
        {serviceDatas &&
          serviceDatas.map((service, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#F8F8F8" }}
              className="flex rounded drop-shadow-2xl flex-col items-center w-[330px] mx-auto lg:w-[350px] p-5 border-2 h-[510px]"
            >
              <div className="">
                <Image
                  className="w-[300px] h-[200px] rounded"
                  src={service.image_url}
                  width={400}
                  height={300}
                  alt={service.name}
                />
              </div>
              <div>
                <h1 className="text-[18px] font-bold mt-2 mb-1">
                  {service.name}
                </h1>
                <h2 className="text-[15px] bg-gray-200 p-1 font-semibold text-black mb-2">
                  {service.service_time}
                </h2>

                <li className=" capitalize text-[16px]">{service?.list1}</li>
                <li className=" capitalize  text-[16px]">{service?.list2}</li>
                <li className=" capitalize  text-[16px]">{service?.list3}</li>
                <li className=" capitalize text-[16px]">{service?.list4}</li>
              </div>
              <div className="w-full flex justify-around items-center">
                <button className="text-white py-[7px] w-32 mt-2 bg-[#2c2c2d] duration-500  hover:bg-neavyBlueHover rounded hover:transition">
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
      <Model serviceData={serviceData} />
    </div>
  );
};

export default Services;

Services.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const serviceRes = await fetch(`${process.env.URL}/services`);
  const serviceDatas = await serviceRes.json();
  return {
    props: {
      serviceDatas,
    },
    revalidate: 10,
  };
}
