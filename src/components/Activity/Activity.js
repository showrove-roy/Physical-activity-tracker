import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import "./Activity.css";

const Activity = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='activityContainer'>
      <Header></Header>
      <h2>Select today’s exercise</h2>
      <div className="mainCardContainer">
        {activities.map((activity) => (
          <Card key={activity.id} activity={activity}></Card>
        ))}
      </div>
    </div>
  );
};

export default Activity;
