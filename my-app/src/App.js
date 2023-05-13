import './App.css';
import Navbar from './Components/Navbar';
// import AboutMe from './Components/AboutMe';
import Home from './Components/Home';
// import { useState, useEffect } from "react"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <body>
        <Home/>
      </body>
    </div>
  );
}

export default App;
