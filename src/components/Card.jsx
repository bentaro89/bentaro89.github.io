import React, { useState } from 'react';
import './stylesheets/Card.scss';

const IntroCard = (props) => {
    const [clicked, setClick] = useState(false);
    return(
        <div className='card' style={{backgroundColor: props.color, width: props.width, height: props.height}} onClick={() =>setClick(!clicked)}>
            {clicked ?  
                <p>{props.info}</p>
            :
                props.name ?
                <div className='card-content'>
                    <div >
                        <img
                        className='img-overlay'
                        style={{backgroundColor: props.color, width: props.width}}
                        src={props.img} 
                        alt='cubee'/>
                    </div>
                    
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