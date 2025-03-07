import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Fade from 'react-awesome-reveal'
import "../sections/Navbar.css"


const Navbar = () => {
   const [click, setClick]=useState(false)
   const [menu, setMenu] = useState("")
   const [ul, setUL] = useState(false)

   const handleClick = ()=> setClick(!click);

   const content = <>
       <Fade direction="left">
       <ul className='bg-black absolute right-0 justify-center  max-sm:top-[7%] max-xl:top[7%] overflow-hidden w-full min-h-[650px]  z-40 text-center flex flex-col gap-11  items-center'>
       <Link to="/" onClick={()=>{
         setMenu("Home");

       }} className={menu==="Home"?"active":""}>Home</Link>
              <a href="#about" onClick={()=> setMenu("about")} className={menu==="about"?"active":""}>About</a>
              <a href="#project" onClick={()=> setMenu("project")} className={menu==="project"?"active":""}>Project</a>
              <a href="#contact" onClick={()=> setMenu("contact")} className={menu==="contact"?"active":""}>Contact</a>
          <div className='flex gap-11 items-center mt-9'>
      <a href="https://github.com/johnberry3"><FaGithub color='white'  /></a>
         <a href=""><FaFacebook  color='white'/></a>
         <a href="https://twitter.com/Malachy5John"><FaXTwitter color='white' /></a>
         <a href="https://www.linkedin.com/feed/"><FaLinkedinIn color='white' /></a>
      </div>
       </ul>
       </Fade>
      
   </>;

  return (
    <div className='flex justify-between items-center  bg-black text-white'>
      <div>
         <h2 className='italic text-2xl font-semibold'>JM</h2>
      </div>
      <div className='max-xl:hidden'>
          <ul className='flex gap-9'>
              <Link to="/" onClick={()=> setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
              <a href="#about" onClick={()=> setMenu("about")} className={menu==="about"?"active":""}>About</a>
              <a href="#project" onClick={()=> setMenu("project")} className={menu==="project"?"active":""}>Project</a>
              <a href="#contact" onClick={()=> setMenu("contact")} className={menu==="contact"?"active":""}>Contact</a>
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