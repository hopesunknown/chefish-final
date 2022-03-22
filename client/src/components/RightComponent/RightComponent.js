// double check this code

import React, { useState } from "react";

export default function RightComponent({ userTopics }) {

  const [topic, setTopic] = useState("");

  function deleteTopic(t) {
    alert("Topic Deleted!");

    const body = { topic_id: t.id, user_id: window.userId };

    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("/usertopic/delete", configObj);
    this.setState({
        state: this.state,
      });
      setTimeout(() => {
        this.props.rerender();
      }, 1000);
  };

    return (
      <div className="RightComponent">
        <h1>Your Interests</h1>
        {userTopics &&
          userTopics.map((t) => {
            return (
               
              <p>
                {t.topic_name}{" "}
                <button
                  onClick={() => deleteTopic(t)}
                  className="DeleteBtn"
                >
                  x
                </button>
              </p>
            );
          })}
      </div>
    );
  }