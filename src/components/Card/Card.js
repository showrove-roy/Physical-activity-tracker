import React from 'react';
import './Card.css';

const Card = ({activity,activitiesTime}) => {
    const {name,img,forAge,time,details} = activity;
    // console.log(props.activity);
    return (
        <div className='cardContainer'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>{details}</p>
                <h6>For Age: {forAge} Y</h6>
                <h6>Time required: {time}m</h6>
                <button onClick={()=>activitiesTime(time)}>Add to list</button>

            
        </div>
    );
};

export default Card;