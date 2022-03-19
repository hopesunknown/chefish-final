import React, { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export default function TestCard({ key, meetup, joinMeetup }) {

    const ref = useRef();

    return (
    //   <div onClick={() => joinMeetup(meetup)}
    //   >
    //   <Flippy
    //     className="Flippy"
    //     flipOnHover={true} // default false
    //     flipOnClick={false} // default false
    //     flipDirection="horizontal" // horizontal or vertical
    //     ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
    //     // if you pass isFlipped prop component will be controlled component.
    //     // and other props, which will go to div
    //     style={{ width: "200px", height: "200px", padding: "20px"}} /// these are optional style, it is not necessary
    //   >

    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
    >
        <FrontSide
          style={{
            backgroundColor: "transparent",
            borderRadius: "15px",
          }}
        >
          <img
            src={meetup.image}
            alt="More Info"
            width="180"
            height="180"
          />
          <button onClick={() => { ref.current.toggle(); }}> Toggle via button</button>
        </FrontSide>
        
        <BackSide
          style={{
            backgroundColor: "#264C99",
            // backgroundColor: "#000000",
            color: "#FFFFFF",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          <h1>{meetup.title}</h1>
          <p>Location: {meetup.location}</p>
          <p>Date: {meetup.date}</p>
          <h5>Topic: {meetup.topic.topic_name}</h5>
        </BackSide>
      </Flippy>
    );
  }