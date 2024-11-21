import {
  FaLongArrowAltUp,
  FaPhone,
  FaRegArrowAltCircleUp,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const HomeBanner = () => {
  const phoneNumber = "+971568703512";

  return (
    <div
      id="home"
      className="flex w-full flex-col-reverse lg:flex-row justify-around items-center mt-16"
    >
      <div className="w-full lg:w-[38%]">
        <h1 className="text-3xl font-bold text-center mb-10 mt-5 capitalize">
          Best car service and car
          <br />
          repair in dubai
        </h1>
        <h4 className="text-2xl text-center lg:text-2xl bg-gray-300 p-2  -mt-5 font-bold">
          Your On-Demand Car Savior <br />{" "}
          <span className=" text-red-600"> Anywhere, Anytime!</span>
        </h4>
        {/* <h4 className="text-lg mt-4 text-center bg-gray-300 font-semi-bold font-semibold">
          Quality car maintenance and repairs
        </h4> */}

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

        {/* fa arrow */}
        <Link href="#home">
          <button className=" animate-bounce   z-10 fixed right-5  text-indigo-600 bottom-16 text-3xl transition rounded-full duration-500 p-2 ">
            <FaRegArrowAltCircleUp />
          </button>
        </Link>

        <Link href={`tel:${phoneNumber}`}>
          <button className="flex hover:text-white items-center w-40 hover:bg-red-500 z-10 fixed left-5 bottom-5 transition rounded-full duration-200 p-2 bg-red-500 font-bold ">
            <span className="text-xl mr-2 ml-4">
              {" "}
              <FaPhone />
            </span>{" "}
            Call Now
          </button>
        </Link>

        <Link href={`https://wa.me/${phoneNumber}`}>
          <button className="flex hover:text-white items-center w-40 hover:bg-green-500 z-10 fixed right-5 bottom-5 transition rounded-full duration-200 p-2 bg-green-500 font-bold ">
            <span className="text-xl mr-2 ml-4">
              {" "}
              <FaWhatsapp />
            </span>{" "}
            Whatsapp
          </button>
        </Link>
      </div>
      <div>
        <Image
          className="w-[100%] h-72 lg:h-96 mb-10 mt-10 lg:mb-0"
          src="https://i.ibb.co/j48HB12/banner.webp"
          width={500}
          height={500}
          alt="Best Car Service And Car
Repair In Dubai"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
