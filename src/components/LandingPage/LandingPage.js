import React from 'react';
import Activity from '../Activity/Activity';
import Personalinfo from '../Personal_info/Personalinfo';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='pageContainer'>
            <Activity></Activity>
            <Personalinfo className='personalContainer'></Personalinfo>
        </div>
    );
};

export default LandingPage;