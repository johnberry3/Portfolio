import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoPhonePortraitSharp } from "react-icons/io5";


const Footer = () => {
  return (
    <div className=''>
      <h2 className='text-white font-semibold text-3xl mb-7'>Johnberry</h2>
       <div className='text-white grid grid-cols-4 max-xl:grid-cols-1  justify-between items-start'>
       <div className=''>
          <p className='text-sm font-mono italic text-slate-200 mt-11'>I'm always excited to collaborate on interesting projects or discuss opportunities in frontend development. Feel free to reach out to me via my social media handle, and let's bring your ideas to life!</p>
      </div>
      <div>
        <h2 className='uppercase font-semibold mb-5'>Keep Connected</h2>
          <a className='flex gap-4 items-center' href=""><FaFacebook /><h2>Follow on Facebook</h2></a>
          <a className='flex gap-4 items-center' href=""><FaXTwitter /><h2>Follow on twitter</h2></a>
          <a className='flex gap-4 items-center' href=""><FaLinkedin/><h2>Follow on Linkedin</h2></a>
          <a className='flex gap-4 items-center' href=""><FaInstagram /><h2>Follow on instagram</h2></a>

      </div>
      <div>
        <h2 className='uppercase font-semibold mb-5'>Useful links</h2>
          <a className='flex gap-4 items-center' href="">Home</a>
          <a className='flex gap-4 items-center' href="">About</a>
          <a className='flex gap-4 items-center' href="">Projects</a>
          <a className='flex gap-4 items-center' href="">Contact</a>

      </div>
      <div>
        <h2 className='uppercase font-semibold mb-5'>Contact Information</h2>
          <a className='flex gap-4 items-center' href=""><IoPhonePortraitSharp /><h2>+2349121557688</h2></a>
          <a className='flex gap-4 items-center' href=""><IoMailOutline /><h2>jmalachy727@gmail.com</h2></a>
          <a className='flex gap-4 items-center' href=""><FaWhatsappSquare/><h2>+2349121557688</h2></a>

      </div>
       </div>
    </div> 
  )
}

export default Footer