import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    
    const [result, setResult] = useState("")

    const handleSubmit = async(event) =>{
        event.preventDefault()
        setResult("sending...")

        const formData = new FormData.append()
    } 

  return (
    <div className="Contact" id='contact'>
      <div className="flex p-11 max-xl:p-3 items-center max-xl:flex-col max-xl:gap-5 justify-center">
      <div className="contact-col basis-[41%] max-xl:text-center text-black">
      <p className='text-md font-semibold '>GET IN TOUCH</p>
      <h2 className='text-4xl font-bold'>CONTACT ME</h2>
      </div>
      <div className="contact-col flex flex-col basis-[41%] ]">
              <form onSubmit={handleSubmit}>
                  <label htmlFor="">Your name</label>
                  <input type="text" name='name' placeholder='Enter Your name' required />
                  <label htmlFor="">Phone Number</label>
                  <input type="tel" name="Phone Number" id="" placeholder='Enter Your phone number' required />
                  <label htmlFor="">Write your messages here</label>
                  <textarea name="message" rows="6" placeholder='Enter your message'></textarea>
                  <button type='submit' className='submitBtn bg-black text-white'>Submit</button>
              </form>
              <span>{result}</span>
         </div>
      </div>
    </div>
  );
}

export default Contact