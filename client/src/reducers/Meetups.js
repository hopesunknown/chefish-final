import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MeetupList from "../../Components/MeetupList";
import { fetchMeetups } from "./meetupsSlice";

function Meetups() {
  const meetupPics = useSelector((state) => state.meetups.entities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeetups());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Meetup Stuff</h1>
      <MeetupList meetupPics={meetupPics} />
    </div>
  );
}

export default Meetups;