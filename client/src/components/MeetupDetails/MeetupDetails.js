import React, { useState, useEffect } from 'react'

// need to double-check this code

export default function MeetupDetails({ clickedMeetup, rerender }) {
  const [content, setContent] = useState("");

  function handleClick(clickedMeetup) {
    alert("Meetup Saved!");

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: window.userId,
        meetup_id: clickedMeetup.id
      }),
    };

    fetch("/join", configObj);
  };

  function handleCommentChange(event) {
    setContent(event.target.value) };

  function handleSubmit(event) {
    alert("Comment Submitted!");
    event.preventDefault();

    const body = {
      user_id: window.userId,
      meetup_id: clickedMeetup.id,
      content: content,
    };

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("/comments", configObj);
    setContent(content);
    setTimeout(() => {
      rerender(clickedMeetup);
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