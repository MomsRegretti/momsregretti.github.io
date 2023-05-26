import React from 'react'
import Category from './Category'
function Technologies({ technologies, technologiesRef }) {
  const categories = [
    'Web Fundamentals',
    'Version Control',
    'Frontend Frameworks',
    'Backend Languages/Frameworks',
    'Programming Languages',
    'Web Design'
  ]
  const renderCategoryCards = categories.map((category) => {
    return (
      <Category category ={category} technologies={technologies}/>
    )
  })

  // const renderTechnologies = technologies.map((tech) => {
  //   return (
  //     <Technology name = {tech.name} link = {tech.link}/>
  //   )
  // })
  return (
    <div ref={technologiesRef} id='technologies'>
      <h1 style={{ paddingTop: '50px' }}>These are the technologies I've learned and implemented in my projects/learning!</h1>
      <div id='technologyContainer' className='technology-container' style={{}}>
        {renderCategoryCards}
      </div>
    </div>
  )
}

export default Technologies