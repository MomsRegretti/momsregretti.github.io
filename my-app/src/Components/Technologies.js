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

  return (
    <div ref={technologiesRef} id='technologies'>
      <h1 style={{ paddingTop: '50px' }}>These are the technologies I've learned and implemented in my projects/learning!</h1>
      <h4>Hover a technology to learn more!</h4>
      <div id='technologyContainer' className='technology-container' style={{}}>
        {renderCategoryCards}
      </div>
    </div>
  )
}

export default Technologies