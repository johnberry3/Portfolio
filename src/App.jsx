import React from 'react'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div>
        <section className='px-8 py-4 bg-black text-white '>
        <Navbar/>
        </section>
        <section className='px-8 py-8 bg-gradient-to-r from-gray-400 via-gray-700 to-black min-h-[500px] text-white'>
        <Navbar/>
        </section>
        <section className='px-8 py-8'>
        <Navbar/>
        </section>
        <section className='px-8 py-8'>
        <Footer/>
        </section>
    </div>
  )
}

export default App