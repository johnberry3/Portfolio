import React from 'react'
import { AboutInfo } from '../Constant/constant'
import AboutCard from '../components/aboutCard'
import Slider from 'react-slick';
import { Tailwind, Javascript, react, next, Html, Css, Boostrap, Github, Git } from '../assets/image';


const About = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
       autoplaySpeed: 4000,
       responsive: [
        {
          breakpoint: 868, 
          settings: {
            slidesToShow: 1, 
            slidesToScroll: 1,
          }
        }
      ]
      };
  return (
    <div className='text-white'>
        <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-11 items-center justify-items-center'>
        <div className=' text-black font-mono'>
            <h2 className='text-black pb-2  text-3xl uppercase font-bold'>About Me</h2>
            <p className='text-black'>Johnberry, a passionate frontend developer with a knack for crafting beautiful and intuitive user experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and dynamic web applications that delight users and exceed client expectations.</p>
            <p className='mt-5 text-black '>In my professional journey, I've had the opportunity to work on a diverse range of projects, from building interactive e-commerce platforms to developing scalable web applications for startups. I thrive in collaborative environments and am adept at translating client requirements into pixel-perfect designs.</p>
            <p className='mt-5 text-black font-semibold'>I bring 3 years of experience in frontend development, with proficiency in: JAVASCRIPT, REACT, TAILWIND, HTML5, CSS5</p>
        </div> 
        <div>
            <h2 className='text-black font-bold uppercase mb-4'>Stack:</h2>
            <div className='grid grid-cols-3  gap-3 max-xl:w-[300px] w-[400px]'>
                <img src={Javascript} width={100} alt="javscropt" />
                <img src={Html} width={100} alt="javscropt" />
                <img src={Boostrap} width={100} alt="javscropt" />
                <img src={Css} width={100} alt="css" />
                <img src={next} width={100} alt="css" />
                <img src={Tailwind} width={100} alt="" />
                <img src={react} width={100} alt="react" />
                <img src={Github} width={100} alt="Github" />
                <img src={Git} width={100} alt="Git" />
                
            </div>
           </div>
        </div>

        <div className='mt-11'>
            <div >
              <h2 className='text-center font-mono text-3xl text-black uppercase'>My Expertise</h2>
            </div>
        <div className="card-slider-container max-sm:w-[300px] md:w-[600px]  lg:w-[1200px] m-auto  mt-5">
      <Slider {...settings} >
        {AboutInfo.map((info, index)=>(
            <div key={index} >
                <AboutCard info={info}/>
            </div>
        ))}
      </Slider>
    </div>
    </div>
    </div>
  )
}

export default About