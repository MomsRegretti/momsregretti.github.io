import React from 'react'

function Projects() {
  return (
    <div>
      <h1>Check out my projects!</h1>
      <div className='ProjectCard'>
        <h3>Team Canyon</h3>
        <div>
          <h4>My app for users to make informed character selections for the popular shooting game, Valorant.</h4>
          <iframe width="66%" height="600px" src="https://www.youtube.com/embed/kWflLS3Hmvg" title="Team Canyon Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen = "true"></iframe>
          <h4>Under the hood:</h4>
          <ul style={{listStylePosition: "inside"}}>
            <li>Employed an external API through a Rails & Postgres backend to dynamically populate the local database.</li>
            <li>Introduced authentication & encryption with bcrypt for personalized user experience and content posting.</li>
            <li>Applied principles of the Agile methodology to optimize workflow throughout development phases.</li>
          </ul>
        </div>
      </div>
      <div className='ProjectCard'>
        <h3>UFC Fight Analyzer</h3>
        <div>
          <h4>An application that features a diverse cast of UFC athletes to create match-up cards for social media.</h4>
          <img></img>
          <h4>Under the hood:</h4>
          <ul style={{listStylePosition: "inside"}}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className='ProjectCard'>
        <h3>Trivia Champions</h3>
        <div>
          <h4>A vaporwave themed website that ranks the user on a worldwide leaderboard.</h4>
          <img></img>
          <h4>Under the hood:</h4>
          <ul style={{listStylePosition: "inside"}}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects