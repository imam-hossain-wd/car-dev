/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Product = ({products}) => {

  console.log(products, 'products');
//   https://i.ibb.co/Kh5LY1k/wheel.png
// https://i.ibb.co/G2sPJMg/part1.png
// https://i.ibb.co/Y240TSh/part2.png
// https://i.ibb.co/f9qht68/part3.png
// https://i.ibb.co/dWd1Pn9/part4.png
// https://i.ibb.co/J5hp0j0/part5.png

    // const products = [
    //     { 
    //       "id": "1",
    //       "name": "Car Battery Replacement & Repair Services",
    //       "description": "Our expert technicians provide comprehensive car battery services, including diagnosis, replacement, and repairs. Ensure your vehicle's reliable performance with a healthy battery.",
    //       "image_url": "https://i.ibb.co/pdfGyqj/Screenshot-2023-09-21-at-20-50-13-diesel-electric-car-starterjpg-jpg-JPEG-Image-600-338-pixels.png"
    //     },
    //     { 
    //       "id": "2",
    //       "name": "Car Brake Pad",
    //       "description": "Trust us for top-notch car brake pad replacements and maintenance. Safeguard your vehicle and ensure responsive braking for your safety on the road.",
    //       "image_url": "https://i.ibb.co/gyB6pvG/Screenshot-2023-09-21-at-20-47-37-Premium-Photo-Hand-technician-wearing-gloves-repairing-car-brake.png"
    //     },
    //     {
    //       "id": "3",
    //       "name": "Engine Oil Change",
    //       "description": "Maintain your engine's longevity and performance with our engine oil change services. We use high-quality oils to keep your car's heart running smoothly.",
    //       "image_url": "https://i.ibb.co/MBnDjQM/Screenshot-2023-09-23-at-12-55-00-Free-Photo-Composition-of-different-car-accessories.png"
    //     },
    //     {
    //       "id": "4",
    //       "name": "Gear Oil Change",
    //       "description": "Optimize your transmission's efficiency with gear oil change services. Our skilled technicians ensure proper lubrication and gear performance for your vehicle.",
    //       "image_url": "https://i.ibb.co/Y240TSh/part2.png"
    //     },
    //     {
    //       "id": "5",
    //       "name": "Car Wash",
    //       "description": "Give your car a fresh and sparkling look with our professional car wash services. We clean both the exterior and interior, leaving your vehicle spotless and inviting.",
    //       "image_url": "https://i.ibb.co/2FQ8kvb/Screenshot-2023-09-21-at-20-46-23-Premium-Photo-Car-radiator-isolated-on-white-background-3d-render.png"
    //     },
    //     {
    //       "id": "6",
    //       "name": "Car Engine Diagnostic",
    //       "description": "Diagnose and address engine issues with our advanced car engine diagnostic services. We use cutting-edge technology to pinpoint problems and provide effective solutions for your vehicle's engine.",
    //       "image_url": "https://i.ibb.co/FD4k02g/car-engine-diagnostic.png"
    //     }
    //   ]

    return (
        <div id='product'>
            <div>

              <div className='text-center my-8'>
              <h1 className=' text-2xl font-semibold '>Our Products</h1>
                <p className='text-lg font-semibold'>Our products is one of the best product is Dubai</p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[85%] mx-auto '>
                {
                    products && products.data.map((product, index)=> (
                        <div className='w-[350px] rounded-lg p-5 drop-shadow-2xl' key={index} style={{backgroundColor:"#F3F4F6"}} >
                            <img className='w-80 h-60 mx-auto' src={product.image_url} alt='Product'/>
                            <h2 className='text-lg mt-2 mb-1 font-bold text-center'>{product.name}</h2>
                            <p>{product.description.slice(0, 100)}</p>
                           <div className='flex justify-center mt-5'>
                           <Link href={`/product/${product._id}`}>
                           <button className='text-md font-bold bg-neavyBlue py-2 px-5 text-white w-36  rounded'>Check Out</button>
                           </Link>
                           </div>

                        </div>
                    ))
                }
              </div>
            </div>

        </div>
    );
};

export default Product;



