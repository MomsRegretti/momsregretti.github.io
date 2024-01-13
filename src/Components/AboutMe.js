import React from 'react'
import ye from '/home/potus/projects/MomsRegretti.github.io/src/IMG_0014.JPG'
function AboutMe({aboutMeRef}) {
    // const aboutMeRef = useRef(null)
    return (
        <div ref={aboutMeRef} id='aboutme' style={{ alignItems: 'center',justifyContent: 'center',backgroundColor: "#121212", minHeight: '900px', display: 'flex', direction: 'row', margin: 'auto' }}>           
            <div className = 'imageCard' style={{}} id='pic'>
                <img style={{ margin: 'auto', height: '25rem', borderRadius:'15px', padding:'0px 10px'}} alt='Charlie Rojas' src = {ye} />
                <h2>This is me enjoying myself</h2>
            </div>
            <div style={{ justifySelf: 'center', width: '50%', display: 'grid' }} id='bio'>
                <h1 style={{ margin: 'auto', marginBottom: '0' }}>Hello!</h1>
                <p className='textCard' style={{height:'fit-content',fontSize: '25px', padding:'15px' }}>
                    My name is Charlie Rojas and I'm currently looking for software engineering roles! I graduated from UC Davis with a major in political science before deciding to branch off into the tech space. I took on the 15 week boot camp experience with Flatiron School and met some great people along the way. I'm eagerly pursuing the next step in my learning journey both as a professional and in my personal life and I want to share my next step with YOU!
                </p>
            </div>
        </div>
    )
}

export default AboutMe