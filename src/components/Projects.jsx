import { Data, files } from "../assets/assets";
import { motion } from "motion/react";

const Projects = ({ currentIndex, cardstoShow, HandleNext, HandlePrevious }) => {


    return (
        <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
 
        className="mx-auto py-4 pt-20 px-6 md:px-20 lg:px-25 mt-2 w-full overflow-hidden bg-[var(--Project-page-bg)]" id="Projects">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center">
                Our best <span className="underline underline-offset-4 decoration-1 under font-light">Projects</span>
            </h1>
            <p className="text-center font-medium text-[var(--subHeading-text-color)] mb-8 mx-w-80 mx-auto">Explore our Greatness</p>

            <div className="flex justify-end items-center mb-8">
                <button className="p-3 transition duration-300 cursor-pointer hover:bg-[var(--Project-arrow)] rounded mr-2" aria-label="Previous" onClick={HandlePrevious}>
                    <img src={files.leftarrow} alt="last" />
                </button>
                <button className="p-3 transition duration-300 cursor-pointer hover:bg-[var(--Project-arrow)] rounded mr-2" aria-label="Next" onClick={HandleNext}>
                    <img src={files.rightarrow} alt="next" />
                </button>
            </div>

            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
                className="overflow-hidden">
                <div
                    className="flex gap-8 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardstoShow}%)` }}
                >
                    {Data.map((project, index) => (
                        <div key={index} className={`relative flex-shrink-0 flex flex-col ${cardstoShow === 1 ? "w-full" : cardstoShow === 2 ? "w-1/2" : "w-1/3"}`}>
                            <img src={project.Image} alt={project.title} className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg mb-2" />
                            <div className="absolute right-0 left-0 bottom-0 flex justify-center">
                                <div className="inline-block bg-white w-3/4 px-5 py-2 shadow-md">
                                    <h2 className="text-xl font-semibold text-black">{project.title}</h2>
                                    <p className="text-[var(--subHeading-text-color)] text-sm">{project.price} <span>{project.location}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Projects;
