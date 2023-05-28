import './App.css';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
// import Home from './Components/Home';
import { React, useRef } from "react"
import Technologies from './Components/Technologies'
import Projects from './Components/Projects'
function App() {
  const aboutMeRef = useRef(null)
  const technologiesRef = useRef(null)
  const projectsRef = useRef(null)
  const technologies = [
    { name: 'JavaScript', link: 'https://cdn.cdnlogo.com/logos/j/69/javascript.svg', category: 'Web Fundamentals', details: []},
    { name: 'CSS', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png', category: 'Web Fundamentals', details: [] },
    { name: 'HTML', link: 'https://cdn.worldvectorlogo.com/logos/html-1.svg', category: 'Web Fundamentals', details: [] },
    { name: 'Figma', link: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', category: 'Web Design', details: [] },
    { name: 'Python', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png', category: 'Programming Languages', details: [] },
    { name: 'Rails', link: 'https://miro.medium.com/v2/resize:fit:800/1*eRErB-NQYgwF52eUUK_kkQ.png', category: 'Backend Languages/Frameworks', details: [] },
    { name: 'R', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png', category: 'Programming Languages', details: [] },
    { name: 'Node', link: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png', category: 'Backend Languages/Frameworks', details: [] },
    { name: 'React', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', category: 'Frontend Frameworks', details: [] },
    { name: 'Github', link: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', category: 'Version Control', details: [''] }
  ]
  return (
    <body>
      <div className="App"> 
        <Navbar aboutMeRef={aboutMeRef} technologiesRef={technologiesRef} projectsRef = {projectsRef}/>
        <AboutMe aboutMeRef={aboutMeRef}/>
        <Technologies technologiesRef={technologiesRef} technologies={technologies} />
        <Projects projectsRef = {projectsRef}/>
      </div>
    </body>
  );
}

export default App;
