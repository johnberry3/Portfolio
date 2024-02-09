import React from 'react'
import { MainProfile } from '../assets/image'
import { IoDownloadOutline } from "react-icons/io5";


const Hero = () => {
  return (
    <div className='flex  max-xl:flex-col '>
        <div className='w-1/2 max-xl:w-full h-screen max-xl:h-[500px] px-11 bg-gray-100 rounded-md text-black'>
           <div className='top-[30%]  max-xl:top-[20%] relative'>
           <h2 className='text-5xl max-sm:text-3xl font-bold  '>Hello! I'm Johnberry</h2>
            <h2 className='text-3xl max-sm:text-2xl font-semibold mt-4'>I am a passionate <span className='font-bold'>Frontend Developer</span></h2>
            <p className='mt-4 text-justify italic text-gray-600'>As a frontend developer, I specialize in crafting delightful user experiences and bringing designs to life through code. With a keen eye for design aesthetics and a knack for problem-solving, I thrive on turning ideas into interactive and responsive web applications.</p>
           <div className='flex items-center  gap-5 mt-5'>
           <button className='bg-black max-sm:text-[10px] uppercase text-sm  px-3 flex items-center gap-2 font-bold py-2 text-white '>Download Resume
            <IoDownloadOutline /></button>
            <button className='px-3 py-2 border-black border-2 max-sm:text-[10px] uppercase font-semibold'>Scroll </button>
           </div>
           </div>
           <div>
           </div>
        </div>
        <div className='w-1/2 max-xl:w-full h-screen max-xl:h-[550px] flex justify-center bg-black'>
             <div className='mt-8 w-[390px] h-full max-xl:h-[500px] '>
             <img src={MainProfile} className='w-full max-sm:h-full' height={300} alt="MainProfile" />
             </div>
        </div>
    </div>
  )
}

export default Hero