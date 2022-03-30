import React from "react";

export default function CenterComponentProfile({ handleClick, user, setUser, meetups, setMeetups }) {

    return (
      <div className="CenterComponentProfile">
        <div className="SpacingDiv">
          <div className="UserProfile">
            <h1>Welcome back {user.first_name}</h1>
            <h3>Email: {user.email}</h3>
            <p>
              Here are the meetups you have joined and the cuisines you are interested in.
            </p>
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