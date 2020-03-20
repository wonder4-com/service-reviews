import React from "react";
import User from "./User.jsx";
import stars1 from "../../../public/assets/stars-1.png";
import stars2 from "../../../public/assets/stars-2.png";
import stars3 from "../../../public/assets/stars-3.png";
import stars4 from "../../../public/assets/stars-4.png";
import stars5 from "../../../public/assets/stars-5.png";
import Buttons from "./Buttons.jsx";

const ReviewEntry = (props) => {

  let dateStrings = props.review.date.slice(0,10).split('-');
  let postDate = `${dateStrings[1]}/${dateStrings[2]}/${dateStrings[0]}`;

  let rating = stars1;
  if (props.review.rating === 5 ) {
    rating = stars5;
  } else if (props.review.rating === 4) {
    rating = stars4;
  } else if (props.review.rating === 3) {
    rating = stars3;
  } else if (props.review.rating === 2) {
    rating = stars2;
  }

  return (
    <div className="column review">
      <User review={props.review}/>
      <div className="list">
        <span className="stars-4">
          <img src={rating}/>
        </span>
        <span className="date">  {postDate}</span>
        <div className="comment">{props.review.comment}</div>
        <Buttons />
      </div>
    </div>
  )
}



export default ReviewEntry;