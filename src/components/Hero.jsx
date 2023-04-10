import React from 'react'
import { styles } from '../styles'
import Computers from './canvas/Computers'

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#FF6700]" />
                    <div className="w-1 sm:h-52 xl:h-60 h-32 orange-gradient" />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#FF6700]">Alessandro</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        a full-stack web developer.
                    </p>
                </div>
            </div>

            <Computers />

        </section>
    )
}

export default Hero
