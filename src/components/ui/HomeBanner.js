/* eslint-disable @next/next/no-img-element */
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const HomeBanner = () => {

    const phoneNumber = '+1234567890';
    return (

        <div className='flex justify-around items-center mt-10'>
            <div className=''>
                <h1 className='text-4xl font-bold'>Welcome to Car Service</h1>
                <p className='text-lg font-semi-bold font-semibold'>Quality car maintenance and repairs</p>

                <div className=''>
                    <a href={`https://wa.me/${phoneNumber}`} className="ml-10">
                        <button className='w-40 h-30 text-4xl text-green-500 hover:text-green-700 rounded mt-4'><FaWhatsapp /></button>
                    </a>

                    <a href={`tel:${phoneNumber}`} className="-ml-20">
                        <button className='w-40 h-30 text-4xl text-green-500 hover:text-green-700  rounded mt-4'><FaPhone /></button>
                    </a>
                </div>
                <button className='bg-green-400 px-7 w-60 mx-auto py-2 font-bold rounded mt-3 hover:bg-green-500 transition'>Get Service</button>
            </div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH1kCsOUV1I5OPnLiEC069-BT84RAQPSLyw&usqp=CAU' className='w-[500px] h-80' alt=''/>
            </div>
        </div>




    );
};

export default HomeBanner;