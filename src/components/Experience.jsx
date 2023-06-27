import React from 'react';
import data from '../assets/data/experience';
import Hoop from './Hoop'
import Card from './Card';
import './stylesheets/Intro.scss';

export default function Experience() {
    return (
        <div className='master-container'>
            <div className='intro-container' id="experience">
                <div className='intro-text'>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
                        <h3>
                            I have experience working at...
                        </h3>
                    </div>
                    <div className='intro-cards'>
                        {data.map((data, i) => (
                            <Card
                                key={i}
                                id={i}
                                img={data.icon}
                                color={data.color}
                                info={data.info}
                                width='14em'
                                height='14em' />
                        ))}
                    </div>
                </div>
            </div>
            {/* <Hoop
                hoopTop='42.2em'
                rimTop='61.3em' /> */}
        </div>
    )
}