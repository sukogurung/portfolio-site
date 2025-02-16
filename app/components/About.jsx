import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const About = () => {
  return (
    <div id='about' className='w-full px-4 py-6 scroll-mt-20 rounded-xl'>
      <h5 className='text-2xl mb-4'>about me.</h5>

      {/* Bento Grid Layout (Responsive) */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* First Row */}
        
        <div className='bento-item flex items-center h-[250px] p-4'>
          <p className='max-w-xl mx-auto'>
            Hey, I'm Suko Gurung. I enjoy using creative skills in frontend development and problem-solving skills in backend systems. Whether it's crafting sleek interfaces or tackling tough challenges, I'm all about creating scalable and secure applications.
          </p>
        </div>

        <div className='bento-item h-[250px] relative overflow-hidden rounded-xl'>
          <Image 
            src={assets.user_image} 
            alt='User' 
            layout="fill"
            objectFit="cover" 
          />
        </div>

        {/* Full-width Bento Item (Graph Placeholder) */}
        <div className='bento-item col-span-1 md:col-span-2'>
          <div className='graph-placeholder w-full h-64 bg-gray-300 flex items-center justify-center rounded-xl'>
            Altitude tracker
          </div>
        </div>

        {/* Additional Bento Items */}
        <div className='bento-item p-4 bg-gray-100 rounded-xl shadow-md'>
          <h3 className='text-lg font-semibold mb-2'>Currently learning</h3>
          <p>Cybersecurity, ML/AI, Coding, Go.</p>
        </div>
        <div className='bento-item p-4 bg-gray-100 rounded-xl shadow-md'>
          <h3 className='text-lg font-semibold mb-2'>When free time</h3>
          <p>Paddling, Trekking, Backpacking, </p>
        </div>
       
      </div>
    </div>
  );
};

export default About;