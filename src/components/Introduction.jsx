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
                    {/* <h1 className='intro-name'>Hi! My name is Ben</h1> */}
                    <h3 style={{paddingInlineStart: '2em', textAlign:'left'}}>I'm a...</h3>
                    <div className='facts'>
                        <p className='fact'>rising junior studying <b>computer science</b> in <b>Dartmouth College</b></p>
                        <p className='fact'><b>software engineer</b> experienced in <b>full stack, AR/VR, and mobile app</b> development</p>
                        <p className='fact'><b>Bay Area</b> native who loves creating and designing programs!</p>
                    </div>
                    <div className='intro-cards'>
                        {introCards.map((data, i) => (
                            <Card
                            key = {i}
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
            <Hoop
            hoopTop='42.2em'
            rimTop='61.3em'/>
        </div>
    )
}


export default Intro;