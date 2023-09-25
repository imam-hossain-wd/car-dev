import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {register,handleSubmit,reset,formState: { errors }} = useForm()

      const contactHandler = (data) => {
        const name = data.name;
        const email = data.email;
        const phone = data.phone;
        const subject = data.subject;
        const message = data.message;

        const number = "+971568703512";
        const text =
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n" +
            "Subject: " + subject + "\n" +
            "Message: " + message + "\n" ;

        const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(text);
        window.open(url, '_blank').focus();

        reset();
      }
    return (
        <div id='contact' className='my-10'>
             <style jsx>
            {`
            .whiteInput input,select, textarea {
                background:white;
            }
            `}
           </style>
            <div className=' flex justify-center'>
                <h1 className='text-center w-60 p-1 font-bold text-2xl bg-gray-200 '>Contact us</h1>
            </div>

            <div className='flex flex-col p-5 m-5 justify-around lg:flex-row'>
                <div className="relative text-right w-full  lg:w-[50%] h-[480px] bg-white drop-shadow-2xl border-2 p-5 rounded">
                    <div className="gmap_canvas ">
                        <iframe
                            className="gmap_iframe"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=modunaghat&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            title="Google Map"
                        ></iframe>
                        <a href="https://connectionsgame.org/">Connections Unlimited</a>
                    </div>
                    <style>
                        {`
          .gmap_canvas {
            overflow: hidden;
            background: none!important;
            width: 100%;
            height: 500px;
          }
          .gmap_iframe {
            height: 400px!important;
          }
        `}
          </style>
                </div>
                <div className='w-full  lg:w-[500px] h-full bg-white rounded p-10 border-2 drop-shadow-2xl mt-7 lg:mt-0 '>
                    <div>
                        <h1 className='text-center font-bold text-xl -mt-3 -ml-3 text-orange-500 uppercase'>Get In Touch</h1>
                    </div>
                    <form onSubmit={handleSubmit(contactHandler)} className='lg:ml-4 whiteInput'>
      <input
        type='text'
        {...register("name", { required: "Name is required" })}
        className='border border-gray-400 focus:outline-none w-full lg:w-96 p-2 mt-3'
        placeholder='Enter Name'
      />
      {errors.name && (
        <span className="text-red-500 text-sm">{errors.name.message}</span>
      )}

      <input
        type='text'
        {...register("email", { required: "Email is required" })}
        className='border border-gray-400 focus:outline-none w-full lg:w-96 mt-3 p-2'
        placeholder='Email'
      />
      {errors.email && (
        <span className="text-red-500 text-sm">{errors.email.message}</span>
      )}

      <input
        type='tel'
        {...register("phone", { required: "Phone is required" })}
        className='border border-gray-400 focus:outline-none w-full lg:w-96 mt-3 p-2'
        placeholder='Phone'
      />
      {errors.phone && (
        <span className="text-red-500 text-sm">{errors.phone.message}</span>
      )}

      <input
        type='text'
        {...register("subject", { required: "Subject is required" })}
        className='border border-gray-400 focus:outline-none w-full lg:w-96 mt-3 p-2'
        placeholder='Subject'
      />
      {errors.subject && (
        <span className="text-red-500 text-sm">{errors.subject.message}</span>
      )}

      <textarea
        {...register("message", { required: "Message is required" })}
        className="mt-3 textarea textarea-bordered border border-gray-400 w-full lg:w-96 focus:outline-none h-28"
        placeholder="Message"
      />
      {errors.message && (
        <span className="text-red-500 text-sm">{errors.message.message}</span>
      )}

      <div className='flex justify-center'>
        <button
          type="submit"
          className='bg-orange-500 py-2 rounded font-semibold text-white hover:bg-neavyBlueHover px-10 transition duration-500 w-48 mt-2'
        >
          Submit
        </button>
      </div>
    </form>

                </div>

            </div>
        </div>
    );
};

export default Contact;