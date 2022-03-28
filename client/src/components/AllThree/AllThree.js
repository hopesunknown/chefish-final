import React from "react";
import LeftComponent from "../LeftComponent/LeftComponent";
import CenterComponent from "../CenterComponent/CenterComponent";
import MeetupDetails from "../MeetupDetails/MeetupDetails";

export default function AllThree({ user, setUser, meetups, setMeetups, filteredMeetups, comments, joinMeetup, clickedMeetup, handleClickedMeetup }) {

    return (
      <div className="AllThree">
        <LeftComponent
          user={user}
          setUser={setUser}
          meetups={meetups}
          setMeetups={setMeetups}
          comments={comments}
        />
        <CenterComponent
          user={user}
          setUser={setUser}
          meetups={meetups}
          setMeetups={setMeetups}
          // filteredMeetups={filteredMeetups}
          joinMeetup={joinMeetup}
        />
        <MeetupDetails
          user={user}
          setUser={setUser}
          clickedMeetup={clickedMeetup}
          handleClickedMeetup={handleClickedMeetup}
          meetups={meetups}
          setMeetups={setMeetups}
        />
      </div>
    );
  }