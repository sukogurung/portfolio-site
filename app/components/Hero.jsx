import React from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets'

const Hero = () => {
  return (
    <div className = 'w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

    <div>
        <Image src={assets.profile_img} alt='' className='w-52 mt-2'/>
    </div>

        <h1 className = 'text-3xl sm:text-6xl lg:text-[25px] font-bold text-blue-950' >Hey there ! I am Suko - a software engineer.</h1>

        <p className = 'max-w-2xl mx-auto font-semibold  text-blue-900'> I have a passion for software development and love to create things that are useful and fun.</p>


        
    <div className ='flex flex-row items-center gap-4 mt-4'>
        <a href ='mailto:suko@pdx.edu' target='_blank' rel='noopener noreferrer'
        className='px-3 py-1 border rounded-full border-grey-500 flex items-center gap-0.5  text-gray-700'>
            email
        </a>

        <a href ='https://www.linkedin.com/in/sukogurung/' target='_blank' rel='noopener noreferrer'
        className='px-3 py-1 border rounded-full border-grey-500 flex items-center gap-0.5  text-gray-700'> linkedin
        </a>

        <a href ='https://github.com/SukoGurung' target='_blank' rel='noopener noreferrer'
        className='px-3 py-1 border rounded-full border-grey-500 flex items-center gap-0.5 text-gray-700'> github
        </a>
    </div>
    </div>
  )
}

export default Hero