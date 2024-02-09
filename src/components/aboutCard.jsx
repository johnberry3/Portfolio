import React from 'react'

const AboutCard = ({info}) => {
  return (
    <div className=' bg-black px-4 py-4 pb-2 h-[230px] text-center max-sm:w-full rounded-lg  w-[350px] shadow-white text-xl'>
       <h2 className='uppercase text-gray-300 font-bold text-xl'>{info.title}</h2>
       <p className=' mt-5 text-sm leading-7 text-gray-300 font-mono italic'>{info.text}</p>
    </div>
  )
}

export default AboutCard