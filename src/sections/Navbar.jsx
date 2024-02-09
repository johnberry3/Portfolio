import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";


const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-white'>
      <div>
         <h2 className='italic text-2xl font-semibold'>Johnberry</h2>
      </div>
      <div className='max-xl:hidden'>
          <ul className='flex gap-9'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Project</a></li>
              <li><a href="">Contact</a></li>
          </ul>
      </div>
      <div className='flex gap-11 items-center max-xl:hidden'>
      <a href=""><FaGithub color='white'  /></a>
         <a href=""><FaFacebook  color='white'/></a>
         <a href=""><FaXTwitter color='white' /></a>
         <a href=""><FaLinkedinIn color='white' /></a>
      </div>
      <div className='menu-bar hidden max-xl:block'>
          <RiMenu3Fill color='white'  fontSize={30}/>
      </div>
    </div>
  )
}

export default Navbar