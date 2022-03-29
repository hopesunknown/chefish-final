import React from "react";

export default function SearchBar({ searchWord, handleChange, meetups, setMeetups }) {

    return (
      <div>
        <form>
          <label>
          <span className="iconify" data-icon="et-magnifying-glass" data-inline="false"></span>
            <input  
              className="Search"
              type="text"
              name="name"
              placeholder="Search meetups"
              onChange={(event) => handleChange(event)}
            />
          </label>
          <input type="submit" value="Submit" className="Submit" />
        </form>
      </div>
    );
  }