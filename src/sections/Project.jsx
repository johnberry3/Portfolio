import React from 'react'
import Edusity from '../../src/assets/image/Edusity.png'
import { Github, prescripto, still } from '../assets/image'
import { project, project_2, Tomato } from '../assets/image'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../sections/project.css"


const Project = () => {
  return (
    <div className='flex flex-col gap-10' id='project'>
      <h2 className='text-3xl font-medium uppercase  text-black'>My Projects</h2>
        <p className='text-sm  text-gray-500'>Explore my various project built by me</p>
        <div className='px-[10%] w-full   grid grid-cols-1 gap-3 md:grid-cols-3 '>
            <div className='w-[300px] shadow'>
                <img className='w-full' src={Tomato} alt="" />
                <div className='px-3 pb-3 pt-6'>
                   <p className='font-bold text-lg'>MERN STACK(E-Commerce)</p>
                <p className='text-gray-500 text-sm font-medium'>Food delivery website</p>
                <div className='flex gap-3 mt-3'>
                   <a target='_blank' href="https://tomatoapp-frontend.onrender.com">
                     <FaExternalLinkAlt/>
                   </a>
                   <a target='_blank' href="https://github.com/johnberry3/TomatoAPP"> <FaGithub/></a>
                  
                </div>
                </div>
            </div>

            <div className='w-[300px] shadow'>
                <img className='w-full' src={still} alt="" />
                <div className='px-3 pb-3 pt-6'>
                   <p className='font-bold text-lg'>MERN STACK(STILLMASTER)</p>
                <p className='text-gray-500 text-sm font-medium'>Bakery Ecommerce webapp</p>
                <div className='flex gap-3 mt-3'>
                  <a target='_blank' href="https://green-cart-inky.vercel.app/"><FaExternalLinkAlt/></a>
                   <a target='_blank' href="https://github.com/johnberry3/GreenCart"><FaGithub/></a>
                </div>
                </div>
            </div>

            <div className='w-[300px] shadow'>
                <img className='w-full' src={prescripto} alt="" />
                <div className='px-3 pb-3 pt-6'>
                   <p className='font-bold text-lg'>MERN STACK(PRESCRIPTO)</p>
                <p className='text-gray-500 text-sm font-medium'>Doctors Appointment booking App</p>
                <div className='flex gap-3 mt-3'>
                  <a target='_blank' href="">
                      <FaExternalLinkAlt width={20}/>
                  </a>
      
                  <a target='_blank' href="https://github.com/johnberry3/prescripto">
                      <FaGithub/>
                  </a>
                </div>
                </div>
            </div>
        </div>
        <a target='_blank' className='m-auto py-1 px-2 text-center bg-black rounded-full text-white w-[100px]' href="https://github.com/johnberry3">
           See More
        </a>
    </div>
  )
}

export default Project