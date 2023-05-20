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
          <img width="66%" height="600px" src='https://cdn.discordapp.com/attachments/1028056914778656883/1109369718403518525/image.png' alt='UFC Fight Analyzer'></img>
          <h4>Under the hood:</h4>
          <ul style={{listStylePosition: "inside"}}>
            <li>Seeded data into a Ruby backend from the official UFC website for an accurate database.</li>
            <li>Created backend resources that allow complete CRUD capabilities from the client side.</li>
            <li>Utilized Sinatra to enable communication between the React.js frontend and Ruby backend.</li>
          </ul>
        </div>
      </div>
      <div className='ProjectCard'>
        <h3>Trivia Champions</h3>
        <div>
          <h4>A vaporwave themed website that ranks the user on a worldwide leaderboard.</h4>
          <img width="66%" height="600px" src='https://cdn.discordapp.com/attachments/1028056914778656883/1109354708025475072/image.png' alt='Trivia Champions'></img>
          <h4>Under the hood:</h4>
          <ul style={{listStylePosition: "inside"}}>
            <li>Implemented an external API to parse through and fetch from a database of ~10,000 trivia questions.</li>
            <li>Utilized a JSON server package to replicate a backend for persisting data.</li>
            <li>Employed React hooks to perform conditional rendering and create a multi-route page.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects