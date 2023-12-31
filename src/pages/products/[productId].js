import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const CheckOut = ({ product }) => {
    const { image_url, name, description,alt } = product;

  const phoneNumber = '+1234567890';
  return (
      <div className="bg-white mt-28 mb-10">
      <h1 className="text-center font-bold text-3xl mb-5">Welcome to Checkout page </h1>
      <div className="flex flex-col items-center justify-center bg-white drop-shadow-2xl w-full lg:w-[600px] p-5 mx-auto">
        <div className="w-[60%] h-[300px] mb-5">
          <Image src={image_url} width={500} height={500} alt={alt}/>
        </div>
        <p className="text-2xl font-bold my-2">{name}</p>
        <p>{description}</p>

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

CheckOut.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}



export const getStaticPaths = async () => {

  const res = await fetch(`${process.env.URL}/products`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { productId } = params;
  const res = await fetch(`${process.env.URL}/product/${productId}`);
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
};
