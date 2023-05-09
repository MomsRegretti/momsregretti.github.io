import './App.css';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
// import { useState, useEffect } from "react"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <body>
        <AboutMe/>
      </body>
    </div>
  );
}

export default App;
