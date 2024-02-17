import React from 'react'
import { Github } from '../assets/image'

const Project = () => {
  return (
    <div className='text-white flex flex-col gap-10'>
      <h2 className='text-3xl font-bold uppercase  text-white'>My Projects</h2>
        <div className='w-[1100px] max-xl:w-full flex flex-col gap-8 justify-center m-auto max-xl-m-auto'>
            <div className='flex max-xl:flex-col justify-between items-center'>
               <div>
                  <h2 className='text-4xl font-bold '>Lorem ipsum dolor, sit amet</h2>
                  <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               </div>
                 <img src={Github} className='w-[600px]  h-[300px]' alt="Github" />
            </div>

            <div className='flex max-xl:flex-col flex-row-reverse justify-between items-center'>
               <div>
                  <h2 className='text-4xl font-bold '>Lorem ipsum dolor, sit amet</h2>
                  <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               </div>
               <img src={Github} className='w-[600px] h-[300px]' alt="Github" />
            </div>

            <div className='flex max-xl:flex-col justify-between items-center'>
               <div>
                  <h2 className='text-4xl font-bold '>Lorem ipsum dolor, sit amet</h2>
                  <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               </div>
               <img src={Github} className='w-[600px] h-[300px]' alt="Github" />
            </div>
        </div>
    </div>
  )
}

export default Project