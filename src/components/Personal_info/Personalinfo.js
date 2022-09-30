import React from 'react';
import './Personalinfo.css';
import profilePic from '../../profile.png';

const Personalinfo = () => {
    return (
        <div className='personalinfo'>
            <div className='profile'>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img src={profilePic} alt=""/>
                    <div>
                        <h5 style={{margin:'0'}}>Showrove Roy</h5>
                        <p style={{margin:'0'}}>Barisal, Bangladesh</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Personalinfo;