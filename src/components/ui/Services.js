/* eslint-disable @next/next/no-img-element */
import React from 'react';


const Services = () => {
    return (
        <div className='mt-10'>
            <h1 className="text-center text-xl ">Our Services</h1>
            <p className='w-[50%] text-2xl font-bold text-center mx-auto'>WE PROVIDE PROFESSIONAL SERVICES</p>

            <div className='flex items-center w-72'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSycYYARG8y5szfxgQI0dMWDyK94lXAi20EnUf94xHgMv98ZuHGeGV6DfpTUcrV2Jajik&usqp=CAU" alt="" />
                </div>
                <h1>Engine Oil Change</h1>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward <span>Read More...</span></p>
            </div>
        </div>
    );
};

export default Services;