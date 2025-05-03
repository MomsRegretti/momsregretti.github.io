import React from 'react'
import headshot from '/workspaces/momsregretti.github.io/src/headshot.JPG'

function AboutMe({ aboutMeRef }) {
    return (
        <div ref={aboutMeRef} id='aboutme' style={{ backgroundColor: "#121212", minHeight: '900px', display: 'flex', direction: 'row', margin: 'auto' }}>
            <div className='imageCard' id='pic'>
                <img
                    style={{
                        margin: 'auto',
                        height: '25rem',
                        width: '45rem',
                        borderRadius: '15px',
                        objectFit: 'cover', // Ensures the image is not distorted
                        objectPosition: 'top' // Focuses on the upper body
                    }}
                    alt='Charlie Rojas'
                    src={headshot}
                />
            </div>
            <div style={{ justifySelf: 'center', width: '50%', display: 'grid', marginRight: '150px' }} id='bio'>
                <h1 style={{ margin: 'auto', marginBottom: '0' }}>Hello!</h1>
                <p className='textCard' style={{ height: 'fit-content', fontSize: '25px', padding: '15px' }}>
                    My name is Charlie Rojas and I'm currently looking for software engineering roles! I graduated from UC Davis with a major in political science before deciding to branch off into the tech space. I took on the 15 week boot camp experience with Flatiron School and met some great people along the way. I'm eagerly pursuing the next step in my learning journey both as a professional and in my personal life and I want to share my next step with YOU!
                </p>
            </div>
        </div>
    )
}

export default AboutMe