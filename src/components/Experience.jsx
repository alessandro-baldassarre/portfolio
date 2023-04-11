import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"

import "react-vertical-timeline-component/style.min.css"
import { styles } from "../styles"
import SectionWrapper from "../hoc/SectionWrapper"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { experiences } from "../constants"

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement contentStyle={{ background: "#050816", color: "#fff" }} contentArrowStyle={{ borderRight: "7px solid #FF6700" }} date={experience.date}
            icon={<div className="w-full h-full grid place-content-center">
                <img src={experience.icon} alt={experience.company_name} className="object-contain p-3" />
            </div>}
            iconStyle={{ background: experience.iconBg }}>
            <div className="mb-5">
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
            </div>

            <ul className="list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    )
}


const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="mb-20">
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </motion.div>

            <div className="flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>

            </div>
        </>
    )
}

export default SectionWrapper(Experience, "work")
