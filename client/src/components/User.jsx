import React from "react";
import styled from 'styled-components';

const Useravatar = styled.img`
  height: 60px;
  width: 60px;
`;
  
const Username = styled.div`
  display: block;
  color: #0073bb;
  text-align: left;
  font-weight: 700;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.28571em;
  margin: 3px;
`;

const Usercity = styled.div`
  display: block;
  color: #333;
  text-align:left;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5em;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  margin: 3px;
`;

const UserContainer = styled.div`
  width: 304px;
  margin: 18px;
  display: flex;
`;


const User = (props) => {
  return (
    <UserContainer className="user">
      <Useravatar className="useravatar" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png"/>
      <div>
        <Username className="username">{props.review.username}</Username>
        <Usercity className="usercity">{props.review.usercity}</Usercity>
      </div>
    </UserContainer>
  )
}

export default User;


