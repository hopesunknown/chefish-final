import React from "react";
import TestCard from "../TestCard/TestCard";

export default function MeetupList({ meetups, joinMeetup }) {

    return (
      // <div className="MeetupList">
      //   <div className="columns">
      //     <div className="column">
      //       {" "}
      //       {meetups.map((meetup) => {
      //         return (
      //           <TestCard
      //             key={meetup.id}
      //             meetup={meetup}
      //             joinMeetup={joinMeetup}
      //           />
      //         );
      //       })}
      //     </div>
      //   </div>
      // </div>

      <div>
      {meetupPics.map((pic) => (
        <img key={pic.id} src={pic.url} alt="meetup" />
      ))}
    </div>
    );
  }