import Servicewrapper from "@/components/ui/serviceDescription/Servicewrapper";
import Head from "next/head";


const ServiceDetails = ({ service }) => {
  return (
    <section className="mt-24">

      <div className="w-96 mx-auto p-2 ">
        <h3 className=" text-center text-xl  bg-gray-300 font-bold">
          Revive Your Ride
        </h3>
      </div>
      {<Servicewrapper service={service} />}
    </section>
  );
};

export default ServiceDetails;

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/services`);
  const services = await res.json();

  const paths = services.map((service) => ({
    params: { details: service.title },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { details } = params;

  const res = await fetch(`${process.env.URL}/service/${details}`);
  const service = await res.json();
  return {
    props: {
      service,
    },
    revalidate: 10,
  };
};
