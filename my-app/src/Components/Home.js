import React from 'react'

function Home() {
    return (
        <div id='aboutme' style={{ backgroundColor: "#121212", minHeight: '900px', display: 'flex', direction: 'row', margin: 'auto' }}>
            <div className = 'imageCard' style={{}} id='pic'>
                <img style={{ margin: 'auto', height: '33%', width: '33%' }} alt='Charlie Rojas' src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.18169-9/10410413_650047695099302_2666444969946121164_n.jpg?stp=dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=2c4854&_nc_ohc=F8LI4HREuDUAX9pBwvy&_nc_ht=scontent-sjc3-1.xx&oh=00_AfA9QjzWge7oWoP-kTyzEbNuKrOXv4ZIsUduoCw-pDo7AQ&oe=648423A7' />
                <h2>This is me enjoying myself</h2>
            </div>
            <div style={{ justifySelf: 'center', width: '50%', display: 'grid',marginRight: '150px' }} id='bio'>
                <h1 style={{ margin: 'auto', marginBottom: '0' }}>Hello!</h1>
                <p className='textCard' style={{height:'fit-content',fontSize: '25px', padding:'15px' }}>
                    My name is Charlie Rojas and I'm currently looking for software engineering roles! I graduated from UC Davis with a major in political science before deciding to branch off into the tech space. I took on the 15 week boot camp experience with Flatiron School and met some great people along the way. I'm eagerly pursuing the next step in my learning journey both as a professional and in my personal life and I want to share my next step with YOU!
                </p>
            </div>
        </div>
    )
}

export default Home