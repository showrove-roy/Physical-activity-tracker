import React, { useState } from 'react';
import Activity from '../Activity/Activity';
import Personalinfo from '../Personal_info/Personalinfo';
import './LandingPage.css';

const LandingPage = () => {
    const [activityTime, setActivityTime] = useState(0);
    const activitiesTime = avTime => {
        let totalTime = activityTime + avTime;
        setActivityTime(totalTime);
    };
    return (
        <div className='pageContainer'>
            <Activity activitiesTime={activitiesTime}></Activity>
            <Personalinfo activityTime={activityTime} className='personalContainer'></Personalinfo>
        </div>
    );
};

export default LandingPage;