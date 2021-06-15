import React from 'react';
import { projectCards } from '../assets/projects-data';
import Card from './Card';
import Hoop from './Hoop';
import './stylesheets/Projects.scss';

const Projects = () => {
    
    return(
        <div className='master-container'>
        <div className='main-container' id= "projects">
            <h1>Projects</h1>
            <p><b>Click</b> the cards to learn more about my projects</p>
            <div className='intro-cards'>
                {projectCards.map((data, i) => (
                <Card 
                    key={i}
                    id={i}
                    name={data.name}
                    date={data.date}
                    company={data.company}
                    img={data.icon}
                    color={data.color}
                    info={data.info}
                    height= {data.height ? data.height : '10em' }
                    width={data.width}
                    overlay={data.overlay}
                    realName={data?.['real-name']}
                />
                ))}
            </div>
        </div>
        <Hoop
        hoopTop='145em'
        rimTop='164.1em'/>
        </div>
    )
}


export default Projects;