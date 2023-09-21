/* eslint-disable @next/next/no-img-element */
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link'
const HomeBanner = () => {

    const phoneNumber = '+1234567890';
    return (

        <div id="home" className='flex flex-col-reverse lg:flex-row justify-around items-center mt-10'>
            <div className=''>
                <h1 className='text-4xl font-bold'>Welcome to Car Service</h1>
                <p className='text-lg mt-2 ml-7 font-semi-bold font-semibold'>Quality car maintenance and repairs</p>

                <div className='flex justify-around mt-5 '>
                    <Link href={`tel:${phoneNumber}`}>
                        <button className="flex text-white items-center w-40 hover:bg-red-600  transition rounded duration-200 p-2 bg-red-500 font-bold ">
                            <span className='text-xl mr-2 ml-4'> <FaPhone /></span> Call Now
                        </button>
                    </Link>

                    <Link href={`https://wa.me/${phoneNumber}`}>
                        <button className="flex text-white items-center w-40 hover:bg-green-600 transition rounded duration-500 p-2 bg-green-500 font-bold ">
                            <span className='text-xl mr-2 ml-4'> <FaWhatsapp /></span> Whatsapp
                        </button>
                    </Link>
                </div>
                    <Link href={`tel:${phoneNumber}`}>
                        <button className="flex hover:text-white items-center w-40 hover:bg-red-500 z-10 fixed left-5 bottom-5 transition rounded-full duration-200 p-2 bg-red-500 font-bold ">
                            <span className='text-xl mr-2 ml-4'> <FaPhone /></span> Call Now
                        </button>
                    </Link>

                    <Link href={`https://wa.me/${phoneNumber}`}>
                        <button className="flex hover:text-white items-center w-40 hover:bg-green-500 z-10 fixed right-5 bottom-5 transition rounded-full duration-200 p-2 bg-green-500 font-bold ">
                            <span className='text-xl mr-2 ml-4'> <FaWhatsapp /></span> Whatsapp
                        </button>
                    </Link>
                </div>
            <div>
                <img src='https://i.ibb.co/nDc28mg/banner.png' className='w-[100%] h-72 lg:h-96 mb-10 lg:mb-0' alt='' />
            </div>
        </div>




    );
};

export default HomeBanner;