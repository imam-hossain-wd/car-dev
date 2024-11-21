import RootLayout from "@/components/Layout/RootLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const CheckOut = ({ product }) => {
  const { image_url, name, description, alt } = product;

  const phoneNumber = "+1234567890";
  return (
    <div className="bg-white mt-28 mb-10">
      <Head>
        <title>Car Dev - Product Details Page</title>
        <meta
          name="description"
          content="Car Service and Repair in Dubai Product Details Page."
          key="desc"
        />
      </Head>
      {/* 
      
      https://i.ibb.co/m5w6C6f/car-bettery-repair-replace.webp
https://i.ibb.co/0rnKZkb/Denamo-Craft-Tailored-Car-Transformation.webp
https://i.ibb.co/wQSCqLG/raditor.webp
https://i.ibb.co/cX2bxrn/engine-oil-changing.webp
https://i.ibb.co/WHWtSL7/car-break-pad-repair.webp
https://i.ibb.co/bvcyCLn/car-diadnostic.webp
https://i.ibb.co/c2BSSQQ/abs-system-repair.webp
https://i.ibb.co/5jGCrK8/car-ac-service.webp
      
      
      
      
      */}
      <h3 className="text-center font-bold text-2xl mb-2">
        In-Depth Car Part Details{" "}
      </h3>
      <div className="w-72 mx-auto mb-5">
        <h4 className="text-center text-xl p-2 rounded bg-gray-200 my-2 font-semibold">
          Everything You Need to Know
        </h4>
      </div>
      <div className="flex flex-col items-center justify-center bg-white drop-shadow-2xl w-full lg:w-[600px] p-5 mx-auto">
        <div className="w-[60%] h-[300px] mb-5">
          <Image src={image_url} width={500} height={500} alt={alt} />
        </div>
        <p className="text-2xl font-bold my-2">{name}</p>
        <p>{description}</p>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-5 ">
          <Link href={`tel:${phoneNumber}`}>
            <button className="flex text-white items-center w-40 hover:bg-red-600  transition rounded duration-200 p-2 bg-red-500 font-bold ml-0 lg:mr-2">
              <span className="text-xl  mr-2 ml-4">
                {" "}
                <FaPhone />
              </span>{" "}
              Call Now
            </button>
          </Link>

          <Link href={`https://wa.me/${phoneNumber}`}>
            <button className="flex mt-2 lg:mt-0 text-white items-center w-40 hover:bg-green-600 transition rounded duration-500 p-2 bg-green-500 font-bold ml-0 lg:ml-2">
              <span className="text-xl mr-2 ml-4">
                {" "}
                <FaWhatsapp />
              </span>{" "}
              Whatsapp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

CheckOut.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/products`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product.title },
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
    revalidate: 10,
  };
};
