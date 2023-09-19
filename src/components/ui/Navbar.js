import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="">
            <nav className='flex justify-between p-5'>
                <div>
                    <h1 className='text-3xl font-bold text-rose-500'>Car Dev</h1>
                </div>
                <ul className='hidden lg:flex'>
                    <li className='mr-5'><a href="/home">Home</a></li>
                    <li className='mr-5'><a href="/home">Service</a></li>
                    <li className='mr-5'><a href="/home">Blog</a></li>
                    <li className='mr-5'><a href="/home">Contact</a></li>
                    <li className='mr-5'><a href="/home">Booking</a></li>
                    <li className='mr-5'><a href="/home">About us</a></li>
                </ul>
                <p onClick={() => toggleMenu()} className='block lg:hidden text-2xl'>
                    {!menuOpen ? <FaBars /> : <FaTimes />}
                </p>
            </nav>
            <nav>
                {
                    menuOpen && <ul className='flex flex-col lg:hidden'>
                        <li className='mb-2'><a href="/home">Home</a></li>
                        <li className='mb-2'><a href="/home">Service</a></li>
                        <li className='mb-2'><a href="/home">Blog</a></li>
                        <li className='mb-2'><a href="/home">Contact</a></li>
                        <li className='mb-2'><a href="/home">Booking</a></li>
                        <li className='mb-2'><a href="/home">About us</a></li>
                    </ul>
                }
            </nav>
        </header>
    );
};

export default Navbar;