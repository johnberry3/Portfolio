import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='flex justify-between items-center  bg-white'>
      <div>
         <h2 className='italic text-2xl font-semibold'>Logo</h2>
      </div>
      <div>
          <ul className='flex gap-9'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Project</a></li>
              <li><a href="">Contact</a></li>
          </ul>
      </div>
      <div className='flex gap-11 items-center'>
         <a href=""><FaFacebook /></a>
         <a href=""><FaXTwitter /></a>
         <a href=""><FaLinkedinIn /></a>
      </div>
    </div>
  )
}

export default Navbar