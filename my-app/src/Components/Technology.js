import React from 'react'

function Technology({ name, link }) {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <div className='technologyCard'>
        <img className='technology' src={link} alt={name} />
        <p>{name}</p>
      </div>
      <div className='expanded-tech'>
        hello
      </div>
    </div>
  )
}

export default Technology