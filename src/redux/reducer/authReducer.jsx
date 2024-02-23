import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {BASEURL} from '../../../utils/BASEURL'
import axios from "axios";
const initialState = {
  loading:false,
  userInfo: null,
  profileInfo:null,
  error:""
};

export const getProfile = createAsyncThunk("profile", async ({id}) => {
  try {
  const result = await axios.get(`${BASEURL}/users/getUserProfile/${id}`);

  return result;
  } catch (error) {
    console.log(error);
  }
  
});

const authreducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("green_auth_tkn",JSON.stringify(state.userInfo))
    },
    removeUserInfo: (state, action) => {
      localStorage.removeItem("green_auth_tkn")
      state.userInfo=null

    },
  },
  extraReducers: {
    [getProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [getProfile.fulfilled]: (state, { payload}) => {
      //yeh error aur message backend say ai ga ismay ham nay destructure kia hja
      state.loading = false;
      if (payload.error) {
        //agr user galat emial ya password enter krta ha tu yeh error ki state ko change kr day ga
        state.error = payload.error;
      } else {
        state.profileInfo = payload.data.user;
      }
    },
  },
});
export const { setUserInfo,removeUserInfo } = authreducer.actions;
export default authreducer.reducer;