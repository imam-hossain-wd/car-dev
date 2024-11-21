import { Inter } from "next/font/google";
import HomeBanner from "@/components/ui/HomeBanner";
import Services from "@/components/ui/Services";
import BookService from "@/components/ui/BookService";
import About from "@/components/ui/About";
import Product from "@/components/ui/Product";
import Contact from "@/components/ui/Contact";
import RootLayout from "@/components/Layout/RootLayout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products, services }) {
  return (
    <div className="bg-white overflow-x-auto  text-black">
      <Head>
        <title>Best Car Service And Car Repair In Dubai</title>
        <link rel="canonical" href="https://24carservicedubai.com" />
        <meta
          name="description"
          content="Your premier destination for top-notch car services: Quality, convenience, and expertise, all under one roof. Elevate your automotive experience today"
          key="desc"
        />
        <meta
          name="keywords"
          content="Car Service And Car
Repair In Dubai"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HomeBanner />
      <Services services={services} />
      <Product products={products} />
      <BookService />
      <About />
      <Contact />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const productRes = await fetch(`${process.env.URL}/products/?limit=6`);
  const productService = await productRes.json();

  const serviceRes = await fetch(`${process.env.URL}/services/?limit=6`);
  const serviceData = await serviceRes.json();

  return {
    props: {
      products: productService,
      services: serviceData,
    },
    revalidate: 10,
  };
}
