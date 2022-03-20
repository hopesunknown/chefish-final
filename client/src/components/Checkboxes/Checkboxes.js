import React, { useEffect, useState } from "react";

export default function Checkboxes() {

    const [topics, setTopics] = useState([]);


function componentDidMount() {
    
useEffect(() => {
    fetch("/topics")
      .then((res) => res.json())
      .then((topics) => setTopics(topics));
  }, []);

  function handleChange(t) {
    setTopics(topics.map((topic) => topic.id === t.id ? { ...topic} : topic))}
  handleTopicClick(t);

    return (
      <div>
        <form className="CheckboxSection">
          {topics.map((topic) => {
            return (
              <div>
                <label className="checkbox">
                  
                  <input
                    key={topic.id}
                    type="checkbox"
                    className="Checkbox"
                    value={topic.topic_name}
                    onClick={() => handleChange(topic)}
                  />
                  <span class="checkmark"></span>
                  {topic.topic_name}
                </label>
              </div>
            );
          })}

          <br></br>
        </form>
      </div>
    );
}}