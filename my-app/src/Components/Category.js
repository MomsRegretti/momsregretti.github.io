import React from 'react'
import Technology from './Technology'
function Category({ category, technologies }) {
    const renderTechnologies = technologies.filter(element => element.category === category).map((tech) => {
        return (
            <Technology name={tech.name} link={tech.link} />
        )
    })

    return (
        <div className='category-card'>
            <h2>
                {category}
            </h2>
            <div style={{display:'flex'}}>
                {renderTechnologies}
            </div>
        </div>
    )
}

export default Category