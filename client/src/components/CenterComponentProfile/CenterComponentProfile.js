import React from "react";

export default function CenterComponentProfile({ userDetails, handleClick, user, setUser }) {

    return (
      <div className="CenterComponentProfile">
        <div className="SpacingDiv">
          <div className="UserProfile">
            <h1>Welcome back {userDetails.first_name}!</h1>
            <h2>Email: {userDetails.email}</h2>

            <p>Have a cooking class in mind? Create one:</p>
            <button className="SignInBtn" onClick={handleClick}>
              Create a New Cooking Class
            </button>
            <br/>  <br/>
            <p>Thanks for using Chefish!</p>
            <p>
              Here are the classes you have joined and the cuisines you are interested in.
            </p>
            <br />
            <p>Stay tuned for more app features in the near future!</p>
          </div>
        </div>
      </div>
    );
  }