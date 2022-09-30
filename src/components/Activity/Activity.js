import React from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import './Activity.css';

const Activity = () => {
    return (
        <div className='activityContainer'> 
            <Header></Header>
            <h2>Select today’s exercise</h2>
            <Card></Card>
        </div>
    );
};

export default Activity;