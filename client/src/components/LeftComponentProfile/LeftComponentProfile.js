import React, { useState} from "react";
import MeetupCard from "../MeetupCard/MeetupCard";

export default function LeftComponentProfile({ userMeetups, rerender }) {
  const [userMeetup, setUserMeetup] = useState([]);
  const [refreshed, setRefreshed] = useState(false);

  function componentDidMount() {
    setUserMeetup(userMeetups);
  }

  function leaveMeetup(meetup) {
    alert("Meetup removed!")
    const body = { user_id: window.userId, meetup_id: meetup.id };

    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    setUserMeetup(userMeetup);

    fetch("/usermeetup/delete", configObj);
    rerender();
  };

    return (
      <div className="LeftComponent">
        <h1>Your Meetups</h1>
        {userMeetups &&
          userMeetups.map((m) => {
            return (
              <MeetupCard
                key={m.id}
                meetup={m}
                leaveMeetup={leaveMeetup}
              />
            );
          })}
      </div>
    );
  }