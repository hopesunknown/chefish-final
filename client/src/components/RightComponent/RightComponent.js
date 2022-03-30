import React, { useState } from "react";

export default function RightComponent({ meetups, setMeetups, user, setUser }) {

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
        <h4>Get the latest food articles, recipes, and meetup notifications to your email about your selected interests from Chefish.</h4>
        <div className="cuisine-card">
        {user.topics &&
          user.topics.map((t) => {
            return (
              <div className="topic-card">
              <h3>
                {t.topic_name}
                </h3>
                <p>
                {t.description}
                </p>
                <p>
                <button
                  onClick={() => deleteTopic(t)}
                  className="delete-topic-btn"
                >
                  x
                </button>
              </p>
              </div>
            );
          })}
          </div>
      </div>
    );
  }