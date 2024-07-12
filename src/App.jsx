import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Footer from './sections/Footer'
import About from './sections/About'
import Project from './sections/Project'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div className='bg-black'>
        <section className='px-11 max-sm:px-5 py-4 text-black '>
        <Navbar/>
        </section>
        <section className='mx-11  max-sm:mx-4 min-h-[500px] text-white' id='hero'>
        <Hero/>
        </section>
        <section className='px-11 max-xl:px-5 bg-gray-100  py-11'>
         <About/>
        </section>
        <section className='px-11 bg-zinc-950 py-8 '>
          <Project/>
        </section>
        <section className='px-11 bg-gray-100 py-8 '>
          <Contact/>
        </section>
        <section className='px-11 bg-black pt-8 pb-2'>
        <Footer/>
        </section>
    </div>
  )
}

export default App