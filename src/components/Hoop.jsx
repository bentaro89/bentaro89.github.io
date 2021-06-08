import React from 'react';

import BasketballHoop from '../assets/BasketballHoop.svg'
import rimPart from '../assets/betterHoop.svg'

import './stylesheets/Hoop.scss';

const Hoop = (props) => {
    
    const hoopStyle = {
        top: props.hoopTop,
        height: '30em',
    };
    const rimStyle = {
        top: props.rimTop,
        height: '10.5em',
    };
    return(
        <div className='hoop' id= 'hoop'>
            <img src={BasketballHoop} style={hoopStyle} className='basketball-hoop' alt='hoop'/>
            <img src={rimPart} style={rimStyle} className='basketball-rim' alt='hoop'/>
        </div>
    )
}


export default Hoop;