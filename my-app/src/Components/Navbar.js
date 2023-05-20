import React from 'react'
function Navbar() {
  return (
    <div>
      <nav className='navbar' style={{ color: 'red' }}>
        <a className='nav-item' href='#aboutMe' style={{ padding: "10px" }}>About Me</a>
        <a className='nav-item' href='#projects' style={{ padding: "10px" }}>Projects</a>
        <a className='nav-item' href='#technologies' style={{ padding: "10px" }}>Technologies</a>
        <a className='nav-item' href='#Resume' style={{ padding: "10px" }}>Resume</a>
      </nav>
    </div>
  )
}

export default Navbar