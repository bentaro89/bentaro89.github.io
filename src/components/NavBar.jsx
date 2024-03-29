import React from 'react';
import Resume from '../assets/Benedict-Tedjokusumo-Resume.pdf';
import './stylesheets/NavBar.scss';

const NavBar = () => {
    return (
        <div className='nav'>
            <a className='nav-name' href="#about">Benedict Tedjokusumo</a>
            <div className='nav-items'>
                <a className='nav-item' href="#about">About</a>
                <a className='nav-item' href="#experience">Experience</a>
                <a className='nav-item' href="#projects">Projects</a>
                <a className='nav-item' target='_blank' rel='noreferrer' href={Resume}>Resume</a>
            </div>
        </div>
    )
}


export default NavBar;