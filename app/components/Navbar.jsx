import {assets} from '@/assets/assets'
import Image from 'next/image'
import React, {useRef} from 'react'

const Navbar = () => {

  const sideMenuRef = useRef();
  const openMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  return (
    <>
        <nav className = 'w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'> 
            <a onClick={closeMenu} href="#top">
                <Image src={assets.logo} alt=""
                className='w-28 cursor-pointer mr-14'/>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
            <li><a onClick={closeMenu} href="#top">Home</a></li>
            <li><a onClick={closeMenu} href="#about">About</a></li>
            <li><a onClick={closeMenu} href="#projects">Projects</a></li>
            <li><a onClick={closeMenu} href="#experience">Experience</a></li>
            <li><a onClick={closeMenu} href="#contact">Contact</a></li>
        </ul>
    
        <div className='flex items-center gap-4'>

          <button>
            <Image src={assets.moon_icon} alt="" className='w-6'/>
          </button>
            <a onClick={closeMenu} href="#contact" className='hidden lg:flex items-center gap-3 px-10 
            py-2.5 border border-gray-500 rounded-full ml-4'> Contact 
            <Image src={assets.arrow_icon} alt="" className='w-3'/></a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className='w-6'/>
          </button>
        </div>

        {/* Mobile Menu */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 ease-in-out'>
            <div className='absolute top-6 right-6'onClick={closeMenu}>
              <Image src={assets.close_black} alt="" className='w-5 cursor-pointer'/>
            </div>
            <li><a onClick={closeMenu} href="#top">Home</a></li>
            <li><a onClick={closeMenu} href="#about">About</a></li>
            <li><a onClick={closeMenu} href="#projects">Projects</a></li>
            <li><a onClick={closeMenu} href="#experience">Experience</a></li>
            <li><a onClick={closeMenu} href="#contact">Contact</a></li>

        </ul>

       </nav>
    </>
  
  )
}

export default Navbar