import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle = {
  height: '100%',
  width:'100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselPage = ({service}) => (
  <Carousel className='w-full lg:w-[700px]' autoplay>
    <div>
      <h3 style={contentStyle}>
      <Image
          className="w-[100%] h-72 lg:h-96 mb-10 mt-10 lg:mb-0"
          // src="https://i.ibb.co/3M1rWfR/car-bettery-repair-replace.png"
          src={service?.image_url}
          width={300}
          height={400}
          alt="Best Car Service And Car
Repair In Dubai"
        />
    
      </h3>
    </div>
    {/* <div>
      <h3 style={contentStyle}>
      <Image
          className="w-[100%] h-72 lg:h-96 mb-10 mt-10 lg:mb-0"
          src="https://i.ibb.co/zJy1bMS/baterias.jpg"
          width={500}
          height={500}
          alt="Best Car Service And Car
Repair In Dubai"
        />
      </h3>
    </div> */}
    {/* <div>
      <h3 style={contentStyle}>
      <Image
          className="w-[100%] h-72 lg:h-96 mb-10 mt-10 lg:mb-0"
          src="https://i.ibb.co/rQCF92H/car-bettery.png"
          width={500}
          height={500}
          alt="Best Car Service And Car
Repair In Dubai"
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image
          className="w-[100%] h-72 lg:h-96 mb-10 mt-10 lg:mb-0"
          src="https://i.ibb.co/cLWpLVH/bettery.jpg"
          width={500}
          height={500}
          alt="Best Car Service And Car
Repair In Dubai"
        />
      </h3>
    </div> */}
  </Carousel>
);

export default CarouselPage;
