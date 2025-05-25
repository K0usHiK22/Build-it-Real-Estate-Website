import React from 'react'
import { files } from '../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-10 lg:px-20 w-full overflow-hidden bg-[var(--footer-bg)]' id='Footer'>
            <div className='container footer-layout mx-auto flex flex-col sm:flex-row md:flex-row justify-between items-center'>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-3 text-[var(--footer-text-color)]'>
                        <a href="#Header" className='hover:text-white transition transform duration-300 hover:translate-x-2'>Home</a>
                        <a href="#About" className='hover:text-white transition transform duration-300 hover:translate-x-2'>About us</a>
                        <a href="#Projects" className='hover:text-white transition transform duration-300 hover:translate-x-2'>Projects</a>
                        <a href="#Contact" className='hover:text-white transition transform duration-300 hover:translate-x-2'>Contact us</a>
                        <a href="#" className='hover:text-white transition transform duration-300 hover:translate-x-2'>Privacy Policy</a>
                    </ul>
                </div>
                <div className='w-full  md:w-1/3 mb-8 md:mb-0 md:ml-0 sm:ml-20'>
                    <h3 className='text-white text-lg font-bold mb-4'>Reach us at</h3>
                    <ul className='flex gap-3'>
                        <img src={files.insta} alt="instagram" className='filter invert transition transform duration-300 hover:-translate-y-1 hover:scale-y-100 cursor-pointer' />
                        <img src={files.twitter} alt="X" className='filter invert transition transform duration-300 hover:-translate-y-1 hover:scale-y-100 cursor-pointer'/>
                        <img src={files.facebook} alt="facebook" className='filter invert transition transform duration-300 hover:-translate-y-1 hover:scale-y-100 cursor-pointer'/>
                    </ul>
                </div>
            </div>
            <div className='border-t-1 border-gray-600 py-5 mt-10 text-center text-gray-500'>
                Copyright 2025 © Build-It Real Estate. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
