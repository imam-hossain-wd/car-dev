/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, {  useEffect, useState } from 'react';
import { FaBars, FaPhone, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { useRouter } from "next/router";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const phoneNumber = '+1234567890';
    const router = useRouter();

    const isAbout = router.asPath === "/#about";
    const isService = router.asPath === "/#service";
    const isHome = router.asPath === "/#home";
    const isContact = router.asPath === "/#contact";
    const isBooking = router.asPath === "/#booking";
    const isProduct = router.asPath === "/#product";


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md  mb-2 ">
            <nav className='flex justify-between p-4 w-[90%] mx-auto'>
                <div className='flex items-center'>
                    <img className='w-10 h-10 rounded-full' src='https://i.ibb.co/863c3CY/car-service-logo.jpg' alt='car service logo' />
                    <h1 className='text-3xl font-bold text-black'>Car <span className='text-red-700'>Dev</span></h1>
                </div>
                <div className='flex items-center'>
                    <ul className='hidden lg:flex'>

                        <li className={`mr-5 ${isHome ? "active text-red-400" : ""}`}><Link href="#home">Home</Link></li>

                        <li className={`mr-5 ${isService ? "active text-red-400" : ""}`}><Link href="#service">Service</Link></li>

                        <li className={`mr-5 ${isProduct ? "active text-red-400" : ""}`}>
                            <Link href="#product">Product</Link>
                        </li>

                        <li className={`mr-5 ${isAbout ? "active text-red-400" : ""}`}>
                            <Link href="#about">About</Link>
                        </li>
                      
                        <li className={`mr-5 ${isContact ? "active text-red-400" : ""}`}>
                            <Link href="#contact">Contact</Link>
                        </li>
                        <li className={`mr-5 ${isBooking ? "active text-red-400" : ""}`}>
                            <Link href="#booking">Booking</Link>
                        </li>

                    </ul>
                </div>
                <p onClick={() => toggleMenu()} className='hover:scale-110 duration-300 block lg:hidden text-xl'>
                    {!menuOpen ? <FaBars /> : <FaTimes />}
                </p>
            </nav>
            <nav>
                {
                    menuOpen && <ul className='flex flex-col lg:top-[-500px] transition-all ease-in duration-700'>
                        <li  onClick={() => toggleMenu(!menuOpen)}  className={`ml-5 mb-1 block md:block lg:hidden duration-500 ${isHome ? "active text-red-400" : ""}`}><Link href="#home">Home</Link></li>

                        <li onClick={() => toggleMenu(!menuOpen)} className={`ml-5 mb-1 block md:block lg:hidden ${isService ? "active text-red-400" : ""}`}><Link href="#service">Service</Link></li>

                        <li onClick={() => toggleMenu(!menuOpen)} className={`ml-5 mb-1 block md:block lg:hidden ${isAbout ? "active text-red-400" : ""}`}>
                            <Link href="#about">About</Link>
                        </li>
                        <li className={`mr-5 ${isProduct ? "active text-red-400" : ""}`}>
                            <Link href="#product">Product</Link>
                        </li>
                        <li onClick={() => toggleMenu(!menuOpen)} className={`ml-5 mb-1 block md:block lg:hidden ${isContact ? "active text-red-400" : ""}`}>
                            <Link href="#contact">Contact</Link>
                        </li>
                        <li onClick={() => toggleMenu(!menuOpen)} className={`ml-5 mb-1 block md:block lg:hidden ${isBooking ? "active text-red-400" : ""}`}>
                            <Link href="#booking">Booking</Link>
                        </li>
                    </ul>
                }
            </nav>
        </header>

    );
};

export default Navbar;
