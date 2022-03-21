import React from "react";
import LeftComponent from "../LeftComponent/LeftComponent";
// import RightComponent from "../RightComponent/RightComponent";
import CenterComponent from "../CenterComponent/CenterComponent";
import MeetupDetails from "../MeetupDetails/MeetupDetails";

export default function AllThree({ user, meetups, filteredMeetups, comments, joinMeetup, clickedMeetup, handleClickedMeetup }) {

    return (
      <div className="AllThree">
        <LeftComponent
          meetups={meetups}
          comments={comments}
        />
        <CenterComponent
          meetups={meetups}
          filteredMeetups={filteredMeetups}
          joinMeetup={joinMeetup}
        />
        <MeetupDetails
          user={user}
          clickedMeetup={clickedMeetup}
          handleClickedMeetup={handleClickedMeetup}
        />
      </div>
    );
  }