import React, { useState } from 'react'

export default function MeetupDetails({ user, setUser, clickedMeetup, handleClickedMeetup }) {
  const [content, setContent] = useState("");
  // const [userId, setUserId] = useState(user.id);

  function handleClick(clickedMeetup) {
    alert("Meetup Saved!");

    fetch("/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
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
        user_id: user.id,
        meetup_id: clickedMeetup.id,
        content: content,
      }),
    })
    setContent(content);
    setTimeout(() => {
      handleClickedMeetup(clickedMeetup);
    }, 1000);
  };

  // function handleDelete(){
  //   fetch(`/meetups/${id}`, { 
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   handleDeleteMeetup(id)
  // }

  // <button className="delete-button" onClick={handleDelete}>Remove Comment</button>

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
                return <><p style={{ textAlign: "center" }}>"{c.content}"</p>
                </>;
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
            <hr className="hr"/>
            <form onSubmit={handleSubmit}>
              <label> Did you attend this event?<br/>Leave a comment about your experiences:</label>
              <br />
              <input
                type="textarea"
                value={content}
                onChange={handleCommentChange}
                className="comment-box"
              ></input>
              <br />
              <input type="submit"></input>
            </form>
          </div>
        ) : null}
      </div>
    );
  }