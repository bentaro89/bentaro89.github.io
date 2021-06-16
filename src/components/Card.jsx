import React, { useState } from 'react';
import './stylesheets/Card.scss';

const IntroCard = (props) => {
    const [clicked, setClick] = useState(false);
    const colors =['lightblue', 'lightpink']
    return(
        <div className='card' style={{backgroundColor: props.color, width: props.width, height: props.height}} onClick={() =>setClick(!clicked)}>
            {clicked ?  
                props.name ?
                
                <div className='card-border' style={{}}>
                    <div className='card-content-info' style={{textAlign: 'left', 
                    color: props.color === 'black' ? 'white' : 'black', 
                    fontSize: props.color === 'black' ? '.75em' : '.9em',
                    border: props.color === 'black' ? '2px solid white' : '2px solid black',
                    padding: props.color === 'black' ? '0 10px 0 10px' : '0 20px 0 20px'}}>
                    <div className='card-info-title'>{props.realName ? props.realName: props.name}</div>
                    <div className='card-content-data'>
                        <div>{props.date}</div>
                        <div>{props.company}</div>
                        </div>
                    <div className='card-info'>{props.info}</div>

                    </div>
                </div>
                
                :
                <div className='card-content-info' style={{fontSize: '.75em', padding: '25px 25px 20px 30px', textAlign:'none'}}>{props.info}</div>
                
            :
                props.name ?
                    <div className='card-content'>
                        <div className={props.overlay ? 'img-overlay': ''}></div>

                        <img
                        style={{backgroundColor: props.color, width: props.width}}
                        src={props.img} 
                        alt={props.name}/>
                        <div className='card-titles card-title'>{props.name}</div>
                        <div className='card-titles card-tools'>{props.tools}</div>
                    </div>
                
                :
                
                <img
                style={{
                    backgroundColor: props.color, 
                    width: !colors.includes(props.color) ? props.width : '7em', 
                    height: !colors.includes(props.color) ? props.height : '7em',
                    paddingTop: !colors.includes(props.color) ? '' : '1em'
                }}
                src={props.img} 
                alt='cube'/>

            }
        </div>
    )
}


export default IntroCard;