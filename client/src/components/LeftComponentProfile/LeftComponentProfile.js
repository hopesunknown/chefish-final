import React, { useState} from "react";
import MeetupCard from "../MeetupCard/MeetupCard";

export default function LeftComponentProfile({ userMeetups, userInfo, setUser, userDetails, meetups, setMeetups }) {
  const [userMeetup, setUserMeetup] = useState([]);
  const [refreshed, setRefreshed] = useState(false);

  function componentDidMount() {
    setUserMeetup(userMeetups);
  }

  console.log(userInfo);
  console.log(meetups)

  function leaveMeetup(meetup) {
    alert("Meetup removed!")
    const body = { user_id: userInfo.id, meetup_id: meetups.id };

    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    setUserMeetup(userMeetup);

    fetch("/usermeetup/delete", configObj);
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