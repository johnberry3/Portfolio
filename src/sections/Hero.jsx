import React from 'react'
import { MainProfile } from '../assets/image'


const Hero = () => {
  return (
    <div className='flex'>
        <div className='w-1/2 h-screen px-11 bg-gray-300 text-black'>
           <div className='top-[40%] relative'>
           <h2 className='text-5xl font-bold  '>Hello! I'm Johnberry</h2>
            <h2 className='text-3xl font-semibold mt-4'>I am a passionate <span className='font-bold'>Frontend Developer</span></h2>
            <p className='mt-4 text-justify'>As a frontend developer, I specialize in crafting delightful user experiences and bringing designs to life through code. With a keen eye for design aesthetics and a knack for problem-solving, I thrive on turning ideas into interactive and responsive web applications.</p>
           </div>
        </div>
        <div className='w-1/2 h-screen flex justify-center bg-black'>
             <div className='mt-9'>
             <img src={MainProfile} width={400} height={100} alt="MainProfile" />
             </div>
        </div>
    </div>
  )
}

export default Hero