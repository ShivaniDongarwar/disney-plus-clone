import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", email: "", photo: "" };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin(state, action) {
      state.name = action?.payload?.name || initialState.name;
      state.email = action?.payload?.email || initialState.email;
      state.photo = action?.payload?.photo || initialState.photo;
    },
    setSignOut(state) {
      console.log("sate===>", state);
      state.name = null;
      state.email = null;
      state.photo = null;

      // state = {
      //   name: null,
      //   email: null,
      //   photo: null,
      // };
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice;
