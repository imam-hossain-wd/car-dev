import { Inter } from 'next/font/google'
import HomeBanner from '@/components/ui/HomeBanner'
import Services from '@/components/ui/Services'
import BookService from '@/components/ui/BookService'
import About from '@/components/ui/About'
import Product from '@/components/ui/Product'
import Contact from '@/components/ui/Contact'
import RootLayout from '@/components/Layout/RootLayout'




const inter = Inter({ subsets: ['latin'] })

export default function Home({products, services}) {
  return (
   <div className='bg-white overflow-x-auto  text-black'>
   <HomeBanner />
   <Services services={services}/>
   <Product products={products}/>
   <BookService />
   <About/>
   <Contact/>
   </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

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
  };
}



