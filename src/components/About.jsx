import { motion } from "motion/react"
import { files } from "../assets/assets"

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y:50 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden bg-[var(--about-page-bg)]"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 text-black">
        About <span className="underline underline-offset-4 decoration-1 under font-light">Us</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 h-auto">
        <motion.img
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x:-100 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
          src={files.aboutusimage}
          alt="image"
          className="w-full sm:w-1/2 max-w-md rounded-4xl shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: false, amount: 0.2 }} 
          className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:p-28">
            <div>
              <p className="text-5xl font-medium text-gray-800">15+</p>
              <p className="font-medium">Projects completed till now</p>
            </div>
            <div>
              <p className="text-5xl font-medium text-gray-800">10+</p>
              <p className="font-medium">Years of Real Estate excellence</p>
            </div>
            <div>
              <p className="text-5xl font-medium text-gray-800">10</p>
              <p className="font-medium">Licensed Real Estate Agents</p>
            </div>
            <div>
              <p className="text-5xl font-medium text-gray-800">$1k</p>
              <p className="font-medium">Average savings for $100k for our buyers</p>
            </div>
          </div>
          <p className="my-10 max-w-2xl leading-relaxed font-bold text-justify text-[17px]">
            With decades of experience in the real estate and construction industry, we
            have earned a reputation for delivering high-quality residential and commercial
            projects that blend aesthetic design with structural excellence. From luxurious
            villas and stylish apartments to modern office spaces, every project we undertake
            is built with precision, care, and a commitment to excellence. Customer satisfaction
            is at the heart of everything we do. We believe in building trust as much as we
            build homes — through transparency, timely delivery, and unparalleled quality.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About


