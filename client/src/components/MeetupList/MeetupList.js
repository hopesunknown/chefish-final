import React, { useState, useEffect } from "react";
import TestCard from "../TestCard/TestCard";

export default function MeetupList({ meetups, joinMeetup, user, setUser, handleRemoveMeetup }) {

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
                  id={meetup.id}
                  meetup={meetup}
                  joinMeetup={joinMeetup}
                  handleRemoveMeetup={handleRemoveMeetup}
                />
              );
            })}
          </div>
        </div>
      </div>

    //   <div>
    //   {meetupPics.map((pic) => (
    //     <img key={pic.id} src={pic.url} alt="meetup" />
    //   ))}
    // </div>
    );
  }