import React from "react";


const User = (props) => {
  return (
    <div className="user">
      <img className="useravatar" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png"/>
      <div>
        <div className="username">{props.review.username}</div>
        <div className="usercity">{props.review.usercity}</div>
      </div>
    </div>
  )
}



export default User;


