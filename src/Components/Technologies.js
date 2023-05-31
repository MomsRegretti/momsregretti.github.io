import React from 'react'
import Category from './Category'
function Technologies({ technologies, technologiesRef }) {
  const categories = [
    'Programming Languages',
    'Frontend Frameworks',
    'Backend Languages/Frameworks',
    'Version Control',
    'Web Fundamentals',
    'Web Design'
  ]
  const render1CategoryCards = categories.slice(0, 3).map((category) => {
    return (
      <Category category={category} technologies={technologies} />
    )
  })

  const render2CategoryCards = categories.slice(3).map((category) => {
    return (
      <Category category={category} technologies={technologies} />
    )
  })

  return (
    <div ref={technologiesRef} id='technologies'>
      <h1 style={{ paddingTop: '50px' }}>These are the technologies I've learned and implemented in my projects/learning!</h1>
      <h4>Click a technology to learn more!</h4>
      <div id='technologyContainer' className='technology-container'>
        <div className='category-containter'>{render1CategoryCards}</div>
        <div className='category-containter'>{render2CategoryCards}</div>
      </div>
    </div>
  )
}

export default Technologies