import React from 'react'
import { MainProfile } from '../assets/image'
import { IoDownloadOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";


const Hero = () => {
  return (
    <div className='flex  max-xl:flex-col '>
        <div className='w-1/2 max-xl:w-full h-screen max-xl:h-[500px] px-11 max-sm:px-7 pb-6 bg-gray-100 rounded-t-md text-black'>
           <div className='top-[30%]  max-xl:top-[20%] max-xl:text-center sm:10% relative'>
           <h2 className='text-5xl max-sm:text-3xl font-bold  '>Hello! I'm Johnberry</h2>
            <h2 className='text-3xl max-sm:text-2xl font-bold mt-4'>A Frontend Developer</h2>
            <p className='mt-4 max-sm:mt-2 text-justify max-xl:text-center font-mono italic text-gray-600'>As a frontend developer, I specialize in crafting delightful user experiences and bringing designs to life through code. With a keen eye for design aesthetics and a knack for problem-solving, I thrive on turning ideas into interactive and responsive web applications.</p>
           <div className='flex items-center max-xl:justify-center  gap-5 mt-5'>
           <button className='bg-black max-sm:text-[10px] max-xl:gap-3 uppercase text-sm  max-xl:px-1 px-3 flex items-center gap-2 font-bold py-2 text-white '>Download Resume
            <IoDownloadOutline /></button>
            <button className='px-3 py-2 max-xl:px-1 max-xl:gap-3 flex gap-5 items-center border-black border-2 max-sm:text-[10px] uppercase font-Mono'>Contact Me <IoMdContact /> </button>
           </div>
           </div>
           <div>
           </div>
        </div>
        <div className='w-1/2 max-xl:w-full h-screen max-xl:h-[550px] flex justify-center rounded-bl-lg bg-black'>
             <div className='mt-8 w-[390px] h-full max-xl:h-[500px] '>
             <img src={MainProfile} className='w-full max-sm:h-full' height={300} alt="MainProfile" />
             </div>
        </div>
    </div>
  )
}

export default Hero