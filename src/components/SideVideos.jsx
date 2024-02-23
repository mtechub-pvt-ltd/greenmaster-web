import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { setSpecificVideo } from "../redux/reducer/videoReducer";
function SideVideos({ direction }) {
  const { allVideos } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (idx) => {
    setHoveredCard(idx);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };
  const handleClick = (video) => {
    dispatch(setSpecificVideo(video));
  };
  return (
    <div>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="start"
        alignItems="start"
        gap={2}
      >
        {allVideos?.map((item, idx) => (
          <Box
            className={`videoCard ${hoveredCard === idx ? "hovered" : ""}`}
            key={idx}
            onMouseEnter={() => handleCardHover(idx)}
            onMouseLeave={handleCardLeave}
          >
            {<VideoCard video={item} handleClick={handleClick} />}
            {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
          </Box>
        ))}
      </Stack>
    </div>
  );
}

export default SideVideos;
