import React, { useState } from "react";

export default function RightComponent({ userTopics, userDetails, meetups, setMeetups, user, setUser }) {

  const [topic, setTopic] = useState("");

console.log(user.topics)

  function deleteTopic(t) {
    alert("Topic Deleted!");

    const body = { topic_id: t.id, user_id: user.id };

    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("/usertopic/delete", configObj);
      };
      // setTimeout(() => {
      //   rerender();
      // }, 1000);
  // };

    return (
      <div className="RightComponent">
        <h2>Cuisine Interests</h2>
        {user.topics &&
          user.topics.map((t) => {
            return (
              <>
              <p>
                {t.topic_name}
                </p>
                <p>
                {t.description}
                </p>
                <p>
                <button
                  onClick={() => deleteTopic(t)}
                  className="DeleteBtn"
                >
                  X
                </button>
              </p>
              </>
            );
          })}
      </div>
    );
  }