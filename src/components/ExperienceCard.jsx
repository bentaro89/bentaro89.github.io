import React, { useState } from 'react';
import './stylesheets/Card.scss';

const ExperienceCard = (props) => {
    const [clicked, setClick] = useState(false);

    console.log(props)

    return (
        <div className='card' style={{ backgroundColor: props.color, width: props.width, height: props.height, padding: '1em' }} onClick={() => setClick(!clicked)}>
            {clicked ?
                <div className='card-content-info' style={{
                    color: props.color === 'black' ? 'white' : 'black',
                    fontSize: props.color === 'black' ? '.75em' : '.9em',
                    padding: props.color === 'black' ? '0 10px 0 10px' : '0 20px 0 20px',
                    borderRadius: '10px'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        fontSize: '18px',
                        marginBottom: '1.5em'
                    }}>
                        <div style={{ width: '7em', textAlign: 'center' }}>
                            {props.date.includes('-') ?
                                <div style={{
                                    flexDirection: 'column',
                                }}>
                                    <div>{props.date.split('-')[0]}</div>
                                    <div>-</div>
                                    <div>{props.date.split('-')[1]}</div>
                                </div>


                                :
                                props.date
                            }
                        </div>
                        <div style={{ width: '8em', textAlign: 'center' }}>{props.role}</div>
                    </div>
                    <div style={{ fontSize: '17px' }}>{props.info}</div>
                </div>
                :
                <img
                    style={{
                        backgroundColor: props.color,
                        width: '80%',
                    }}
                    src={props.img}
                    alt='cube'
                />
            }
        </div >
    )
}


export default ExperienceCard;