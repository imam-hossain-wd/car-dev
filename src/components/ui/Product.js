/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
const Product = ({products}) => {

//   https://i.ibb.co/Kh5LY1k/wheel.png
// https://i.ibb.co/G2sPJMg/part1.png
// https://i.ibb.co/Y240TSh/part2.png
// https://i.ibb.co/f9qht68/part3.png
// https://i.ibb.co/dWd1Pn9/part4.png
// https://i.ibb.co/J5hp0j0/part5.png



    return (
        <div id='product'>
            <div>

              <div className='text-center my-8'>
              <h1 className=' text-2xl font-semibold '>Our Products</h1>
                <p className='text-lg font-semibold'>Our products is one of the best product is Dubai</p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[85%] mx-auto '>
                {
                    products && products.map((product, index)=> (
                        <div className='w-[350px] rounded-lg p-5 drop-shadow-2xl' key={index} style={{backgroundColor:"#F3F4F6"}} >
                            <img className='w-80 h-60 mx-auto' src={product.image_url} alt='Product'/>
                            <h2 className='text-lg mt-2 mb-1 font-bold text-center'>{product.name}</h2>
                            <p>{product.description.slice(0, 100)}</p>
                           <div className='flex justify-center mt-5'>
                           <Link href={`/products/${product._id}`}>
                           <button className='text-md font-bold bg-neavyBlue py-2 px-5 text-white w-36  rounded'>Check Out</button>
                           </Link>
                           </div>

                        </div>
                    ))
                }
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <Link href="/products" className='bg-neavyBlue text-white px-5 py-2 font-semibold hover:bg-neavyBlueHover m-5 rounded'>All Products</Link>
            </div>
        </div>
    );
};

export default Product;



