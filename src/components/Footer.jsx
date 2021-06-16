import React from 'react';
import Resume from '../assets/Benedict_Tedjokusumo_Resume.pdf';
import './stylesheets/Footer.scss';

const Footer = () => {
    return(
        <div className='footer'>
            <a className='footer-name' href="#about">2021</a>
            <div className='footer-items'>
            <a className='footer-item' href="#about">ADD </a>
            <a className='footer-item' href="#projects">LINKS </a>
            <a className='footer-item' target='_blank' rel='noreferrer' href={Resume}>HERE</a>
            </div>
        </div>
    )
}


export default Footer;