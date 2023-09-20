import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Styles from '@/styles/Service.module.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md  mb-2 ">
            <nav className='flex justify-between p-4 w-[90%] mx-auto'>
                <div>
                    <h1 className='text-3xl font-bold text-rose-500'>Car Dev</h1>
                </div>
                <ul className='hidden lg:flex'>
                    <li className='mr-5 hover:text-indigo-600'><a href="/home">Home</a></li>
                    <li className='mr-5 hover:text-indigo-600'><a href="/home">Service</a></li>
                    <li className='mr-5 hover:text-indigo-600'><a href="/home">Blog</a></li>
                    <li className='mr-5 hover:text-indigo-600'><a href="/home">Contact</a></li>
                    <li className='mr-5 hover:text-indigo-600'><a href="/home">Booking</a></li>
                    <li className='mr-5 hover:text-indigo-600'><a href="/home">About us</a></li>
                </ul>
                <p onClick={() => toggleMenu()} className='transition ease-in-out delay-150   hover:scale-110 duration-300 block lg:hidden text-xl'>
                    {!menuOpen ? <FaBars /> : <FaTimes />}
                </p>
            </nav>
            <nav>
                {
                    menuOpen && <ul className='flex flex-col lg:top-[-500px] ease-in duration-500'>
                        <li className='mb-2 ml-5'><a href="/home">Home</a></li>
                        <li className='mb-2 ml-5'><a href="/home">Service</a></li>
                        <li className='mb-2 ml-5'><a href="/home">Blog</a></li>
                        <li className='mb-2 ml-5'><a href="/home">Contact</a></li>
                        <li className='mb-2 ml-5'><a href="/home">Booking</a></li>
                        <li className='mb-2 ml-5'><a href="/home">About us</a></li>
                    </ul>
                }
            </nav>
        </header>

    );
};

export default Navbar;




