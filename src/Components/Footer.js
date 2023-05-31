import React from 'react'
import githubLogo from '/home/potus/projects/MomsRegretti.github.io/src/Github logo.png'
function Footer({footerRef}) {
    return (
        <footer ref={footerRef} id= "footer" className='footer'>
            <div style={{textAlign:'left', padding:'0', marginRight:'50px'}}>
                <h2 style={{textAlign:'center'}}>Contact</h2>
                <ul style={{paddingLeft: '0px'}}>
                    <li>Email: CharlieRojasSE@gmail.com</li>
                    <li>Mobile: (650) 825 0135</li>
                </ul>
            </div>
            <div style={{textAlign:'center',paddingRight:'50px'}}>
                <h2>Socials</h2>
                <div>
                    <img style={{height:'50px',width:'50px',margin:'auto 15px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png' alt='LinkedIn' onClick={() => window.open('https://www.linkedin.com/in/charlie-c-rojas/')}/>
                    <img style={{height:'50px',width:'50px',margin:'auto 15px'}} src={githubLogo} alt='Github' onClick={() => window.open('https://github.com/MomsRegretti')}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer