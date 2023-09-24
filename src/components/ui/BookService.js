/* eslint-disable @next/next/no-img-element */


const BookService = () => {
    
    return (
        <div id="booking" className="mt-10">
           <style jsx>
            {`
            .whiteInput input,select,textarea{
                background:white;
            }       
            `}
           </style>

            <div className="flex flex-col lg:flex-row justify-around items-center">

            <div className="bg-white p-5 drop-shadow-2xl">
            <div>
            <h1 className='text-2xl text-center md:text-center  font-bold -mt-2 mb-2'>Get A <span className='text-red-700  '>Service Now!</span></h1>
            </div>
            <form className='w-full lg:w-[450px] whiteInput'>
                    <input type='text' className='border w-full border-gray-400 focus:outline-none  p-2 mt-3' placeholder='Enter Name' /> 
                    <input type='email' className='border w-full  border-gray-400 focus:outline-none  mt-3  p-2' placeholder='Email' /> 

                    <input type='tel' className='border  border-gray-400 focus:outline-none w-full  mt-3 p-2' placeholder='Phone' /> 

                    <input type='text' className='border  border-gray-400 focus:outline-none w-full  mt-3 p-2' placeholder='Address' /> 
                    <select className="select border w-[48%]  border-gray-400 focus:outline-none p-2 mr-4  mt-3">
                        <option disabled selected>Select Your vehicle model</option>
                        <option>Toyota</option>
                        <option>Jeep</option>
                        <option>Audi</option>
                        <option>Truck</option>
                        <option>Land Rover</option>
                        <option>Land Lexus</option>
                        <option>Mazda</option>
                    </select> 

                    <select className="select w-[48%] border border-gray-400 focus:outline-none p-2  mt-3">
                        <option disabled selected>Select Your Service</option>
                        <option>Bettery</option>
                        <option>washing</option>
                        <option>Oil Change</option>
                        <option>Body Repair</option>
                        <option>Engine Repair</option>
                        <option>Color Repair</option>
                        <option>Service</option>
                    </select> <br />
                    <input type='date' className='border w-full border-gray-400 focus:outline-none  mt-3  p-2' placeholder='Reservation Date' /> <br />

                    <textarea className="textarea textarea-bordered border border-gray-400  focus:outline-none w-full h-24 mt-3" placeholder="Describe service"></textarea>
                    <br />
                  <div className='flex justify-center'>
                  <button type="submit" className='bg-neavyBlue py-2 rounded font-semibold text-white hover:bg-neavyBlueHover px-10 transition duration-500 w-48 mt-2 '> Submit</button>
                  </div>
                </form>
            </div>
            <div className=" mt-8 lg:mt-0 drop-shadow-2xl bg-white p-5 rounded">
                <img className="w-[650px] h-[500px]" src="https://i.ibb.co/cyxmq4p/brake-disc-1749633-1920.jpg" alt="car servicing" />
            </div>



            </div>


        </div>
    );
};

export default BookService;
