
import Image from 'next/image';
import Link from 'next/link';
const Product = ({products}) => {

    return (
        <div id='product'>
            <div>

              <div className='text-center my-8 flex flex-col justify-center items-center '>
              <h1 className=' text-xl font-bold px-3 bg-gray-300 p-2 mb-2 '>Upgrade Your Ride with Our Products</h1>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[85%] mx-auto '>
                {
                    products && products.map((product, index)=> (
                        <div className='w-[350px] rounded-lg p-5 drop-shadow-2xl' key={index} style={{backgroundColor:"#F3F4F6"}} >
                            <Image className='w-80 h-60 mx-auto' src={product.image_url} width={500} height={500} alt={product.alt} />
                            <h2 className='text-lg mt-2 mb-1 font-bold text-center'>{product.name}</h2>
                            <p>{product.description.slice(0, 100)}</p>
                           <div className='flex justify-center mt-5'>
                           <Link href={`/products/${product._id}`}>
                           <button className='text-md font-bold bg-neavyBlue hover:bg-neavyBlueHover duration-500 py-2 px-5 text-white w-36  rounded'>Check Out</button>
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



