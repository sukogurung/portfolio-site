'use client'
import React from 'react';

const Footer = () => {
  

  return (
    <div className='w-full flex flex-col items-center justify-center py-2'>
      <div className='w-full border-t pt-1' style={{ borderColor: 'var(--footer-border-color)' }}></div>
      <div className='flex flex-row items-center justify-center gap-6'>
        <div className='text-gray-700 text-sm'>&copy; Suko Gurung</div>
        <a
          href='mailto:suko@pdx.edu'
          target='_blank'
          rel='noopener noreferrer'
          className='px-2 inline-flex items-center text-gray-700 text-sm'
        >
          email
        </a>
        <a
          href='https://www.linkedin.com/in/sukogurung/'
          target='_blank'
          rel='noopener noreferrer'
          className='px-2 inline-flex items-center text-gray-700 text-sm'
        >
          linkedin
        </a>
        <a
          href='https://github.com/SukoGurung'
          target='_blank'
          rel='noopener noreferrer'
          className='px-2 inline-flex items-center text-gray-700 text-sm'
        >
          github
        </a>
      </div>
    </div>
  );
};

export default Footer;