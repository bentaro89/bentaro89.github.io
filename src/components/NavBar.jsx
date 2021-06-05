import React from 'react';
import './stylesheets/NavBar.scss';

const NavBar = () => {
    return(
        <div className='nav'>
            <h2 className='nav-name'>Benedict <br></br>Tedjokusumo</h2>
            <a href="#footer">About</a>
            {/* <a
                className="nav-item"
                activeClassName="selected"
                href='/projects'
            >
                Projects
            </a> */}
        </div>
    )
}


export default NavBar;