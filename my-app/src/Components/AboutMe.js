import React from 'react'

function AboutMe() {
    return (
        <div style={{backgroundColor: "#121212", border: 'solid 2px red', display: 'flexbox'}}>
            <h1 style={{}}>Hello!</h1>
            <div style={{display: 'flexbox'}} id='pic'>
                <h2>This is me enjoying myself</h2>
                <img alt ='Charlie Rojas' src='https://media.licdn.com/dms/image/C5603AQGPAJfqNUrw5A/profile-displayphoto-shrink_800_800/0/1641016497345?e=2147483647&v=beta&t=Kl28M_9QJbEke_56lehWqj9L9JSQ0RO334-uU4Bp08M'/>
            </div>
            <div style={{}} id='bio'>
                My name is Charlie Rojas and I'm currently looking for software engineering roles! I graduated from UC Davis with a major in political science before deciding to branch off into the tech space. I took on the 15 week boot camp experience with Flatiron School and met some great people along the way. I'm eagerly pursuing the next step in my learning journey both as a professional and in my personal life and I want to share my next step with YOU! 
            </div>
        </div>
    )
}

export default AboutMe