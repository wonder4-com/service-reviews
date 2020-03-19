import React from "react";
import User from "./User.jsx"

const ReviewEntry = (props) => {
  
  return (
    <div className="column">
      <User review={props.review}/>
      <div className="list">
        <span>{props.review.rating}</span><span>  {props.review.date}</span>
        <div className="comment">{props.review.comment}</div>
      </div>
    </div>
  )
}



export default ReviewEntry;