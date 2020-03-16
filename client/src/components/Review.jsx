import React from "react";

const ReviewEntry = (props) => {
  return (
    <div>
      <div>{props.review.username}</div>
      <div>{props.review.usercity}</div>
      <div>{props.review.rating}</div>
      <div>{props.review.comment}</div>
      <div>{props.review.date}</div>
    </div>
  )
}



export default ReviewEntry;