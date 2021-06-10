import React from 'react';
import { projectCards } from '../assets/projects-data';
import Card from './Card';
import './stylesheets/Projects.scss';

const Projects = () => {
    
    return(
        <div className='main-container' id= "projects">
            <h1>Projects</h1>
            <p><b>Click</b> the cards to learn more about my projects</p>
            <div className='intro-cards'>
                {projectCards.map((data, i) => (
                <Card 
                    id={i}
                    img={data.icon}
                    color={data.color}
                    info={data.info}
                    height= '10em'
                    width={data.width}
                />
                ))}
            </div>
        </div>
    )
}


export default Projects;