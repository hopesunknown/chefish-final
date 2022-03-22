import React from "react";

export default function SearchBar({ searchWord, handleChange, meetups, setMeetups }) {

    return (
      <div>
        <form>
          <label>
          <span className="iconify" data-icon="et-magnifying-glass" data-inline="false"></span>
          Search cooking classes:
            <input  
              className="Search"
              type="text"
              name="name"
              onChange={(event) => handleChange(event)}
            />
          </label>
          <input type="submit" value="Submit" className="Submit" />
        </form>
      </div>
    );
  }