import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
// import SearchContainer from "../SearchContainer/SearchContainer";
import AllThree from "../AllThree/AllThree";

const userId = 0;

export default function MainPage() {
  const [meetups, setMeetups] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [clickedMeetup, setClickedMeetup] = useState(null);

  useEffect(() => {
    fetch("/meetups")
      .then((response) => response.json())
      .then((meetups) => setMeetups(meetups));
  }, []);

  useEffect(() => {
    fetch(`/users/${window.userId}`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, []);

  useEffect(() => {
    fetch("/comments")
      .then((response) => response.json())
      .then((comments) => setComments(comments));
  }, []);

  function rerender(clickedMeetup) {
    fetch(`/meetups/${clickedMeetup.id}`)
      .then((response) => response.json())
      .then((meetup) => setClickedMeetup(meetup));
  };

  function handleChange(event) {
      setSearchWord(event)
  };

  function joinMeetup(meetup){
      setClickedMeetup(meetup)
  };

  const filteredMeetups = meetups.filter((meeting) =>
      meeting.topic.topic_name.includes(
        searchWord ||
          searchWord.charAt(0).toUpperCase() +
            searchWord.slice(1)
      )
    );

    return (
      <div>
        THIS THE MAIN PAGE
        <NavBar
          searchWord={searchWord}
          handleChange={handleChange}
        />
        <AllThree
          meetups={meetups}
          filteredMeetups={filteredMeetups}
          user={user}
          comments={comments}
          joinMeetup={joinMeetup}
          clickedMeetup={clickedMeetup}
          rerender={rerender}
        />
        <Footer />
      </div>
    );
  }