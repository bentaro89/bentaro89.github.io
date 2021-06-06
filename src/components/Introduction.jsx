import React from 'react';
import { introCards } from '../assets/images';
import Card from './Card';
import './stylesheets/Intro.scss';

const NavBar = () => {
    
    return(
        <div className='main-container' id= "about">
            <h1>My name is Ben</h1>
            <h3>I'm a...</h3>
            <div className='facts'>
            <p>rising Junior studying <b style={{color: 'blue'}}>computer science</b> in <b>Dartmouth College</b></p>
            <p><b>software engineer</b> experienced in <b>frontend, AR/VR, and mobile app</b> development</p>
            <p><b>Bay Area</b> native that immigrated to the States from Indonesia</p>

            </div>
            <p><b>Click</b> the cards to learn more about me</p>
            <div className='intro-cards'>
                {introCards.map((data, i) => (
                <Card 
                id = {i}
                img= {data.icon}
                color={data.color}
                info = {data.info}/>
                ))}
            </div>
            
            <h1>hi there nerds</h1>
        </div>
    )
}


export default NavBar;