import React from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

const RootLayout = ({ children }) => {
    return (
        <div className='bg-white text-black'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default RootLayout;