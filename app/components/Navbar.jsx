'use client';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 50) {
        navRef.current.classList.add('nav-blur', theme === 'dark' ? 'bg-gray-900' : 'bg-white', 'bg-opacity-80');
      } else {
        navRef.current.classList.remove('nav-blur', 'bg-gray-900', 'bg-white', 'bg-opacity-80');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [theme]);

  return (
    <>
      <nav ref={navRef} className={`w-full fixed px-3 md:px-2 xl:px-[8%] py-1 flex items-center justify-between z-50 mt-0.5 rounded-xl border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} md:border-none`}>
        <div className='hidden md:flex w-1/4'></div>
        <a href="#top" role="button" className='pr-3'>
          <Image src={assets.logo} alt="Logo" width={32} height={32} className='cursor-pointer rounded-sm' priority />
        </a>
        <div className='hidden md:flex items-center justify-between'>
          <ul className={`flex items-center gap-6 lg:gap-8 rounded-full lg:px-2 py-[3px] border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li>
              <a href='/Suko_Gurung_Resume_website.pdf' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2'>
                Resume
                <Image src={assets.arrow_icon} alt='Arrow Icon' className='w-2.5'/>
              </a>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className='flex items-center pl-3'>
          <button className='button-top w-9 h-9 rounded-md flex items-center justify-center border' onClick={toggleTheme} aria-label='Toggle Theme'>
            <Image src={theme === 'dark' ? assets.sun_icon : assets.moon_icon} alt="Theme Icon" width={24} height={24} />
          </button>

          <button className='button-top md:hidden ml-3 w-9 h-9 rounded-md flex items-center justify-center border relative' onClick={toggleMenu} aria-label='Toggle Menu'>
            <Image src={menuOpen ? (theme === 'dark' ? assets.close_white : assets.close_black) : assets.menu_black} alt="Menu Icon" width={16} height={16} className='z-50' />
          </button>
        </div>

        <div className='hidden md:flex w-1/4'></div>

        {/* Mobile component */}
        <ul className={`md:hidden flex flex-col gap-2 px-10 py-20 fixed right-0 top-0 bottom-0 w-64 z-40 h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-rose-50'} transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <li><a href="#top" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li>
            <a href='/Suko_Gurung_Resume_Software_Engineer_2025.pdf' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2'>
              Resume
              <Image src={assets.arrow_icon} alt='Arrow Icon' className='h-3 w-3 rounded-sm' />
            </a>
          </li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
