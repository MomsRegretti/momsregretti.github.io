import React from 'react'

function Technology({name,link}) {
  return (
    <div className='technologyCard'>
        <img className ='technology' src={link} alt={name}/>
        <p>{name}</p>
    </div>
  )
}

export default Technology