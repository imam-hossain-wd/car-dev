import { Inter } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
import HomeBanner from '@/components/ui/HomeBanner'
import Services from '@/components/ui/Services'
import BookService from '@/components/ui/BookService'
import Footer from '@/components/ui/Footer'
import About from '@/components/ui/About'
import Product from '@/components/ui/Product'
import Contact from '@/components/ui/Contact'




const inter = Inter({ subsets: ['latin'] })

export default function Home({products, services}) {
  return (
   <div className='bg-white overflow-x-auto  text-black'>
   <Navbar />
   <HomeBanner />
   <Services services={services}/>
   <Product products={products}/>
   <BookService />
   <About/>
   <Contact/>
   <Footer/>

   </div>
  )
}

export async function getStaticProps() {
  const productRes = await fetch(`${process.env.URL}/products`);
  const productService = await productRes.json();

console.log(productService, 'product service');
  const serviceRes = await fetch(`${process.env.URL}/services`);
  const serviceData = await serviceRes.json();

  return {
    props: {
      products: productService,
      services: serviceData,
    },
  };
}



