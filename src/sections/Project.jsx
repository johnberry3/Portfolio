import React from 'react'
import Edusity from '../../src/assets/image/Edusity.png'
import { Github } from '../assets/image'
import { project, project_2, Tomato } from '../assets/image'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../sections/project.css"


const Project = () => {
  return (
    <div className='text-white flex flex-col gap-10' id='project'>
      <h2 className='text-3xl font-bold uppercase  text-white'>My Projects</h2>
        <div className='w-[1100px] max-xl:w-full flex flex-col gap-8 justify-center m-auto max-xl-m-auto'>
            <div className='flex max-xl:flex-col max-xl:flex-col-reverse justify-between items-center'>
               <div>
                  <h2 className='text-4xl font-bold max-xl:text-3xl '>RESTAURANT GUIDE APPLICATION</h2>
                  <p className='text-sm font-semibold mt-4 leading-6'>Built with REACT JS, TAILWIND CSS</p>
                   <div className='flex gap-5 pt-4 pl-3 '>
                      <a href="https://restaurant-tcj.netlify.app/#" target='_blank'><FaExternalLinkAlt fontSize={30} color='gray' className='cursor-pointer' /></a>
                      <a href="https://github.com/johnberry3/restaurantApp" target='_blank'><FaGithub fontSize={30} color='gray' className='cursor-pointer' /></a>
                   </div>
               </div>
                 <img src={project} className='edusity' alt="Github" />
            </div>

            <div className='flex max-xl:flex-col gap-8 flex-row-reverse max-xl:flex-col-reverse justify-between items-center'>
               <div>
                  <h2 className='text-4xl font-bold '>FOOD DELIVERY APP(FULLSTACK APPLLICATION)</h2>
                  <p className='text-sm font-semibold mt-4 leading-6'>Built with REACT JS, EXPRESS JS, MONGODB</p>
                  <div className='flex gap-5 pt-4 pl-3 '>
                      <a href="https://tomatoapp-frontend.onrender.com/" target='_blank'><FaExternalLinkAlt fontSize={30} color='gray' className='cursor-pointer' /></a>
                      <a href="https://github.com/johnberry3/TomatoAPP" target='_blank'><FaGithub fontSize={30} color='gray' className='cursor-pointer' /></a>
                   </div>
               </div>
               <img src={Tomato} className='edusity' alt="Github" />
            </div>

            <div className='flex max-xl:flex-col max-xl:flex-col-reverse justify-between items-center'>
               <div>
                  <h2 className='text-4xl font-bold '>SCHOOL APPLICATION</h2>
                  <p className='text-sm'>Built with REACT JS, TAILWIND CSS</p>
                  <div className='flex gap-5 pt-4 pl-3 '>
                      <a href="https://edusitylife.netlify.app/" target='_blank'><FaExternalLinkAlt fontSize={30} color='gray' className='cursor-pointer' /></a>
                      <a href="https://github.com/johnberry3/Edusity" target='_blank'><FaGithub fontSize={30} color='gray' className='cursor-pointer' /></a>
                   </div>
               </div>
               <img src={Edusity} className=' edusity' alt="Github" />
            </div>
        </div>
    </div>
  )
}

export default Project