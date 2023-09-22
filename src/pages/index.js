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



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='bg-white text-black'>
   <Navbar />
   <HomeBanner />
   <Services/>
   <Product/>
   <BookService />
   <About/>
   <Contact/>
   <Footer/>

   </div>
  )
}
