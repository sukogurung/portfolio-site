import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Footer from './Footer';
import ProfileCard from './ProfileCard';

const Hero = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-between'>
      <ProfileCard />
      <Footer />
    </div>
  );
};

export default Hero;