/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaEnvelope, FaFacebook, FaGoogle, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#1E1E1E" }} className='contaier  text-white'>
            <footer className='p-10' >
                <div className='flex justify-around '>
                    <div>
                        <div className=''>
                            <div className='flex items-center'>
                            <img className='w-14 h-14 rounded-full' src='https://i.ibb.co/863c3CY/car-service-logo.jpg' alt='car service logo' />
                                <h3 className='text-lg ml-2 font-semibold '>Car <span className='text-red-400'>Workshop</span></h3>
                            </div>
                            <div className='flex my-4'>
                                <span className='text-2xl border-2 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 p-1  ml-2'><FaFacebook /></span>
                                <span className='text-2xl border-2 rounded p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-500 ml-2'><FaWhatsapp /></span>
                                <span className='text-2xl border-2 rounded p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 ml-2'><FaGoogle /></span>
                            </div>
                        </div>
                        <p>
                            203, Envato Labs, Behind Alis Steet, <br /> Melbourne, Australia.
                        </p>
                    </div>

                    <div>
                        <div>
                            <h2 className='text-xl font-semibold mb-2 '>Services</h2>
                        </div>
                        <div>
                            <h4>Bettery Repair & Replace</h4>
                            <h4>Car Washing</h4>
                            <h4>Car Engine Repair</h4>
                            <h4>Car Engine Replace</h4>
                            <h4>Engine Oil Change</h4>
                        </div>
                    </div>



                    <div>
                        <div className='ml-2 text-lg mb-2'>
                            <h2 className='text-xl font-semibold '>Contact Us</h2>
                        </div>
                        <div>
                            <div className='flex items-center mb-1'>
                                <h4><FaPhoneAlt /> </h4>
                                <p className='ml-2'>013137333</p>
                            </div>
                            <div className='flex items-center '>
                                <h4><FaEnvelope /> </h4>
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