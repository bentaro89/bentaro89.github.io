import React from 'react';
import { introCards } from '../assets/images';
import Hoop from './Hoop'
import Card from './Card';
import './stylesheets/Intro.scss';

const Intro = () => {
    
    return(
        <div className='master-container'>
            <div className='intro-container' id= "about">
                <div className='intro-text'>
                    <h1>My name is Ben</h1>
                    <h3>I'm a...</h3>
                    <div className='facts'>
                        <p className='fact'>rising Junior studying <b style={{color: 'blue'}}>computer science</b> in <b>Dartmouth College</b></p>
                        <p className='fact'><b>software engineer</b> experienced in <b>frontend, AR/VR, and mobile app</b> development</p>
                        <p className='fact'><b>Bay Area</b> native who was self-taught programmer</p>
                    </div>
                    <p><b>Click</b> the cards to learn more about me</p>
                    <div className='intro-cards'>
                        {introCards.map((data, i) => (
                        <Card 
                        id = {i}
                        img= {data.icon}
                        color={data.color}
                        info = {data.info}
                        width = '9em'
                        height = '9em'/>
                        ))}
                    </div>
                </div>
                
            </div>
            <Hoop/>
        </div>
    )
}


export default Intro;