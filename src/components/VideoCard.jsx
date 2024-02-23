import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { BASEURL } from "../../utils/BASEURL";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
const VideoCard = ({ video,handleClick }) => (
  <Card
    sx={{
      width: "100%",
      maxWidth: "358px",
      boxShadow: "none",
      borderRadius: 0,
     
    }}
  >
    {/* <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }> */}
    <CardMedia
      image={`${BASEURL}/${video?.thumbnail}`}
      alt="video thumbnail"
      sx={{ width: { xs: "100%", sm: "358px" }, height: 180 , position: "relative"}}
    >
       {/* Centered play icon */}
       <div
       onClick={()=>handleClick(video)}
          style={{
            cursor:"pointer",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60px", // Adjust the size as needed
            height: "60px", // Adjust the size as needed
          }}
        >
          {/* Play icon */}
          <PlayArrowIcon
            style={{ fontSize: "30px", color: "white" }} // Set the desired size and color
          />
        </div>
    </CardMedia>
    
    {/* </Link> */}
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: "65px" }}>
      {/* <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } > */}
      <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
        {video.title.length > 80
          ? `${video.title.slice(0, 80)}...`
          : video.title}
      </Typography>

      {/* </Link> */}
      {/* <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} > */}
      <Typography variant="subtitle2" color="gray">
        {video?.description}
        {/* <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} /> */}
      </Typography>
      {/* </Link> */}
      
    </CardContent>
  </Card>
);

export default VideoCard;
