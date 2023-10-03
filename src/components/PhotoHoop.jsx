import React from 'react';

import BasketballHoop from '../assets/basketballHoop.svg'
import rimPart from '../assets/betterHoop.svg'
import profilePic from '../assets/pp-hoop.svg'

import './stylesheets/Hoop.scss';

const PhotoHoop = (props) => {
    return (
        <div className='hoop' id='hoop'>
            {/* <img src={profilePic} style={{ top: props.hoopTop }} className='photo-hoop' alt='hoop' /> */}
            <img src={profilePic} style={{ top: props.hoopTop }} className='photo-hoop' alt='hoop' />
            <img src={rimPart} style={{ top: props.rimTop }} className='photo-rim' alt='hoop' />
        </div>
    )
}
export default PhotoHoop;