/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Model from "../shared/Model";

const Services = ({services}) => {

  const [serviceData, setServiceData] = useState('')



    return (
        <div  id="service" className='mt-10'>
            <h1 className="text-center text-xl">Our Services</h1>
            <p className=' text-2xl font-bold text-center mb-10'>WE PROVIDE PROFESSIONAL SERVICES</p>

            <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[85%] mx-auto'>
                {services && services.map((service, index) => (
                    <div key={index} style={{backgroundColor:"#F8F8F8"}} className='flex rounded drop-shadow-2xl flex-col items-center w-[330px] mx-auto lg:w-[350px] p-5 border-2'>
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
            </div>
            <Model serviceData={serviceData}/>
        </div>
    );
};

export default Services;


