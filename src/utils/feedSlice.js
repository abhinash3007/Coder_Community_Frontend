import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userFeed: null,
};
const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addFeed: (state, action) => {
      state.userFeed = action.payload;
    },
    removeFeed: (state) => {
      state.userFeed = null;
    }
  }
});
export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
