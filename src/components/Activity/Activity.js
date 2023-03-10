import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import QNA from "../QNA/QNA";
import "./Activity.css";

const Activity = ({ activitiesTime }) => {
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
      <div className='mainCardContainer'>
        {activities.map((activity) => (
          <Card
            activitiesTime={activitiesTime}
            key={activity.id}
            activity={activity}></Card>
        ))}
      </div>

      <QNA></QNA>
    </div>
  );
};

export default Activity;
