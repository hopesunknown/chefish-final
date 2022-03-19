import { configureStore } from "@reduxjs/toolkit";
import meetupsReducer from "../reducers/meetupsSlice";

const store = configureStore({
  reducer: {
    meetups: meetupsReducer,
  },
});

export default store;