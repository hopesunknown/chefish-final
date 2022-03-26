import React, { useState } from "react";
import LeftComponentProfile from "../LeftComponentProfile/LeftComponentProfile";
import RightComponent from "../RightComponent/RightComponent";
import CenterComponentProfile from "../CenterComponentProfile/CenterComponentProfile";
import NewMeetupForm from "../NewMeetupForm/NewMeetupForm";

export default function AllThreeProfile({ user, setUser, meetups, setMeetups }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  };

  console.log(user);
  console.log(meetups);

    // const user = {
    //   id: userInfo.id,
    //   first_name: userInfo.first_name,
    //   email: userInfo.email,
    //   password: userInfo.password,
    //   meetups: userInfo.meetups,
    //   topics: userInfo.topics
    // };
    

    return (
      <div className="AllThree">
        <LeftComponentProfile
        user={user}
        setUser={setUser}
          // userMeetups={userInfo.meetups}
          // userDetails={user}
          meetups={meetups}
          setMeetups={setMeetups}
        />
        {clicked ? (
          <NewMeetupForm user={user} setUser={setUser} meetups={meetups} setMeetups={setMeetups}/>
        ) : (
          <CenterComponentProfile
            // userDetails={user}
            handleClick={handleClick}
            user={user}
            setUser={setUser}
            meetups={meetups}
            setMeetups={setMeetups}
          />
        )}

        <RightComponent
          // userTopics={userInfo.topics}
          // userDetails={user}
          meetups={meetups}
          setMeetups={setMeetups}
          user={user}
          setUser={setUser}
        />
      </div>
    );
  }