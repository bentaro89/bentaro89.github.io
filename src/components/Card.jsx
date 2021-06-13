import React, { useState } from 'react';
import './stylesheets/Card.scss';

const IntroCard = (props) => {
    const [clicked, setClick] = useState(false);
    return(
        <div className='card' style={{backgroundColor: props.color, width: props.width, height: props.height}} onClick={() =>setClick(!clicked)}>
            {clicked ?  
                <div className='card-info' style={{textAlign: props.name ? 'left' : 'none', color: props.color === 'black' ? 'white' : 'black'}}>{props.info}</div>
            :
                props.name ?
                <div className='card-content'>
                    <img
                    style={{backgroundColor: props.color, width: props.width}}
                    src={props.img} 
                    alt='cubee'/>
                    
                    <div className='card-title'>{props.name}</div>
                </div>
                :
                <img
                style={{backgroundColor: props.color, width: props.width, height: props.height}}
                src={props.img} 
                alt='cube'/>

            }
        </div>
    )
}


export default IntroCard;