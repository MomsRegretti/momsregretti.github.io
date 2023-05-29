import React from 'react'
import Technology from './Technology'
import {motion} from 'framer-motion'
function Category({ category, technologies }) {
    const renderTechnologies = technologies.filter(element => element.category === category).map((tech) => {
        return (
            <Technology name={tech.name} link={tech.link} />
        )
    })

    return (
        <motion.div layout className='category-card' style={{position:'relative'}}>
            <h2>
                {category}
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                {renderTechnologies}
            </div>
        </motion.div>
    )
}

export default Category