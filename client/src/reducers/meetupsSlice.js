import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMeetups = createAsyncThunk("meetups/fetchMeetups", () => {
  // return a Promise containing the data we want
  return fetch("/meetups")
    .then((response) => response.json())
    .then((data) => console.log(data));
});

const meetupsSlice = createSlice({
  name: "meetups",
  initialState: {
    entities: [], // array of meetups
    status: "idle", // loading state
  },
  reducers: {
    meetupAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push(action.payload);
    },
    meetupUpdated(state, action) {
      const meetup = state.entities.find((meetup) => meetup.id === action.payload.id);
      meetup.image = action.payload.image;
    },
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchMeetups.pending](state) {
      state.status = "loading";
    },
    [fetchMeetups.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export const { meetupAdded, meetupUpdated } = meetupsSlice.actions;

export default meetupsSlice.reducer;