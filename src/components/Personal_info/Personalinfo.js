import React, { useEffect, useState } from "react";
import "./Personalinfo.css";
import profilePic from "../../profile.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Personalinfo = ({ activityTime }) => {
  const notify = () =>
    toast.success("🦄 Wow Activity Completed!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const [time, setTime] = useState(0);
  const setTimeOnDB = (getTime) => {
    localStorage.setItem("time", getTime);
    setTime(getTime);
  };
  useEffect(() => {
    let strodeTime = JSON.parse(localStorage.getItem("time"));
    setTime(strodeTime);
  }, []);

  return (
    <div className='personalinfo'>
      <div className='personalInfoBox'>
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
              <p>Barisal, Bangladesh</p>
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
          <div className='timeBox'>
            <span onClick={() => setTimeOnDB(10)}>10s</span>
            <span onClick={() => setTimeOnDB(20)}>20s</span>
            <span onClick={() => setTimeOnDB(30)}>30s</span>
            <span onClick={() => setTimeOnDB(40)}>40s</span>
          </div>
        </div>

        {/* Exercise Details */}
        <div className='exerciseDetails'>
          <h5>Exercise Details</h5>
          <div>
            <h6>Exercise time</h6>
            <p>{activityTime}m</p>
          </div>
          <div>
            <h6>Break time</h6>
            <p>{time}s</p>
          </div>
        </div>

        {/* Activity Completed */}
        <div>
          <button onClick={notify} className='btnCompleted'>
            Activity Completed
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Personalinfo;
