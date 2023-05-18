import './App.css';
import Navbar from './Components/Navbar';
// import AboutMe from './Components/AboutMe';
import Home from './Components/Home';
// import { useState, useEffect } from "react"
import Technologies from './Components/Technologies'
function App() {
  const technologies = [
    {name: 'JavaScript', link: 'https://cdn.cdnlogo.com/logos/j/69/javascript.svg'},
    {name: 'CSS', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png' },
    {name: 'HTML', link: 'https://cdn.worldvectorlogo.com/logos/html-1.svg'},
    {name: 'Figma', link: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    {name: 'Python', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'},
    {name: 'Rails', link: 'https://miro.medium.com/v2/resize:fit:800/1*eRErB-NQYgwF52eUUK_kkQ.png'},
    {name: 'R', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png'},
    {name: 'Node', link: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'},
    {name: 'React', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'},
    {name: 'Github', link: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'}
  ]
  return (
    <div className="App">
      <Navbar/>
      <body>
        <Home/>
        <Technologies technologies = {technologies}/>
      </body>
    </div>
  );
}

export default App;
