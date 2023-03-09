import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
