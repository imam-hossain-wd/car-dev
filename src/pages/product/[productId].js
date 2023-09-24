/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const CheckOut = ({ product }) => {
  
  const phoneNumber = '+1234567890';
  return (
    <div className="bg-white text-black mt-10">
      <h1 className="text-center font-bold text-3xl mb-5 ">welcome to CheckOut page </h1>
      <div className="flex flex-col items-center justify-center bg-white drop-shadow-2xl w-full lg:w-[600px] p-5 mx-auto">
        <div>
          <img className="w-full lg:w-[450px] rounded" src={product.image_url} alt="product" />
        </div>
        <p className="text-2xl font-bold my-2">{product.name}</p>
        <p>{product.description}</p>

        <div className='flex flex-col lg:flex-row items-center justify-center mt-5 '>
                    <Link href={`tel:${phoneNumber}`}>
                        <button className="flex text-white items-center w-40 hover:bg-red-600  transition rounded duration-200 p-2 bg-red-500 font-bold ml-0 lg:mr-2">
                            <span className='text-xl  mr-2 ml-4'> <FaPhone /></span> Call Now
                        </button>
                    </Link>

                    <Link href={`https://wa.me/${phoneNumber}`}>
                        <button className="flex mt-2 lg:mt-0 text-white items-center w-40 hover:bg-green-600 transition rounded duration-500 p-2 bg-green-500 font-bold ml-0 lg:ml-2">
                            <span className='text-xl mr-2 ml-4'> <FaWhatsapp /></span> Whatsapp
                        </button>
                    </Link>
                </div>
      </div>
    </div>
  );
};

export default CheckOut;


export const getStaticPaths = async () => {

  const res = await fetch("https://car-dev-backend.vercel.app/products/");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { productId } = params;
  const res = await fetch(`https://car-dev-backend.vercel.app/product/${productId}`);
  const product = await res.json();
  console.log(product, 'final single products');

  return {
    props: {
      product,
    },
  };
};