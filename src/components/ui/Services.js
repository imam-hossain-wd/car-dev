/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Model from "../shared/Model";

const Services = () => {

  const [serviceData, setServiceData] = useState('')

const services = [
    {
      "name": "Car Battery Replacement & Repair Services",
      "description": "Our expert technicians provide comprehensive car battery services, including diagnosis, replacement, and repairs. Ensure your vehicle's reliable performance with a healthy battery.",
      "image_url": "https://i.ibb.co/3M1rWfR/car-bettery-repair-replace.png"
    },
    {
      "name": "Car Brake Pad",
      "description": "Trust us for top-notch car brake pad replacements and maintenance. Safeguard your vehicle and ensure responsive braking for your safety on the road.",
      "image_url": "https://i.ibb.co/ZG4zrfm/car-break-pad-repair.png"
    },
    {
      "name": "Engine Oil Change",
      "description": "Maintain your engine's longevity and performance with our engine oil change services. We use high-quality oils to keep your car's heart running smoothly.",
      "image_url": "https://i.ibb.co/LPyv1Vd/engine-oil-changing.png"
    },
    {
      "name": "Gear Oil Change",
      "description": "Optimize your transmission's efficiency with gear oil change services. Our skilled technicians ensure proper lubrication and gear performance for your vehicle.",
      "image_url": "https://i.ibb.co/b1mFRVk/car-gear-oil-change.png"
    },
    {
      "name": "Car Wash",
      "description": "Give your car a fresh and sparkling look with our professional car wash services. We clean both the exterior and interior, leaving your vehicle spotless and inviting.",
      "image_url": "https://i.ibb.co/CMhgcxS/car-washing.png"
    },
    {
      "name": "Car Engine Diagnostic",
      "description": "Diagnose and address engine issues with our advanced car engine diagnostic services. We use cutting-edge technology to pinpoint problems and provide effective solutions for your vehicle's engine.",
      "image_url": "https://i.ibb.co/FD4k02g/car-engine-diagnostic.png"
    }
  ]
  

    return (
        <div  id="service" className='mt-10'>
            <h1 className="text-center text-xl">Our Services</h1>
            <p className='w-[50%] text-2xl font-bold text-center mx-auto'>WE PROVIDE PROFESSIONAL SERVICES</p>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 container ml-16 mx-auto'>
                {services && services.map((service, index) => (
                    <div key={index} style={{backgroundColor:"#F8F8F8"}} className='flex rounded drop-shadow-2xl flex-col items-center w-[350px] p-5 border-2'>
                        <div className="">
                            <img className='w-96 h-52  rounded' src={service.image_url} alt={service.name} />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold m-2">{service.name}</h1>
                            <p>{service.description.slice(0,80)} <span className="text-red-400">Read more...</span></p>
                        </div>
                                        
                        <button onClick={() => { setServiceData(service); document.getElementById('my_modal_1').showModal(); }} className="text-white p-2 px-5 mt-2 bg-orange-500  hover:bg-neavyBlueHover rounded hover:transition">Get Service</button>                    
                    </div>
                ))}
            </div>
            <Model serviceData={serviceData}/>
        </div>
    );
};

export default Services;