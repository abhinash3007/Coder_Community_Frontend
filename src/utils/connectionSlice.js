import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: {
    userConnection: [],
  },  
  reducers: {
    addConnection: (state, action) => {
      state.userConnection = action.payload;
    },  
    removeConnection: (state) => {
      state.userConnection = null;
    }
  }
});
export const { addConnection, removeConnection } = connectionSlice.actions;
export default connectionSlice.reducer;
