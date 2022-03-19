import React from "react";

function MeetupList({ meetupPics = [] }) {
  return (
    <div>
      {meetupPics.map((pic) => (
        <img key={pic.id} src={pic.url} alt="meetup" />
      ))}
    </div>
  );
}

export default MeetupList;