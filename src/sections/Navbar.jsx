import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Fade from 'react-awesome-reveal'


const Navbar = () => {
   const [click, setClick]=useState(false)

   const handleClick = ()=> setClick(!click);

   const content = <>
       <Fade direction="left">
       <ul className='bg-black absolute right-0 justify-center  max-sm:top-[7%] max-xl:top[7%] overflow-hidden w-full min-h-[650px]  z-40 text-center flex flex-col gap-11  items-center'>
          <Link to="hero" spy={true} smooth={true} offset={50} duration={500}><li className='text-2xl  font-mono uppercase'>Home</li></Link>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}><li className='text-2xl  font-mono uppercase'>About</li></Link>
          <Link><li className='text-2xl  font-mono uppercase'>Project</li></Link>
          <Link><li className='text-2xl  font-mono uppercase'>Contact</li></Link>
          <div className='flex gap-11 items-center mt-9'>
      <a href=""><FaGithub color='white'  /></a>
         <a href=""><FaFacebook  color='white'/></a>
         <a href=""><FaXTwitter color='white' /></a>
         <a href=""><FaLinkedinIn color='white' /></a>
      </div>
       </ul>
       </Fade>
      
   </>;

  return (
    <div className='flex justify-between items-center  bg-black text-white'>
      <div>
         <h2 className='italic text-2xl font-semibold'>Johnberry</h2>
      </div>
      <div className='max-xl:hidden'>
          <ul className='flex gap-9'>
              <li className='font-semibold text-lg hover:border-b-2 border-white transition-all ease-in-out '><a href="">Home</a></li>
              <li className='font-semibold text-lg hover:border-b-2 border-white transition-all ease-in-out '><a href="">About</a></li>
              <li className='font-semibold text-lg hover:border-b-2 border-white transition-all ease-in-out '><a href="">Project</a></li>
              <li className='font-semibold text-lg hover:border-b-2 border-white transition-all ease-in-out '><a href="">Contact</a></li>
          </ul>
      </div>
      <div className='flex gap-11 items-center max-xl:hidden'>
      <a href="https://github.com/johnberry3" target='_blank'><FaGithub color='white'  /></a>
         <a href=""><FaFacebook  color='white'/></a>
         <a href="https://twitter.com/Malachy5John" target='_blank'><FaXTwitter color='white' /></a>
         <a href="https://www.linkedin.com/feed/" target='_blank'><FaLinkedinIn color='white' /></a>
      </div>
      <div className='hidden max-lg:block'>
          {click && content}
      </div>
      <div className='menu-bar hidden max-lg:block'>
          {click ? <AiOutlineClose color='white' fontSize={30} onClick={handleClick} /> : <RiMenu3Fill color='white'  fontSize={30} onClick={handleClick}/>}
      </div>
    </div>
  );
};

export default Navbar