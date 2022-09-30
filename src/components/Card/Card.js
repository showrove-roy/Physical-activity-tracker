import React from 'react';
import './Card.css';

const Card = (props) => {
    const {name,id,img,forAge,time,details} = props.activity;
    // console.log(props.activity);
    return (
        <div className='cardContainer'>
            <div className='card'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>{details}</p>
                <h6>For Age: {forAge}</h6>
                <h6>Time required: {time}</h6>
                <button>Add to list</button>

            </div>
        </div>
    );
};

export default Card;