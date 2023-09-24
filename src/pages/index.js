import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
import HomeBanner from '@/components/ui/HomeBanner'
import Services from '@/components/ui/Services'
import BookService from '@/components/ui/BookService'
import Footer from '@/components/ui/Footer'
import About from '@/components/ui/About'
import Product from '@/components/ui/Product'
import Contact from '@/components/ui/Contact'
import Carousel from '@/components/ui/Carousel'



const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  return (
   <div className='bg-white text-black'>
   <Navbar />
   <HomeBanner />
   <Services/>
   <Product products={products}/>
   <BookService />
   <Carousel/>
   <About/>
   <Contact/>
   <Footer/>

   </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://car-dev-backend.vercel.app/products')
  const products = await res.json()
  return {
    props: {
      products,
    },
  }
}

