import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {BASEURL} from '../../../utils/BASEURL'
import axios from "axios";
const initialState = {
  loading:false,
  allVideos: null,
  specificVideo:null,
  error:""
};

export const getAllVideos = createAsyncThunk("videos", async () => {
  try {
  const result = await axios.get(`${BASEURL}/videos/getAllVideos`);
 console.log(result);
  return result;
  } catch (error) {
    console.log(error);
  }
  
});

const videoReducer = createSlice({
  name: "video",
  initialState,
  reducers: {
    setSpecificVideo: (state, action) => {
        const clickedVideo = action.payload;
        if(clickedVideo.id===state.specificVideo.id){
          return
        }
        // const clickedVideoIndex = state.allVideos.findIndex(
        //   (video) => video.id === clickedVideo.id
        // );
  
        // if (clickedVideoIndex !== -1) {
        //   // Remove the clicked video from allVideos array
        //   state.allVideos.splice(clickedVideoIndex, 1);
  
        //   // Add the previously "big player" video to the end of allVideos array
        //   if (state.specificVideo) {
        //     state.allVideos.push(state.specificVideo);
        //   }
  
        //   // Set the specificVideo state to the clicked video
        //   state.specificVideo = clickedVideo;
        // }
        state.specificVideo = clickedVideo;
      },
  },
  extraReducers: {
    [getAllVideos.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllVideos.fulfilled]: (state, { payload}) => {
      state.loading = false;
      if (payload.error) {
        state.error = payload.error;
      } else {
        state.specificVideo = payload.data.AllVideos[0]; // Remove and store the first object
        state.allVideos = payload.data.AllVideos; // Assign the modified array to allVideos
        
      }
    },
  },
});
export const {setSpecificVideo} = videoReducer.actions;
export default videoReducer.reducer;