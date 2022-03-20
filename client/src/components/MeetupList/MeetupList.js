import React, { useState, useEffect } from "react";
import TestCard from "../TestCard/TestCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchMeetups } from "../../reducers/meetupsSlice";

export default function MeetupList({ meetups, joinMeetup }) {
  const selectMeetup = useSelector((state) => state.meetups.entities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeetups());
  }, [dispatch]);

  console.log(selectMeetup);

    return (
      <div className="MeetupList">
        <div className="columns">
          <div className="column">
            {" "}
            {selectMeetup.map((meetup) => {
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

    //   <div>
    //   {meetupPics.map((pic) => (
    //     <img key={pic.id} src={pic.url} alt="meetup" />
    //   ))}
    // </div>
    );
  }