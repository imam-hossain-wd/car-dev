import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='my-10'>
            <div>
                <h1 className='text-center font-bold text-2xl '>Contact Us</h1>
            </div>

            <div className='flex flex-col p-5 m-5 justify-around lg:flex-row'>
                <div className="relative text-right w-full  lg:w-[50%] h-[450px] bg-white drop-shadow-2xl border-2 p-5 rounded">
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
            height: 400px;
          }
          .gmap_iframe {
            height: 400px!important;
          }
        `}
                    </style>
                </div>
            {/* form */}
                <div className='w-[500px] h-[550px] bg-white rounded p-10 border-2 drop-shadow-2xl mt-7 lg:mt-0 '>
                    <div>
                        <h1 className='text-center font-bold text-xl'>Get In Touch</h1>
                    </div>
                    <form>
                    <input type='text' className='border border-gray-400 focus:outline-none w-96 p-2 mt-3' placeholder='Enter Name' /> <br />
                    <input type='text' className='border border-gray-400 focus:outline-none w-96 mt-3  p-2' placeholder='Email' /> <br />

                    <input type='tel' className='border border-gray-400 focus:outline-none w-96 mt-3 p-2' placeholder='Phone' /> <br />

                    <input type='text' className='border border-gray-400 focus:outline-none w-96 mt-3 p-2' placeholder='Subject' /> <br />
                     <br />
                    <textarea className="textarea textarea-bordered border border-gray-400 focus:outline-none w-96 h-32 " placeholder="Message"></textarea>
                    <br />
                 <div className='flex justify-center'>
                 <input type='submit' className='bg-orange-500 py-2 rounded font-semibold hover:bg-neavyBlueHover px-10 w-40 mt-5  text-white ' />
                 </div>
                </form>

                </div>

            </div>
        </div>
    );
};

export default Contact;