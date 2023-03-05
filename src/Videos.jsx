import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>{item.id.videoId && <VideoCard />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
