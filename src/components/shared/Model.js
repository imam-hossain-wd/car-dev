/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const Model = ({serviceData}) => {
    const phoneNumber = '+971568703512';
    return (
        <div>
            <dialog id="my_modal_1" className="modal rounded">
                <div className="modal-box bg-white w-[320px] h-[412px] p-2">
                <div>
                    <div className='flex justify-center mb-2'>
                    <img className='w-full h-44 rounded' src={serviceData.image_url} alt='service photo'/>
                    </div>
                    <h2 className='text-md text-center bg-gray-200 rounded font-bold'>{serviceData.name}</h2>
                    <h2 className='text-md text-center font-semibold my-2'>24/7 On-Demand Car Battery Replacement & Repair – Anywhere, Just Call or WhatsApp with Your Location</h2>
                </div>

                    <div className='flex items-center justify-evenly mt-2'>
                        <Link className='' href={`tel:${phoneNumber}`}>
                            <button className="flex text-white items-center w-28 hover:bg-neavyBlueHover transition rounded duration-200 p-1 bg-neavyBlue font-bold ">
                                <span className='text-[12px] mr-[5px] ml-2'> <FaPhone /></span> Call Now
                            </button>
                        </Link> <br />

                        <Link className='' href={`https://wa.me/${phoneNumber}`}>
                            <button className="flex hover:text-white items-center w-28 hover:bg-green-500 transition rounded duration-200 p-1 bg-green-500 font-bold ">
                                <span className='text-[15px] mr-[5px] ml-[5px]'> <FaWhatsapp /></span>Whatsapp
                            </button>
                        </Link>
                    </div>
                    <div className="modal-action -mb-2">
                        <form method="dialog">
                          <div className='flex justify-end'>
                          <button className=" py-1 mt-3 px-5 rounded hover:bg-red-600 bg-red-500 text-white border-0">Close</button>
                          </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Model;