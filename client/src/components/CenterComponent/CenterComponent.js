import React from "react";
import MeetupList from "../MeetupList/MeetupList";

export default function CenterComponent({ filteredMeetups, joinMeetup }) {

    return (
      <div className="CenterComponent">
        <div className="SpacingDiv">
          <MeetupList
            meetups={filteredMeetups}
            joinMeetup={joinMeetup}
          />
        </div>
      </div>
    );
  }