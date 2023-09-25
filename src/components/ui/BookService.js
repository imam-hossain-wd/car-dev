/* eslint-disable @next/next/no-img-element */

import { useForm } from "react-hook-form";


const BookService = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const phone = data.phone;
        const address = data.address;
        const brand = data.brand;
        const service_name = data.service_name;
        const reservation_date = data.reservation_date;
        const service_description = data.service_description;

        const number = "+971568703512";
        const message =
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Email: " + email + "\n" +
            "Address: " + address + "\n" +
            "Brand: " + brand + "\n" +
            "Service Name: " + service_name + "\n" +
            "Reservation Date: " + reservation_date + "\n" +
            "Service Description: " + service_description;

        const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
        window.open(url, '_blank').focus();

        reset();
    }
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
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-[450px] whiteInput'>
                        <input
                            type='text'
                            {...register("name", { required: "Name is required" })}
                            className='border w-full border-gray-400 focus:outline-none p-2 mt-3'
                            placeholder='Enter Name'
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

                        <input
                            type='email'
                            {...register("email", { required: "Email is required" })}
                            className='border w-full border-gray-400 focus:outline-none mt-3 p-2'
                            placeholder='Email'
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

                        <input
                            type='tel'
                            {...register("phone", { required: "Phone is required" })}
                            className='border border-gray-400 focus:outline-none w-full mt-3 p-2'
                            placeholder='Phone'
                        />
                        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}

                        <input
                            type='text'
                            {...register("address", { required: "Address is required" })}
                            className='border border-gray-400 focus:outline-none w-full mt-3 p-2'
                            placeholder='Address'
                        />
                        {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>} <br/>

                        <div className="flex flex-col md:flex-row lg:flex-row justify-between">
                        <div className="w-full md:w-[48%] lg:w-[218px]">
                        <select
                            {...register("brand", { required: "Brand is required" })}
                            className="select border w-full  border-gray-400 focus:outline-none p-2 mr-4 mt-3"
                        >
                            <option value="" disabled selected>
                                Select Your vehicle model
                            </option>
                            <option>Toyota</option>
                            <option>Jeep</option>
                            <option>Audi</option>
                            <option>Truck</option>
                            <option>Land Rover</option>
                            <option>Land Lexus</option>
                            <option>Mazda</option>
                        
                        </select>
                        {errors.brand && <span className=" text-red-500 text-sm">{errors.brand.message}</span>}
                        </div>

                        <div  className="w-full md:w-[48%] lg:w-[218px]">
                        <select
                            {...register("service_name", { required: "Service Name is required" })}
                            className="select border w-full  border-gray-400 focus:outline-none p-2 mr-4 mt-3"
                        >
                            <option value="" disabled selected>
                                Select Your Service
                            </option>
                            <option>Bettery</option>
                            <option>washing</option>
                            <option>Oil Change</option>
                            <option>Body Repair</option>
                            <option>Engine Repair</option>
                            <option>Color Repair</option>
                            <option>Service</option>
                        
                        </select>
                        <br/>
                        {errors.service_name && <span className="text-red-500 text-sm">{errors.service_name.message}</span>}

                        </div>
                        </div>
                        <input
                            {...register("reservation_date", { required: "Reservation Date is required" })}
                            type='date'
                            className='border w-full border-gray-400 focus:outline-none mt-3 p-2'
                            placeholder='Reservation Date'
                        />
                        {errors.reservation_date && <span className="text-red-500 text-sm">{errors.reservation_date.message}</span>}

                        <textarea
                            {...register("service_description", { required: "Service Description is required" })}
                            className="textarea textarea-bordered border border-gray-400 focus:outline-none w-full h-24 mt-3"
                            placeholder="Describe service"
                        ></textarea>
                        {errors.service_description && <span className="text-red-500 text-sm">{errors.service_description.message}</span>}

                        <div className='flex justify-center'>
                            <button type="submit" className='bg-neavyBlue py-2 rounded font-semibold text-white hover:bg-neavyBlueHover px-10 transition duration-500 w-48 mt-2 '>
                                Submit
                            </button>
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
