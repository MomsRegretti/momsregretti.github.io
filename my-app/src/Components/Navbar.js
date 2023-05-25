import React from 'react'
// import { Link } from "react-router-dom";
function Navbar() {
  const handleAnchorClick = (e,href) => {
    e.preventDefault();
    href.scrollIntoView({
      behavior : 'smooth'
    })
  }
  return (
    <div>
        <nav className='navbar' style={{ color: 'red' }}>
          <a className='nav-item' href='#aboutMe' onClick={handleAnchorClick()} style={{ padding: "10px" }}>About Me</a>
          <a className='nav-item' href='#technologies' onClick={handleAnchorClick} style={{ padding: "10px" }}>Technologies</a>
          <a className='nav-item' href='#projects' onClick={handleAnchorClick} style={{ padding: "10px" }}>Projects</a>
          <a className='nav-item' href='#Resume' onClick={handleAnchorClick} style={{ padding: "10px" }}>Resume</a>
        </nav>

    </div>
  )
}

export default Navbar