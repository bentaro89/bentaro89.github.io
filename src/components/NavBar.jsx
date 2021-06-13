import React from 'react';
import Resume from '../assets/cube.svg'; //CHANGE TO RESUME

import './stylesheets/NavBar.scss';

const NavBar = () => {
    return(
        <div className='nav'>
            <a className='nav-name' href="#about">Benedict <br></br>Tedjokusumo</a>
            <div className='nav-items'>
            <a className='nav-item' href="#about">About</a>
            <a className='nav-item' href="#projects">Projects</a>
            <a className='nav-item' target='blank' href={Resume} download={Resume}>Download Resume</a>
            </div>
            
        </div>
    )
}


export default NavBar;