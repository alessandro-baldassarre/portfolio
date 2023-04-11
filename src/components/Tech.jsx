import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { technologies } from '../constants'
import Ball from './canvas/Ball'

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technologie) => (
                <div key={technologie.name} className="w-28 h-28">
                    <Ball icon={technologie.icon} />
                </div>
            ))}
        </div>
    )
}

export default SectionWrapper(Tech, "")
