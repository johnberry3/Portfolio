import React from 'react'
import { Github } from '../assets/image'
import { project, project_2 } from '../assets/image'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div className='text-white flex flex-col gap-10'>
      <h2 className='text-3xl font-bold uppercase  text-white'>My Projects</h2>
        <div className='w-[1100px] max-xl:w-full flex flex-col gap-8 justify-center m-auto max-xl-m-auto'>
            <div className='flex max-xl:flex-col max-xl:flex-col-reverse justify-between items-center'>
               <div>
                  <h2 className='text-4xl font-bold max-xl:text-3xl '>Restaurant's guide website</h2>
                  <p className='text-sm font-semibold mt-4 leading-6'>A Restaurant website for building healthy food diets, Built with , REACT.JS, TAILWIND CSS with others react libraries</p>
                   <div className='flex gap-5 pt-4 pl-3 '>
                      <a href="https://restaurant-tcj.netlify.app/#" target='_blank'><FaExternalLinkAlt fontSize={30} color='gray' className='cursor-pointer' /></a>
                      <a href="https://github.com/johnberry3/restaurantApp" target='_blank'><FaGithub fontSize={30} color='gray' className='cursor-pointer' /></a>
                   </div>
               </div>
                 <img src={project} className='w-[600px]  h-[300px]' alt="Github" />
            </div>

            <div className='flex max-xl:flex-col gap-8 flex-row-reverse max-xl:flex-col-reverse justify-between items-center'>
               <div>
                  <h2 className='text-4xl font-bold '>E-COMMERCE website(Shopper)</h2>
                  <p className='text-sm font-semibold mt-4 leading-6'>A clothing brand E-commerce website for the sales of various from all Gender including todlers, Built with REACTJS, TAILWIND </p>
                  <div className='flex gap-5 pt-4 pl-3 '>
                      <a href="https://restaurant-tcj.netlify.app/#" target='_blank'><FaExternalLinkAlt fontSize={30} color='gray' className='cursor-pointer' /></a>
                      <a href="https://github.com/johnberry3/restaurantApp" target='_blank'><FaGithub fontSize={30} color='gray' className='cursor-pointer' /></a>
                   </div>
               </div>
               <img src={project_2} className='w-[600px] h-[300px]' alt="Github" />
            </div>

            <div className='flex max-xl:flex-col max-xl:flex-col-reverse justify-between items-center'>
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