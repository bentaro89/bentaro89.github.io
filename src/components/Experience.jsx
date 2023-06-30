import React from 'react';
import data from '../assets/data/experience';
import Hoop from './Hoop'
import './stylesheets/Intro.scss';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
    return (
        <div className='master-container' id="experience">
            <div className='experience-container'>
                <div style={{ width: '100%' }}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'left', paddingLeft: '2em' }}>
                        <h3>
                            I have experience working at...
                        </h3>
                    </div>
                    <div className='intro-cards'>
                        {data.map((data, i) => (
                            <ExperienceCard
                                key={i}
                                id={i}
                                img={data.icon}
                                color={data.color}
                                info={data.info}
                                role={data.role}
                                date={data.date}
                                width='14em'
                                height='14em' />
                        ))}
                    </div>
                </div>
            </div>
            <Hoop
                hoopTop='85.1em'
                rimTop='104.2em' />
        </div>
    )
}