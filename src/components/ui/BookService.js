/* eslint-disable @next/next/no-img-element */

import styles from '@/styles/BookService.module.css'


const BookService = () => {
    
    return (
        <div id="booking" className='m-10 flex flex-col lg:flex-row justify-around'>
            <div>
                <h1 className='text-2xl font-bold'>Get A <span className='text-red-700'>Service Now!</span></h1>
                <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Enim labore iure repellendus quasi nobis.</p>

                <form>
                    <input type='text' className='border border-gray-400 focus:outline-none w-96 p-2 mt-3' placeholder='Enter Name' /> <br />
                    <input type='text' className='border border-gray-400 focus:outline-none w-96 mt-3  p-2' placeholder='Email' /> <br />

                    <input type='tel' className='border border-gray-400 focus:outline-none w-96 mt-3 p-2' placeholder='Phone' /> <br />

                    <input type='text' className='border border-gray-400 focus:outline-none w-96 mt-3 p-2' placeholder='Address' /> <br />
                    <select className="select border border-gray-400 focus:outline-none p-2 w-96 mt-3">
                        <option disabled selected>Select Your vehicle model</option>
                        <option>Toyota</option>
                        <option>Jeep</option>
                        <option>Audi</option>
                        <option>Truck</option>
                        <option>Land Rover</option>
                        <option>Land Lexus</option>
                        <option>Mazda</option>
                    </select> <br />

                    <select className="select border border-gray-400 focus:outline-none p-2 w-96 mt-3">
                        <option disabled selected>Select Your Service</option>
                        <option>Bettery</option>
                        <option>washing</option>
                        <option>Oil Change</option>
                        <option>Body Repair</option>
                        <option>Engine Repair</option>
                        <option>Color Repair</option>
                        <option>Service</option>
                    </select> <br />
                    <input type='date' className='border border-gray-400 focus:outline-none w-96 mt-3  p-2' placeholder='Reservation Date' /> <br />

                    <textarea className="textarea textarea-bordered border border-gray-400 focus:outline-none w-60 h-32 mt-3" placeholder="Tell me Your Probelm"></textarea>
                    <br />
                   <input type='submit' className='bg-neavyBlue py-2 rounded font-semibold hover:bg-neavyBlueHover px-10 w-40 mt-2  text-white ' />
                </form>
            </div>
            <div className={`${styles.imageContainer} mt-8 lg:mt-0`}>
                <img className="bg-black " src="https://i.ibb.co/YhYK8Vs/booking.png" alt="car servicing" />
            </div>

        </div>
    );
};

export default BookService;