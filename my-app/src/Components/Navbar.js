import React from 'react'
// import { Link } from "react-router-dom";
function Navbar({aboutMeRef, projectsRef, technologiesRef}) {
  const handleAnchorClick = (e,ref) => {
    e.preventDefault();
    ref.current.scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <div>
        <nav className='navbar' style={{ color: 'red' }}>
          <a className='nav-item' href='#aboutMe' onClick={(e) => handleAnchorClick(e,aboutMeRef)} style={{ padding: "10px" }}>About Me</a>
          <a className='nav-item' href='#technologies' onClick={(e) => handleAnchorClick(e,technologiesRef)} style={{ padding: "10px" }}>Technologies</a>
          <a className='nav-item' href='#projects' onClick={(e) => handleAnchorClick(e,projectsRef)} style={{ padding: "10px" }}>Projects</a>
          <a className='nav-item' href='#Resume' onClick={(e) => handleAnchorClick(e,this.href)} style={{ padding: "10px" }}>Resume</a>
        </nav>

    </div>
  )
}

export default Navbar