/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const ServiceDetails = ({data}) => {

  const phoneNumber = '+971568703512';
  
    return (
        <div className="bg-white mt-28 mb-10">
      <h1 className="text-center font-bold text-3xl mb-5">Welcome to Service Details Page </h1>
      <div className="flex flex-col items-center justify-center bg-white drop-shadow-2xl w-full lg:w-[600px] p-5 mx-auto">
        <div className="w-[60%] h-[300px]">
          <img src={data?.image_url} alt={data?.name}/>
        </div>
        <p className="text-2xl font-bold my-2">{data?.name}</p>
        <p>{data?.description}</p>

        <div className='flex flex-col lg:flex-row items-center justify-center mt-5 '>
          <Link href={`tel:${phoneNumber}`}>
            <button className="flex text-white items-center w-40 hover:bg-red-600  transition rounded duration-200 p-2 bg-red-500 font-bold ml-0 lg:mr-2">
              <span className='text-xl  mr-2 ml-4'> <FaPhone /></span> Call Now
            </button>
          </Link>

           <Link href={`https://wa.me/${phoneNumber}`}>
             <button className="flex mt-2 lg:mt-0 text-white items-center w-40 hover:bg-green-600 transition rounded duration-500 p-2 bg-green-500 font-bold ml-0 lg:ml-2">
               <span className='text-xl mr-2 ml-4'> <FaWhatsapp /></span> Whatsapp
             </button>
           </Link> 
        </div>
      </div>
    </div> 
    );
};

export default ServiceDetails;

export async function getServerSideProps({params}) {
  const {details} = params;
  const res = await fetch(`https://car-dev-backend.vercel.app/service/${details}`);
  const data = await res.json(); 
  console.log(data);
  return { props: { data } };
}

