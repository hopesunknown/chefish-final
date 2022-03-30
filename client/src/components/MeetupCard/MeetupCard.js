import React from 'react'

export default function MeetupCard({ leaveMeetup, meetup, user, setUser, handleClick }) {

    return (
      <div>
        <div className="MeetupCard" onClick={handleClick}>
          <h3>{meetup.title}</h3>
          <h4>{meetup.date} at {meetup.time}</h4>
          <h4>{meetup.location}</h4>
          <button className="leave-meetup-btn"
          onClick={() => leaveMeetup(meetup)}
          >Leave Meetup</button>
        </div>
      </div>
    );
  }