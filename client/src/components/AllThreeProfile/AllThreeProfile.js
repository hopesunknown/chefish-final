import React, { useState } from "react";
import LeftComponentProfile from "../LeftComponentProfile/LeftComponentProfile";
import RightComponent from "../RightComponent/RightComponent";
import CenterComponentProfile from "../CenterComponentProfile/CenterComponentProfile";
import NewMeetupForm from "../NewMeetupForm/NewMeetupForm";

export default function AllThreeProfile({ userInfo, setUser, meetups, setMeetups }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  };

    const user = {
      id: userInfo.id,
      first_name: userInfo.first_name,
      email: userInfo.email,
      password: userInfo.password,
      meetups: userInfo.meetups,
      topics: userInfo.topics,
    };

    return (
      <div className="AllThree">
        <LeftComponentProfile
        user={userInfo}
        setUser={setUser}
          userMeetups={user.meetups}
        />
        {clicked ? (
          <NewMeetupForm user={userInfo} setUser={setUser}/>
        ) : (
          <CenterComponentProfile
            userDetails={user}
            handleClick={handleClick}
            user={userInfo}
            setUser={setUser}
          />
        )}

        <RightComponent
          userTopics={userInfo.topics}
          user={userInfo}
          setUser={setUser}
        />
      </div>
    );
  }