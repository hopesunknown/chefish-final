import React, { useState } from "react";
import MeetupCard from "../MeetupCard/MeetupCard";

export default function LeftComponentProfile({ userMeetups, user, setUser, userDetails, meetups, setMeetups }) {
  const [userMeetup, setUserMeetup] = useState([]);
  const [refreshed, setRefreshed] = useState(false);

  function componentMount() {
    setUserMeetup(meetups);
  }

  console.log(user.first_name);
  // console.log(meetups)
  console.log(user.meetups);

  function leaveMeetup(m) {
    alert("Meetup removed!")
    // const body = { meetup_id: m.id, user_id: userInfo.id };

    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ meetup_id: m.id, user_id: user.id }),
    };

    setUserMeetup(userMeetup);

    fetch("/usermeetup/delete", configObj);
  };

    return (
      <div className="LeftComponent">
        <h2>Upcoming Meetups</h2>
        {user.meetups &&
          user.meetups.map((m) => {
            return (
              <MeetupCard
                key={m.id}
                meetup={m}
                leaveMeetup={leaveMeetup}
                user={user}
                setUser={setUser}
              />
            );
          })}
      </div>
    );
  }