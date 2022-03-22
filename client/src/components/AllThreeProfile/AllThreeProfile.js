import React, { useState } from "react";
import LeftComponentProfile from "../LeftComponentProfile/LeftComponentProfile";
import RightComponent from "../RightComponent/RightComponent";
import CenterComponentProfile from "../CenterComponentProfile/CenterComponentProfile";
import NewMeetupForm from "../NewMeetupForm/NewMeetupForm";

export default function AllThreeProfile({ userInfo, setUser }) {
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
          // rerender={rerender}
        />
        {clicked ? (
          <NewMeetupForm user={userInfo} setUser={setUser}/>
        ) : (
          <CenterComponentProfile
            userDetails={user}
            handleClick={handleClick}
            // rerender={rerender}
          />
        )}

        <RightComponent
          userTopics={userInfo.topics}
          // user={user}
          user={userInfo}
          setUser={setUser}
          // rerender={rerender}
        />
      </div>
    );
  }