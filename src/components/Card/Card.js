import React from 'react';
import './Card.css';

const Card = (props) => {
    const {name,id,img,forAge,time,details} = props.activity;
    // console.log(props.activity);
    return (
        <div className='cardContainer'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>{details}</p>
                <h6>For Age: {forAge} Y</h6>
                <h6>Time required: {time}m</h6>
                <button>Add to list</button>

            
        </div>
    );
};

export default Card;