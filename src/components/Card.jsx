import React, { useState } from 'react';
import './stylesheets/Card.scss';

const IntroCard = (props) => {
    const [clicked, setClick] = useState(false);
    return(
        <div className={'card'} onClick={() =>setClick(!clicked)}>
            {clicked ?  
            <p>{props.info}</p>
            :
            <img
            className={'card'}
            style={{backgroundColor: props.color}} 
            src={props.img} 
            alt='cube'/>
            }
        </div>
    )
}


export default IntroCard;