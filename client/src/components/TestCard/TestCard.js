import React, { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
// import Flippy, { FrontSide, BackSide } from "react-flippy";

export default function TestCard({ id, meetup, joinMeetup, user, setUser, handleRemoveMeetup}) {

  console.log(meetup);
  console.log(meetup.topic);
  // console.log(meetup.topic.topic_name);

    const ref = useRef();

    // console.log(meetup.topic["topic_name"])
    return (
      
    <div onClick={() => joinMeetup(meetup)}>
    <Flippy
      flipOnHover={true} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '175px', height: '160px' }} /// these are optional style, it is not necessary
    >
        <FrontSide
          style={{
            backgroundColor: "transparent",
            borderRadius: "10px",

          }}
        >
          <img
            src={meetup.image}
            alt="meetup"
            width="140"
            height="130"
          />
          {/* <button onClick={() => { ref.current.toggle(); }}></button> */}
        </FrontSide>
        
        <BackSide
          style={{
            backgroundColor: "black",
            color: "#FFFFFF",
            fontSize: "10px",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          <h1>{meetup.title}</h1>
          <h3>{meetup.location}</h3>
          <h3>{meetup.date}</h3>
          {/* <h3>{meetup.topic["topic_name"]}</h3> */}
          <button className="delete-button">Remove</button>
        </BackSide>
      </Flippy>
      </div>
    );
  }