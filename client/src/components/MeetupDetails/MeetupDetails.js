import React, { useState, useEffect } from 'react';
import EditComment from './EditComment';

export default function MeetupDetails({ user, setUser, clickedMeetup, handleClickedMeetup }) {
  const [content, setContent] = useState("");
  // const [userId, setUserId] = useState(user.id);
  const [commentData, setCommentData] = useState([]);
  const [edit, setEdit] = useState(true);

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

  useEffect(() => {
    fetch("/comments")
    .then((r) => r.json())
    .then((comments) => { setCommentData(comments) });
  }, []);

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

  function handleUpdatedComment(updatedCommentObj) {
    // const editedComments = commentData.map((comment) => {
    //   if (comment.id === updatedCommentObj.id) {
    //     return updatedCommentObj;
    //   } else {
    //     return comment;
    //   }
    // });
    // setCommentData(editedComments);
    // window.location.reload();

    setCommentData(updatedCommentObj);
  }

  function handleSetEdit(){
    setEdit(!edit);
  }

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
                return <>{edit ? (
                  <>
                    <p 
                      style={{ textAlign: "center" }}>"{c.content}"
                    </p>
                    <button 
                      className="edit-comment-btn" 
                      onClick={handleSetEdit}>Edit Comment
                    </button>
                  </>
                  ) : (
                  <>
                    <EditComment 
                      id={c.id} 
                      user={user} 
                      comment={c} 
                      setEdit={setEdit} 
                      handleUpdatedComment={handleUpdatedComment} 
                    />
                    <button 
                      className="edit-comment-btn" 
                      onClick={handleSetEdit}>Edit</button>
                  </>)}
                </>;
              })}
            <br />
            <button
              className="join-meetup-btn"
              onClick={() => handleClick(clickedMeetup)}
            >
              Join Meetup
            </button>
            <br />
            <br />
            <hr className="hr"/>
            <form onSubmit={handleSubmit}>
              <label> Did you attend this event?<br/>
              Leave a comment about your experiences:
              </label>
              <br />
              <input
                type="textarea"
                value={content}
                onChange={handleCommentChange}
                className="comment-box"
              >
              </input>
              <br />
              <input 
              type="submit"
              className="comment-submit-btn">
              </input>
            </form>
          </div>
        ) : null}
      </div>
    );
  }