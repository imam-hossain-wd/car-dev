/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '@/styles/BookService.module.css'

const BookService = () => {
    return (
        <div className='m-10 flex justify-around'>
            <div>
            <h1 className='text-2xl font-bold'>Get A <span className='text-red-700'>Service Now!</span></h1>
            <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Enim labore iure repellendus quasi nobis.</p>

            <form>
                <input type='text' className='border border-gray-400 focus:outline-none w-96 p-2 mb-4' placeholder='Enter Name' /> <br/>
                <input type='text' className='border border-gray-400 focus:outline-none w-44 p-2' placeholder='Email' />
                <input type='text' className='border border-gray-400 focus:outline-none w-44 p-2 ml-8' placeholder='Phone' /> <br/>
                <select className="select border border-gray-400 my-4 focus:outline-none p-2 w-44 ">
                    <option disabled selected>Select Your vehicle model</option>
                    <option>Toyota</option>
                    <option>Jeep</option>
                    <option>Audi</option>
                    <option>Truck</option>
                    <option>Land Rover</option>
                    <option>Land Lexus</option>
                    <option>Mazda</option>
                </select>
                <input type='date' className='border border-gray-400 focus:outline-none w-44 ml-8  p-2' placeholder='Reservation Date' /> <br/>

                <textarea className="textarea textarea-bordered border border-gray-400 focus:outline-none w-60 h-32 mb-4" placeholder="Tell me Your Probelm"></textarea>
                 <br/>

                <input type='submit' className='bg-neavyBlue py-1 px-10  text-white ' />
            </form>
            </div>
            <div className={`${styles.imageContainer}`}>
            <img className="bg-black " src="https://i.ibb.co/YhYK8Vs/booking.png" alt="car servicing" />
            </div>

        </div>
    );
};

export default BookService;