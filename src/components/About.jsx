import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"
import { styles } from "../styles"
import { services } from "../constants"
import { Tilt } from "react-tilt"
import SectionWrapper from "../hoc/SectionWrapper"

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="w-[250px]">
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full orange-red-gradient p-[1px] rounded-[20px] shadow-card">
                <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-primary rounded-[20px] py-5 px-12 flex flex-col justify-evenly items-center min-h-[280px]">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)} className="mb-20 text-secondary text-[17px]  leading-[30px]">
                I'm a full-stack web developer based in Italy. I have developed many types of projects in different sectors, from simple to more complex and complete with the use of libraries and frameworks such as React, Next.js, Express, Vue, Tailwind CSS and many more.
                I'm true passionate in all type of technologies and I really love what i do 😁
            </motion.p>

            <div className="flex flex-wrap gap-10 justify-center">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about") 
