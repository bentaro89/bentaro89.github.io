import React, { useState } from 'react';
import './stylesheets/Card.scss';

const IntroCard = (props) => {
    const [clicked, setClick] = useState(false);
    // const colors = ['lightblue', 'lightpink']
    return (
        <div className='card' style={{ backgroundColor: props.color, width: props.width, height: props.height }} onClick={() => setClick(!clicked)}>
            {clicked ?
                props.name ?
                    <div className='card-content-info' style={{
                        color: props.color === 'black' ? 'white' : 'black',
                        fontSize: props.color === 'black' ? '.75em' : '.9em',
                        padding: props.color === 'black' ? '20px' : '25px',
                        borderRadius: '10px'
                    }}>
                        <div className='card-info-title'>{props.realName ? props.realName : props.name}</div>
                        <div className='card-content-data'>
                            <div>{props.date}</div>
                            <div>{props.company}</div>
                        </div>
                        <div className='card-info'>{props.info}</div>
                        <div className='card-link'>
                            {props.link !== undefined ?
                                <a href={props.link} target="blank" style={{
                                    textAlign: 'right',
                                    color: props.color === 'black' ? 'white' : 'black',
                                    left: '10em',
                                    width: '10em',
                                    textDecoration: 'none',
                                    padding: '5px',
                                    borderRadius: '5px',
                                    border: props.color === 'black' ? '1px solid white' : '1px solid black'
                                }}>Check it out</a>
                                :
                                <a>Not currently hosted</a>
                            }
                        </div>
                    </div>
                    :
                    <div
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <div
                            className='card-content-info'
                            style={{
                                fontSize: '.75em',
                                paddingLeft: '20px',
                                paddingRight: '20px'

                            }}
                        >
                            {props.info}
                        </div>
                    </div>
                :
                props.name ?
                    <div className='card-content'>
                        <div className={props.overlay ? 'img-overlay' : ''} />

                        <img
                            style={{
                                backgroundColor: 'props.color',
                                width: ['Stampd', 'Operators'].includes(props.name) ? '12em' : props.width,
                                height: ['Stampd', 'Operators'].includes(props.name) ? '12em' : props.height,
                                paddingTop: props.name == 'Stampd' && '1em',
                                paddingLeft: props.name == 'Stampd' && '7em'
                            }}
                            src={props.img}
                            alt={props.name} />
                        <div className='card-titles card-title'>{props.name}</div>
                        <div className='card-titles card-tools'>{props.tools}</div>
                    </div>

                    :
                    <img
                        style={{
                            backgroundColor: 'props.color',
                            width: '80%',
                        }}
                        src={props.img}
                        alt='cube'
                    />
            }
        </div>
    )
}


export default IntroCard;