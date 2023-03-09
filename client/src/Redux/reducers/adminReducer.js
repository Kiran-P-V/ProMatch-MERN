import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   admin: null,
  token: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminLogin: (state, action) => {
      state.token = action.payload;
    },
    setAdminLogout: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const adminActions = adminSlice.actions;

export default adminSlice.reducer;
