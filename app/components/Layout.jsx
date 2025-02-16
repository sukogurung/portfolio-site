import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
    <Navbar />
    <div className='w-full lg:py-0 py-0 scroll-mt-20'>
      <div className='mx-auto w-full md:w-1/2 px-4 rounded-xl'>
        {children}
      </div>
    </div>
    </>
  );
};

export default Layout