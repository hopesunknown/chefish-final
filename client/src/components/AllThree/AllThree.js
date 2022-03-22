import React from "react";
import LeftComponent from "../LeftComponent/LeftComponent";
// import RightComponent from "../RightComponent/RightComponent";
import CenterComponent from "../CenterComponent/CenterComponent";
import MeetupDetails from "../MeetupDetails/MeetupDetails";

export default function AllThree({ user, setUser, meetups, filteredMeetups, comments, joinMeetup, clickedMeetup, handleClickedMeetup }) {

    return (
      <div className="AllThree">
        <LeftComponent
          user={user}
          setUser={setUser}
          meetups={meetups}
          comments={comments}
        />
        <CenterComponent
          user={user}
          setUser={setUser}
          meetups={meetups}
          filteredMeetups={filteredMeetups}
          joinMeetup={joinMeetup}
        />
        <MeetupDetails
          user={user}
          setUser={setUser}
          clickedMeetup={clickedMeetup}
          handleClickedMeetup={handleClickedMeetup}
        />
      </div>
    );
  }