import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SideVideos from "../../components/SideVideos";
import Navbar from "../../components/Navbar";
import '../../css/userPortal.css'
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../redux/reducer/videoReducer";
// import { Videos, Loader } from "./";
// import { fetchFromAPI } from "../utils/fetchFromAPI";
function Videos() {
  const dispatch=useDispatch()
  const {specificVideo}=useSelector((state)=>state.video)
  console.log(specificVideo);
useEffect(() => {
  dispatch(getAllVideos())
}, [])

  return (
    <>
     <Navbar/>
       <Box minHeight="100vh" style={{backgroundColor:'black'}}>
      
        <Stack direction={{ xs: "column", md: "row" }}>
            
          <Box flex={1}>
          {/* data-id={specificVideo?.video_link} */}
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}> 
              {/* <ReactPlayer url={specificVideo?.video_link} className="react-player" controls /> */}
              <div
                class="voomly-embed"
                key={specificVideo?.id}
                data-id={specificVideo?.video_link}
                data-ratio="1.777778"
                data-type="v"
                data-skin-color="rgba(117,117,117,1)"
                style={{width: "100%",height:"100%", aspectRatio: "1.77778 / 1", background: "linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%)", borderRadius: "10px"}}
              ></div>
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
               {specificVideo?.title}
              </Typography>
              
            </Box>
            
          </Box>
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
            
          >
            <SideVideos  direction="column" />
          </Box>
        </Stack>
      </Box> 
    </>
  );
}

export default Videos;
