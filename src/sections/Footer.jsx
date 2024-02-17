import React from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoPhonePortraitSharp } from "react-icons/io5";


const Footer = () => {
  return (
     <div className='flex justify-between max-xl:flex-col max-xl:gap-6 max-xl:text-center items-center'>
         <div className='flex flex-col gap-6'>
           <h2 className='font-thin text-white uppercase'>Johnberry</h2>
          <p className='text-white'>&copy; 2024. All right reserved, Johnberry</p>
         </div>
         <div className='flex flex-col gap-6'>
              <h2 className='text-white font-thin uppercase'>Keep Connected</h2>
             <div className='flex gap-6'>
             <a href=""><FaFacebook color='white'/></a>
             <a href=""><FaInstagram color='white'/></a>
             <a href=""><FaLinkedin color='white'/></a>
             <a href=""><FaGithub  color='white'/></a>
             <a href=""><IoMailOutline color='white'/></a>
             <a href=""><IoPhonePortraitSharp color='white'/></a>
             </div>
         </div>
     </div>
  )
}

export default Footer