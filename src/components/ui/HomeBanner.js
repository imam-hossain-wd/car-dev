/* eslint-disable @next/next/no-img-element */

import React from 'react';

const HomeBanner = () => {
    const phoneNumber = '+1234567890';
    return (
        <div className="relative">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-4xl font-bold text-white">Welcome to Car Service</h1>
            <p className="text-xl text-white">Quality car maintenance and repairs</p>
            
            <a href={`tel:${phoneNumber}`}>
                    <button className='w-40 h-30 bg-sky-600 text-white p-3 rounded mt-4'>Call Now</button>
                </a>
        </div>
        
        <img className="w-full h-[600px]" src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwcmVwYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="car service" />
    </div>
    );
};

export default HomeBanner;