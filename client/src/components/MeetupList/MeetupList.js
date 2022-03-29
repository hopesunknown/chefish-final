import React from "react";
import TestCard from "../TestCard/TestCard";

export default function MeetupList({ meetups, joinMeetup, user, setUser }) {

  console.log(meetups)

    return (
      <div className="MeetupList">
        <div className="columns">
          <div className="column">
            {" "}
            {meetups && meetups.map((meetup) => {
              return (
                <TestCard
                  key={meetup.id}
                  meetup={meetup}
                  joinMeetup={joinMeetup}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }