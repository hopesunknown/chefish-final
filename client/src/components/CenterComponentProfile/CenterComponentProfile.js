import React from "react";

export default function CenterComponentProfile({ handleClick, user, setUser, meetups, setMeetups }) {

    return (
      <div className="CenterComponentProfile">
        <div className="SpacingDiv">
          <div className="UserProfile">
            <h1>Welcome back</h1>
            <h2>Account Details</h2>
            <h3>Name: {user.first_name}</h3>
            <h3>Email: {user.email}</h3>
            <hr/>
            <p>Looking to host your own cooking class or meetup?</p>
            <button className="host-new-btn" onClick={handleClick}>
              Host New Event
            </button>
          </div>
        </div>
      </div>
    );
  }