import React from 'react';
import { FaEnvelope, FaFacebook, FaGoogle, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div style={{backgroundColor:"#1E1E1E"}} className='contaier  text-white'>
           <footer className='p-10' >
          <div className='flex justify-around '>
          <div>
            <div className=''>
                <img className='w-14 h-14 rounded-full' src='https://i.ibb.co/863c3CY/car-service-logo.jpg' alt='car service logo'/>
               <div>
               <h3 className='text-lg'>Car Workshop</h3>
               </div>
               <div className='flex '>
               <span className='text-2xl border-2 rounded-full p-1 transition hover:text-red-800 ml-2'><FaFacebook/></span>
               <span className='text-2xl border-2 rounded-full p-1 transition hover:text-red-800 ml-2'><FaWhatsapp/></span>
               <span className='text-2xl border-2 rounded-full p-1 transition hover:text-red-800 ml-2'><FaGoogle/></span>
               </div>
            </div>
            <p>
            203, Envato Labs, Behind Alis Steet, <br/> Melbourne, Australia.
            </p>
            </div>
                {/*  */}
            <div>
                <div>
                    <h2>Services</h2>
                </div>
                <div>
                    <h4>Bettery Repair & Replace</h4>
                    <h4>Car Washing</h4>
                    <h4>Car Engine Repair</h4>
                    <h4>Car Engine Replace</h4>
                    <h4>Engine Oil Change</h4>
                </div>
            </div>

            {/*  */}
        
            <div>
                <div className='ml-2 text-lg mb-2'>
                    <h2>Contact Us</h2>
                </div>
                <div>
                    <div className='flex items-center'>
                    <h4><FaPhoneAlt/> </h4>
                    <p className='ml-2'>013137333</p>
                    </div>
                    <div className='flex items-center '>
                    <h4><FaEnvelope/> </h4>
                    <p className='ml-2'>Car@gmail.com</p>
                    </div>
                   
                </div>
            </div>
          </div>

            

            <p className='text-center'>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
           </footer>
        </div>
    );
};

export default Footer;