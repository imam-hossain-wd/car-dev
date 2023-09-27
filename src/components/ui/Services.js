
import { useState } from "react";
import Model from "../shared/Model";
import Link from "next/link";
import Image from "next/image";

const Services = ({services}) => {

  const [serviceData, setServiceData] = useState('')



    return (
        <div  id="service" className='mt-10'>
          <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-xl font-bold p-1 px-5 mb-10 bg-gray-300 ">Quality Car Care Solutions</h1>
          </div>

            <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[85%] mx-auto'>
                {services && services.map((service, index) => (
                    <div key={index} style={{backgroundColor:"#F8F8F8"}} className='flex rounded drop-shadow-2xl flex-col items-center w-[330px] mx-auto lg:w-[350px] p-5 border-2'>
                        <div className="">
                           <Image className='w-96 h-52  rounded' src={service.image_url} width={500} height={500} alt={service.name}/>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold m-2">{service.name}</h1>
                            <h2 className="text-md font-semibold text-black mb-2">{service.service_time}</h2>
                            <p className="font-sm">{service.description.slice(0,80)} <span className="text-red-500"><Link href={`/services/${service._id}`}>Read more...</Link></span></p>
                        </div>
                                        
                        <button onClick={() => { setServiceData(service); document.getElementById('my_modal_1').showModal(); }} className="text-white p-2 px-5 mt-2 bg-orange-500 duration-500  hover:bg-neavyBlueHover rounded hover:transition">Get Service</button>                    
                    </div>
                ))}
            </div>
            </div>
            <Model serviceData={serviceData}/>

            <div className='flex justify-center items-center'>
              <Link href="/services" className='bg-neavyBlue text-white px-5 py-2 font-semibold hover:bg-neavyBlueHover duration-500 m-5 rounded'>Show All Services</Link>
            </div>
        </div>
    );
};

export default Services;


