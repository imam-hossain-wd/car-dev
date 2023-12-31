import RootLayout from '@/components/Layout/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services = ({serviceDatas}) => {
    return (
        <div className='mt-24 mb-10'>
            <h1 className='text-2xl font-bold text-center my-10'> Your Car Our Priority</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[85%] mx-auto'>
                {serviceDatas && serviceDatas.map((service, index) => (
                    <div key={index} style={{backgroundColor:"#F8F8F8"}} className='flex rounded drop-shadow-2xl flex-col items-center w-[330px] mx-auto lg:w-[350px] p-5 border-2'>
                        <div className="">                    
                            <Image className='w-[300px] h-[200px] rounded' src={service.image_url} width={400} height={300} alt={service.name} />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold m-2">{service.name}</h1>
                            <h2 className="text-md font-semibold text-black mb-2">{service.service_time}</h2>
                            <p className="font-sm">{service.description.slice(0,80)} <span className="text-red-500"><Link href={`/services/${service._id}`}>Read more...</Link></span></p>
                        </div>       
                        <button onClick={() => { setServiceData(service); document.getElementById('my_modal_1').showModal(); }} className="text-white p-2 px-5 mt-2 bg-orange-500  hover:bg-neavyBlueHover rounded hover:transition">Get Service</button>                
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;

Services.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export async function getStaticProps() {
    const serviceRes = await fetch(`${process.env.URL}/services`);
    const serviceDatas = await serviceRes.json();
    return {
        props: {
         serviceDatas
        },
    };
}