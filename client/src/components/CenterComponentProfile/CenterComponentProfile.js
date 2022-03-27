import React from "react";

export default function CenterComponentProfile({ handleClick, user, setUser, meetups, setMeetups }) {

    return (
      <div className="CenterComponentProfile">
        <div className="SpacingDiv">
          <div className="UserProfile">
            <h1>Welcome back {user.first_name}!</h1>
            <h2>Email: {user.email}</h2>

            <p>Looking to host your own cooking class or meetup?</p>
            <button className="SignInBtn" onClick={handleClick}>
              Host New Event
            </button>
            <br/>  <br/>
            <p>Thanks for using Chefish!</p>
            <p>
              Here are the classes you have joined and the cuisines you are interested in.
            </p>
          </div>
        </div>
      </div>
    );
  }