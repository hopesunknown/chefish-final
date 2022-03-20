import React from 'react'

export default function MeetupCard({ leaveMeetup, meetup, handleClick }) {

    return (
      <div>
        <div className="MeetupCard" onClick={handleClick}>
          <h3>{meetup.title}</h3>
          <button className="Submit"
          onClick={() => leaveMeetup(meetup)}
          >Leave Meetup</button>
        </div>
      </div>
    );
  }