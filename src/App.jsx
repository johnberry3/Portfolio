import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Footer from './sections/Footer'
import About from './sections/About'

const App = () => {
  return (
    <div className='bg-black'>
        <section className='px-11 py-4 text-black '>
        <Navbar/>
        </section>
        <section className='mx-11  max-sm:mx-4 min-h-[500px] text-white'>
        <Hero/>
        </section>
        <section className='px-11 bg-black  py-11'>
         <About/>
        </section>
        <section className='px-11 py-8'>
        <Footer/>
        </section>
    </div>
  )
}

export default App