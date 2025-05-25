import { useEffect, useRef, useState } from "react"
import { files } from "../assets/assets"
import Navbar from "./navbar"
import { motion } from "motion/react"


const Header = () => {

    const [showContent, setShowContent] = useState(true)
    const LastScrollY = useRef(0)

    useEffect (() => {
        const HandleScroll = () => {
            const currentscrollY = window.scrollY
            if (currentscrollY > LastScrollY.current + 200) {
                setShowContent(false)
                LastScrollY.current = currentscrollY
            } else if (currentscrollY < LastScrollY.current - 200) {
                setShowContent(true)
                LastScrollY.current = currentscrollY
            }
        }
        window.addEventListener("scroll", HandleScroll)
        return () => window.removeEventListener("scroll", HandleScroll);
    }, [])

    return (
        <div className="min-h-screen mb-2 bg-cover bg-center flex items-center w-full overflow-hidden filter grayscale-100" style={{ backgroundImage: `url(${files.homepageimage})` }} id="Header">
            <Navbar />
            <motion.div
             initial={{ opacity: 0, x: -100 }}
             animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : -100 }}
             transition={{ duration: 1.5, ease: 'easeOut' }}
             viewport={{once:false, amount: 0.2}}
            className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
                <h2 className="text-5xl sm:text-6xl text-left md:text-[78px] max-w-3xl font-semibold pb-10 pt-20">Where your Vision Meets Reality </h2>
                <div className="space-x-8 mt-5 text-left">
                    <a href="#Contact" className="border border-white px-8 py-3 rounded transition duration-400 hover:bg-[var(--contactus-bg-color)] hover:text-black">Contact Us</a>
                </div>
            </motion.div>
             
        </div>
    )
}

export default Header
