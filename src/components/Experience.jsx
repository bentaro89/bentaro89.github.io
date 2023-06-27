import React from 'react';
import data from '../assets/data/experience';
import Hoop from './Hoop'
import Card from './Card';
import './stylesheets/Intro.scss';

export default function Experience() {
    return (
        <div className='master-container' id="experience">
            <div className='experience-container'>
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
                                width='12em'
                                height='12em' />
                        ))}
                    </div>
                </div>
            </div>
            <Hoop
                hoopTop='81.1em'
                rimTop='100.2em' />
        </div>
    )
}