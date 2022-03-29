import React from "react";
import MeetupList from "../MeetupList/MeetupList";

export default function CenterComponent({ user, setUser, meetups, joinMeetup }) {

    return (
      <div className="CenterComponent">
        <div className="SpacingDiv">
          <MeetupList
            user={user}
            setUser={setUser}
            meetups={meetups}
            joinMeetup={joinMeetup}
          />
        </div>
      </div>
    );
  }