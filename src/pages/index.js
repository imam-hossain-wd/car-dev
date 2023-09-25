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

export default function Home({products}) {
  console.log(products, 'pppp');
  return (
   <div className='bg-white overflow-x-auto  text-black'>
   <Navbar />
   <HomeBanner />
   <Services/>
   <Product products={products}/>
   <BookService />
   <About/>
   <Contact/>
   <Footer/>

   </div>
  )
}

export async function getStaticProps() {

  const res = await fetch(`${process.env.URL}/product`)
  console.log(res, 'rrrr');
  const products = await res.json()
  return {
    props: {
      products,
    },
  }
}

