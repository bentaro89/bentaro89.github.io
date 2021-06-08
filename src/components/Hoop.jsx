import React from 'react';

import BasketballHoop from '../assets/BasketballHoop.svg'
import rimPart from '../assets/betterHoop.svg'

import './stylesheets/Hoop.scss';

const Hoop = (props) => {
    return(
        <div className='hoop' id= 'hoop'>
            <img src={BasketballHoop} style={{top: props.hoopTop}} className='basketball-hoop' alt='hoop'/>
            <img src={rimPart} style={{top: props.rimTop}} className='basketball-rim' alt='hoop'/>
        </div>
    )
}


export default Hoop;