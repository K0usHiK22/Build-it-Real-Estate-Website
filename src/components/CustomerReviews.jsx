import { files, reviewsData } from "../assets/assets"
import { useState } from "react"
import { motion } from "motion/react"

const CustomerReviews = () => {
    const [expandedIndex, setExpandedIndex] = useState(null)

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y:50 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}

         className="mx-auto py-4 pt-15 px-6 md:px20 lg:px-32 mt-2 w-full overflow-hidden bg-[var(--Reviews-page-bg)]" id="Reviews">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 text-center">Customer <span className="underline underline-offset-4 decoration-1 under font-light">Reviews</span></h1>
            <p className="text-center font-medium text-[var(--subHeading-text-color)] mb-8 mx-w-80 mx-auto">Customers who found their home with us</p>

            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y:50 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}

             className="flex flex-wrap justify-center gap-10 items-start">
                {reviewsData.map((review, index) => (
                    <div key={index} className="max-w-[240px] border shadow-lg rounded px-5 py-7 text-center bg-[var(--cards-bg)]">
                        <img src={review.Image} alt="image" className="w-100 h-60 rounded-3xl mx-auto mb-3 shadow-2xl filter grayscale" />
                        <h2 className="text-xl text-[var(--Reviews-text-color)] font-medium">{review.name}</h2>
                        <p className="text-gray-700 mb-4 text-sm">{review.title}</p>
                        <div className="flex justify-center gap-1 text-red-500 mb-4">
                            {Array.from({ length: review.rating }, (item, index) => (
                                <img key={index} src={files.star} alt="" />
                            ))}
                        </div>
                        <div className={`text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === index ? "max-h-[500px]" : "max-h-20"}`}>
                            <p className="text-sm">{review.text}</p>
                        </div>
                        <button className="mt-2 text-blue-600 text-sm hover:underline" onClick={() => toggleExpand(index)}>
                            {expandedIndex === index ? "Read Less" : "Read More"}
                        </button>
                        
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default CustomerReviews
