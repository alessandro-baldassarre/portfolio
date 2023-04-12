import { styles } from '../styles'
import { motion } from "framer-motion"
import GeometriesCanvas from './canvas/Geometries'

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} absolute inset-0 top-[80px] sm:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#FF6700]" />
                    <div className="w-1 sm:h-52 xl:h-50 h-32 orange-gradient" />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#FF6700]">Alessandro</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        a full-stack web developer.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-5 right-0 w-full md:w-[70%] h-full">
                <GeometriesCanvas />
            </div>


            <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center" >
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
                        <motion.div animate={{ y: [0, 24, 0], }} transition={{ duration: 2, repeat: Infinity, repeatType: "loop", }} className='w-3 h-3 rounded-full bg-white mb-1' />
                    </div>
                </a>
            </div>

        </section>
    )
}

export default Hero
