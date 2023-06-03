import { createSlice } from "@reduxjs/toolkit";

// redcuers are data actions that help us set the different attributes of the initialState.
// They take in an action and previous state to execute the next state.

const initialState = {
  origin: null,
  destintaion: null,
  travelTimeToDestination: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeToDestination: (state, action) => {
      state.travelTimeToDestination = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeToDestination } =
  navSlice.actions;

// Selectors for grabbing spcific data when needed.

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeToDestination = (state) =>
  state.nav.travelTimeToDestination;

export default navSlice.reducer;
