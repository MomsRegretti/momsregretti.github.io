import React from 'react'
// import { Link } from "react-router-dom";
function Navbar({aboutMeRef, projectsRef, technologiesRef, footerRef}) {
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
          <a className='nav-item' href='#footer'style={{ padding: "10px" }} onClick={(e) => handleAnchorClick(e,footerRef)}>Contact</a>
          <a className='nav-item' href="https://docs.google.com/document/d/10hVPzONsX7C_bnAUKtXxn8rRzQ7iyCvxCTIX9ICHFGQ/edit?usp=sharing" target="_blank" rel="noreferrer" onClick={(e) => handleAnchorClick(e,this.href)} style={{ padding: "10px" }}>Resume</a>
        </nav>

    </div>
  )
}

export default Navbar