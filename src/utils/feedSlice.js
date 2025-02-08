import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   userFeed: null,
// };
const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    removeFeed: (state,action) => {
      return state.filter((r) => r._id !== action.payload);
    }
  }
});
export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
