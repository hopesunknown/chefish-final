import React, { useState, useEffect } from 'react'

export default function MeetupDetails({ user, setUser, clickedMeetup, handleClickedMeetup }) {
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState(user.id);

  function handleClick(clickedMeetup) {
    alert("Meetup Saved!");

    fetch("/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        meetup_id: clickedMeetup.id
      }),
    })
  };

  function handleCommentChange(event) {
    setContent(event.target.value) };

  function handleSubmit(event) {
    alert("Comment Submitted!");
    event.preventDefault();

    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        meetup_id: clickedMeetup.id,
        content: content,
      }),
    })
    setContent(content);
    setTimeout(() => {
      handleClickedMeetup(clickedMeetup);
    }, 1000);
  };

    return (
      <div className="MeetupDetails">
        {clickedMeetup ? (
          <div>
            <h1>{clickedMeetup.title}</h1>
            Date: {clickedMeetup.date}
            <br></br>
            Time: {clickedMeetup.time}
            <br></br>
            Location: {clickedMeetup.location}
            <h3>Attendees</h3>
            {clickedMeetup.users &&
              clickedMeetup.users.map((u) => {
                return <p>{u.first_name}</p>;
              })}
            <h3>Comments </h3>
            {clickedMeetup.comments &&
              clickedMeetup.comments.map((c) => {
                // console.log(c)
                return <p style={{ textAlign: "center", backgroundColor: "WhiteSmoke" }}>"{c.content}"</p>;
              })}
            <br />
            <button
              className="SignInBtn"
              onClick={() => handleClick(clickedMeetup)}
            >
              Join Meetup
            </button>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <label> Add a comment about this meetup:</label>
              <br />
              <input
                type="textarea"
                value={content}
                onChange={handleCommentChange}
              ></input>
              <br />
              <input type="submit"></input>
            </form>
          </div>
        ) : null}
      </div>
    );
  }