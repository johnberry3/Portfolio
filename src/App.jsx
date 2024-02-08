import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div>
        <section className='px-11 py-4 text-black '>
        <Navbar/>
        </section>
        <section className='mx-11  min-h-[500px] text-white'>
        <Hero/>
        </section>
        <section className='px-11 py-8'>
        
        </section>
        <section className='px-11 py-8'>
        <Footer/>
        </section>
    </div>
  )
}

export default App