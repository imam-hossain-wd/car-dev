/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Collapse } from 'antd';


const items = [
  {
    key: '1',
    label: <h3 className='text-xl font-semibold mb-1'> How often should I replace my car battery?</h3>,
    children: <p>On average, car batteries last about 3 to 5 years. Yet, extreme
    weather conditions and driving habits can affect the lifespan.</p>,
  },
  {
    key: '2',
    label: <h3 className='text-xl font-semibold mb-1'> How do I jump-start my car?</h3>,
    children: <p> You'll need jumper cables and a running vehicle. Connect the
    cables, start the assisting car, wait a few minutes, and try
    starting your vehicle.</p>,
  },
  {
    key: '3',
    label: <h3 className='text-xl font-semibold mb-1'> Why is car battery replacement so important?</h3>,
    children: <p>Your car's battery is its life source. It powers the engine,
    lights, and electrical components. Over time, batteries wear out
    and lose their ability to hold a charge. This is when a
    replacement becomes inevitable.</p>,
  },
  {
    key: '4',
    label: <h3 className='text-xl font-semibold mb-1'> Can I replace the car battery myself?</h3>,
    children: <p> Yes, if you have the necessary tools and knowledge. Yet, it's
    recommended to seek professional help, especially for complex
    installations.</p>,
  },
  {
    key: '5',
    label: <h3 className='text-xl font-semibold mb-1'> How do I jump-start my car?</h3>,
    children: <p>  You'll need jumper cables and a running vehicle. Connect the
    cables, start the assisting car, wait a few minutes, and try
    starting your vehicle.</p>,
  },
  {
    key: '6',
    label: <h3 className='text-xl font-semibold mb-1'> Where to get dependable car battery replacement in Dubai, and what's
    the typical cost?</h3>,
    children: <p>    I found trustworthy places in Dubai to replace car batteries. They
    are reputable auto repair shops and service centers. Car battery
    replacement in Dubai costs AED 200 to AED 500, depending on the
    battery type and brand. These centers provide professional
    installation and battery warranties. Be sure to inquire about
    costs and warranties before deciding.</p>,
  },
];

const ServiceCollapse = () => <div className='w-[90%]'>
    <Collapse items={items} bordered={false} defaultActiveKey={['1']} />
</div>;

export default ServiceCollapse;