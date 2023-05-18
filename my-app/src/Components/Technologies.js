import React from 'react'
import Technology from './Technology'
function Technologies({technologies}) {

  const renderTechnologies = technologies.map((tech) => {
    return (
      <Technology name = {tech.name} link = {tech.link}/>
    )
  })
  
  return (
    <div>
      <h1>These are the technologies I've learned and implemented in my projects/learning!</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {renderTechnologies}
      </div>
    </div>
  )
}

export default Technologies