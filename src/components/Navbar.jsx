import {files} from '../assets/assets.jsx'
import { useEffect, useState } from 'react'
import Mobilenavbar from './Mobilenavbar.jsx'
import { motion } from "motion/react"

const Navbar = () => {

    const [hamburger, setHamburger] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastscrollY, setLastscrollY] = useState(0)

    useEffect (() => {
      const HandleScroll = () => {
        if (window.scrollY > lastscrollY) {
          setShowNavbar(false)
        }else {
          setShowNavbar(true)
        }

        setLastscrollY(window.scrollY)
      }

      window.addEventListener('scroll', HandleScroll)
      return () => window.removeEventListener('scroll', HandleScroll)
    }, [lastscrollY])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <motion.div 
        initial = {{
          opacity:0, y:-100
        }}
        transition={{
          duration: 2,
          ease: 'easeOut',
        }}
        animate={{
          y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0
        }}
        viewport ={{
          once:true
        }}
      className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <span className='flex items-center gap-1 font-bold shadow transition hover:scale-120'><img src={files.logo} alt="" className='h-6 w-auto rounded-full py-1' />Build It - Real Estate</span>
        <ul 
         className='hidden md:flex gap-8 text-white'>
            <a href="#Header" className='hover:transition transform duration-300 hover:-translate-y-1 hover:scale-y-100 cursor-pointer'>Home</a>
            <a href="#About" className='transition transform duration-300 hover:-translate-y-1 hover:scale-y-100 cursor-pointer'>About Us</a>
            <a href="#Projects" className='transition transform duration-300 hover:-translate-y-1 hover:scale-y-100 cursor-pointer'>Projects</a>
            <a href="#Reviews" className='transition transform duration-300 hover:-translate-y-1 hover:scale-y-100 cursor-pointer'>Reviews</a>
        </ul>
        <button className='hidden md:block px-8 py-2 rounded-full bg-transparent border-1 border-white text-white hover:bg-[var(--signup-bg-color)] hover:text-black transition duration-400 cursor-pointer'>Sign up</button>
        <img src={files.hamburger} alt="" className='md:hidden w-7 cursor-pointer' onClick={() => setHamburger(true)}/>
      </motion.div>
        <Mobilenavbar hamburger = {hamburger} setHamburger = {setHamburger}  />

    </div>
    
    
  )
}

export default Navbar
