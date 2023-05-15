import './App.css';
import Navbar from './Components/Navbar';
// import AboutMe from './Components/AboutMe';
import Home from './Components/Home';
// import { useState, useEffect } from "react"
import Technologies from './Components/Technologies'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <body>
        <Home/>
        <Technologies/>
      </body>
    </div>
  );
}

export default App;
