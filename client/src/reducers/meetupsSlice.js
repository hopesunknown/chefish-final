const initialState = {
    entities: [], // array of meetups
    status: "idle", // loading state
  };
  
  function meetupsReducer(state = initialState, action) {
    switch (action.type) {
      // sync actions
      case "meetups/meetupAdded":
        return {
          ...state,
          entities: [...state.entities, action.payload],
        };
      case "meetups/meetupRemoved":
        return {
          ...state,
          entities: state.entities.filter((meetup) => meetup.id !== action.payload),
        };
      case "meetups/meetupUpdated":
        return {
          ...state,
          entities: state.entities.map((meetup) =>
            meetup.id === action.payload.id ? action.payload : meetup
          ),
        };
  
      // async actions
      case "meetups/fetchMeetups/pending":
        return {
          ...state,
          status: "loading",
        };
      case "meetups/fetchMeetups/fulfilled":
        return {
          ...state,
          entities: action.payload,
          status: "idle",
        };
  
      default:
        return state;
    }
  }
  
  export default meetupsReducer;