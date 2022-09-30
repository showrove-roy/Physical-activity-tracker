import React from "react";
import "./Personalinfo.css";
import profilePic from "../../profile.png";

const Personalinfo = () => {
  return (
    <div className='personalinfo'>
      <div className='profile'>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <img src={profilePic} alt='' />
          <div>
            <h5 style={{ margin: "0" }}>Showrove Roy</h5>
            <p style={{ margin: "0" }}>Barisal, Bangladesh</p>
          </div>
        </div>
        {/* details info */}
        <div className='detailsInfo'>
          <div>
            <p>
              <strong>62</strong>kg
            </p>
            Weight
          </div>
          <div>
            <p>
              <strong>5.4</strong>Ft
            </p>
            Height
          </div>
          <div>
            <p>
              <strong>21</strong>Yrs
            </p>
            Age
          </div>
        </div>
      </div>

      {/* Break time */}

      <div className='breakContainer'>
        <h5>Add A Break</h5>
        <div className="timeBox">
          <span>10s</span>
          <span>20s</span>
          <span>30s</span>
          <span>40s</span>
        </div>
          </div>
          
          {/* Exercise Details */}
          <div className="exerciseDetails">
              <h5>Exercise Details</h5>
              <div>
                <h6>Exercise time</h6>
                <p>0m</p>
              </div>
              <div>
                <h6>Break time</h6>
                <p>0s</p>
              </div>
          </div>


          {/* Activity Completed */}
          <div>
              <button className="btnCompleted">Activity Completed</button>
          </div>


      </div>
  );
};

export default Personalinfo;
