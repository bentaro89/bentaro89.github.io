import React from 'react';
import './stylesheets/NavBar.scss';

const NavBar = () => {
    return(
        <div className='nav'>
            <h2 className='nav-name'>Benedict <br></br>Tedjokusumo</h2>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
        </div>
    )
}


export default NavBar;