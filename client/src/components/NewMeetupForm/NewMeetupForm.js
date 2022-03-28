import React, { useState } from "react";

export default function NewMeetupForm({ user, setUser }){

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [topicId, setTopicId] = useState(0);
    const [userId, setUserId] = useState(user.id);

  function handleTitleChange(event){
    setTitle(event.target.value);
  };

  function handleDateChange(event) {
    setDate(event.target.value);
  };

  function handleTimeChange(event) {
    setTime(event.target.value);
  };

  function handleLocationChange(event) {
    setLocation(event.target.value);
  };

  function handleImgURLChange(event) {
      setImage(event.target.value);
  };

  function handleTopicChange(event) {
    setTopicId(parseInt(event.target.value));
  };

  function handleSubmit(event) {
    alert("Meetup Created!");
    event.preventDefault();

    fetch("/meetups", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            date: date,
            time: time,
            location: location,
            image: image,
            topic_id: topicId,
            // user_id: userId
        }),
        }
    );
    setTimeout(() => {
    // setUser(user);
    }, 1000);
  };
console.log(topicId)
    return (
      <div className="CenterComponentProfile">
        <div className="SpacingDiv">
          <div className="UserProfile">
            <form className="OutsideForm" onSubmit={handleSubmit}>
              <h1>New Meetup Form</h1>
              <label>Title</label>
              <input 
                className="MeetupForm" 
                type="text"
                value={title}
                onChange={handleTitleChange}
              ></input>
              <br />
              <label>Date</label>
              <input  
                className="MeetupForm"
                type="text"
                value={date}
                onChange={handleDateChange}
              ></input>
              <br />
              <label>Time</label>
              <input 
                className="MeetupForm"
                type="text"
                value={time}
                onChange={handleTimeChange}
              ></input>
              <br />
              <label>Location</label>
              <input 
                className="MeetupForm"
                type="text"
                value={location}
                onChange={handleLocationChange}
              ></input>
              <br />
              <label>Image URL</label>
              <input 
                className="MeetupForm"
                type="text"
                value={image}
                onChange={handleImgURLChange}
              ></input>
              <br />
              <label>Topic</label>

              <select className="MeetupForm" id="topics" onChange={handleTopicChange}>
                <option value="" selected disabled hidden>
                  Choose Cuisine
                </option>
                <option value="1">Mexican</option>
                <option value="2">Thai</option>
                <option value="3">Chinese</option>
                <option value="4">Japanese</option>
                <option value="5">Italian</option>
                <option value="6">French</option>
                <option value="7">Southern</option>
                <option value="8">Spanish</option>
                <option value="9">Korean</option>
                <option value="10">Moroccan</option>
                <option value="11">Peruvian</option>
                <option value="12">Dutch</option>
              </select>
              <br />
              <br />
              <br />
              <input type="submit" className="SignInBtn"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }