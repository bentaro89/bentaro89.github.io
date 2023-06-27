import React from 'react';
import { projectCards } from '../assets/data/projects-data';
import Card from './Card';
import Hoop from './Hoop';
import './stylesheets/Projects.scss';

const Projects = () => {
    return (
        <div className='master-container' id="projects">
            <div className='main-container'>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'left', paddingLeft: '4em' }}>
                    <h3>
                        I have worked on...
                    </h3>
                </div>
                <div className='intro-cards'>
                    {projectCards.map((data, i) => (
                        <Card
                            key={i}
                            id={i}
                            name={data.name}
                            date={data.date}
                            tools={data.tools}
                            company={data.company}
                            img={data.icon}
                            color={data.color}
                            info={data.info}
                            height={data.height ? data.height : '10em'}
                            width={data.width}
                            overlay={data.overlay}
                            link={data.link}
                            realName={data?.['real-name']}
                        />
                    ))}
                </div>
            </div>
            <Hoop
                hoopTop='168.2em'
                rimTop='187.3em' />
        </div>
    )
}


export default Projects;