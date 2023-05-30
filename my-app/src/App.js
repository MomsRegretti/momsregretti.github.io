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
    { name: 'JavaScript', link: 'https://cdn.cdnlogo.com/logos/j/69/javascript.svg', category: 'Web Fundamentals', details: ["Up to date: Consuming and learning the latest practices in JavaScript development","Organized: I strive to write clean, clear and maintanable code"]},
    { name: 'CSS', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png', category: 'Web Fundamentals', details: ["Appearances matter: I place great value on UX/UI and the impact it makes on a client's perception of your product"] },
    { name: 'HTML', link: 'https://cdn.worldvectorlogo.com/logos/html-1.svg', category: 'Web Fundamentals', details: ["Appearances matter: I place great value on UX/UI and the impact it makes on a client's perception of your product"] },
    { name: 'Figma', link: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', category: 'Web Design', details: ['Collaborative design: I use Figma and Trello to show my vision for a project and keep myself and others on the same page'] },
    { name: 'Python', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png', category: 'Programming Languages', details: ['Learning: Completed a LinkedIn course on using the Django framework to create web apps with imported csv files','DS & A: As it is my newest lanugage, I constantly practice using Python in LeetCode to increase comfort & proficiency'] },
    { name: 'Rails', link: 'https://miro.medium.com/v2/resize:fit:800/1*eRErB-NQYgwF52eUUK_kkQ.png', category: 'Backend Languages/Frameworks', details: ["API's: I made 3 projects with a Ruby on Rails database that I populated manually as well as dynamically with external API's",'SQL: Implemented auth and Postgres to make a relational database for personalized user experiences'] },
    { name: 'R', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png', category: 'Programming Languages', details: ["Data visualization: gained understanding of how to display different sets of data and create regression tables while getting my bachelor's at UC Davis", "Hello world: This was my first experience coding and closely related to my education in assessing the scope and impact of scholarly findings"] },
    { name: 'Node', link: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png', category: 'Backend Languages/Frameworks', details: ["Backend: I can create custom routes to a database using the Express framework and essentially replicate my capabilites using Rails", "API Communication: Being trained as a full stack developer, I aim to make the communication between the front and back end as seamless and clear as possible"] },
    { name: 'React', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', category: 'Frontend Frameworks', details: ["Bread and Butter: The majority of my projects have been completed using React and the best practices I've learned in training and independent research", "Efficient: Conscious state management and clear component models to improve the experience of both other developers and users"] },
    { name: 'Github', link: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', category: 'Version Control', details: ['Collaborative: Understanding of GitFlow and GitHub Flow branching strategies'] }
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
