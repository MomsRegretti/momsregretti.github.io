import React from 'react'

function Navbar() {
  return (
    <div>
      <header>
        <div>
        </div>
        <div style={{color : 'red'}}>
            <a href='#aboutMe' style={{padding: "10px"}}>About Me</a>
            <a href= '#projects' style={{padding: "10px"}}>Projects</a>
            <a href= '#technologies' style={{padding: "10px"}}>Technologies</a>
            <a href= '#Resume' style={{padding: "10px"}}>Resume</a>
        </div>
      </header>
    </div>
  )
}

export default Navbar