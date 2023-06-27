import React from 'react';
import { introCards } from '../assets/data/images';
import Hoop from './Hoop'
import Card from './Card';
import './stylesheets/Intro.scss';

const Intro = () => {
    return (
        <div className='master-container' id="about">
            <div className='intro-container'>
                <div className='intro-text'>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
                        <h3>
                            I am a...
                        </h3>
                    </div>
                    <div className='facts'>
                        <p className='fact'>recent new grad who studied <b>computer science</b> at <b>Dartmouth College</b></p>
                        <p className='fact'><b>software engineer</b> experienced in <b>full stack, AR/VR, and mobile app</b> development</p>
                        <p className='fact'><b>Bay Area</b> native who loves creating and designing programs!</p>
                    </div>
                    <div className='intro-cards'>
                        {introCards.map((data, i) => (
                            <Card
                                key={i}
                                id={i}
                                img={data.icon}
                                color={data.color}
                                info={data.info}
                                width='9em'
                                height='9em' />
                        ))}
                    </div>
                </div>
            </div>
            <Hoop
                hoopTop='43.2em'
                rimTop='62.2em' />
        </div>
    )
}


export default Intro;