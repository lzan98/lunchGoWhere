import './LunchDate.css';
import React from "react";

const LunchDate = (props) => {
  const month = new Date(props.date).toLocaleString("en-US", { month: "long" });
  const day = new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
  const year = new Date(props.date).getFullYear();

  return (
    <div className='date'> Lunch on {day} {month} {year}</div>
  );
}

export default LunchDate;
