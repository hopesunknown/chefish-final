import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
// import SearchContainer from "../SearchContainer/SearchContainer";
import AllThree from "../AllThree/AllThree";

const userId = 0;

export default function MainPage({ user, setUser, meetups, setMeetups, handleLogOutClick, handleRemoveMeetup }) {
  // const [meetups, setMeetups] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [comments, setComments] = useState([]);
  const [clickedMeetup, setClickedMeetup] = useState(null);

  // useEffect(() => {
  //   fetch("/meetups")
  //     .then((response) => response.json())
  //     .then((meetups) => setMeetups(meetups));
  // }, []);

  useEffect(() => {
    fetch("/comments")
      .then((response) => response.json())
      .then((comments) => setComments(comments));
  }, []);

  function handleClickedMeetup(clickedMeetup) {
    fetch(`/meetups/${clickedMeetup.id}`)
      .then((response) => response.json())
      .then((meetup) => setClickedMeetup(meetup));
  };

  function handleChange(event) {
      setSearchWord(event.target.value)
  };

  function joinMeetup(meetup){
      setClickedMeetup(meetup)
  };

  // const filteredMeetups = meetups.filter((meeting) =>
  //     meeting.topic["topic_name"].includes(
  //       searchWord ||
  //         searchWord.charAt(0).toUpperCase() +
  //           searchWord.slice(1)
  //     )
  //   );

    return (
      <div>
        <NavBar
          searchWord={searchWord}
          // setSearchWord={setSearchWord}
          handleChange={handleChange}
          user={user}
          setUser={setUser}
          meetups={meetups}
          setMeetups={setMeetups}
          handleLogOutClick={handleLogOutClick}
        />
        <AllThree
          meetups={meetups}
          setMeetups={setMeetups}
          // filteredMeetups={filteredMeetups}
          user={user}
          setUser={setUser}
          comments={comments}
          joinMeetup={joinMeetup}
          clickedMeetup={clickedMeetup}
          handleClickedMeetup={handleClickedMeetup}
          handleRemoveMeetup={handleRemoveMeetup}
        />
        <Footer user={user} setUser={setUser} />
      </div>
    );
  }