import RootLayout from '@/components/Layout/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const products = ({productDatas}) => {

    return (
        <div className='my-16 overflow-x-hidden'>
            <h1 className='text-center text-2xl font-bold mt-10 mb-5'><span className='text-red-500'>Transform</span> Your Car with Our Range</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[85%] mx-auto '>
                {
                    productDatas && productDatas.map((product)=> (
                        <div className='w-[350px] rounded-lg p-5 drop-shadow-2xl' key={product._id} style={{backgroundColor:"#F3F4F6"}} >
                            <Image className='w-96 h-60' src={product.image_url} width={300} height={300} alt={product.alt} />
                            <h2 className='text-lg mt-2 mb-1 font-bold text-center'>{product.name}</h2>
                            <p>{product.description.slice(0, 100)}</p>
                           <div className='flex justify-center mt-5'>
                           <Link href={`/products/${product._id}`}>
                           <button className='text-md font-bold bg-neavyBlue py-2 px-5 text-white w-36 hover:bg-neavyBlueHover duration-500  rounded'>Check Out</button>
                           </Link>
                           </div>
                       
                        </div>
                    ))
                }
              </div>
        </div>
    );
};

export default products;

products.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }

export async function getStaticProps() {
    const productRes = await fetch(`${process.env.URL}/products`);
    const productService = await productRes.json();

    return {
      props: {
        productDatas: productService,
      },
    };
  }