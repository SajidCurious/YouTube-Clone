import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import React from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import VideoDetail from "./VideoDetail";
import ChannelDetail from "./ChannelDetail";
import SearchFeed from "./SearchFeed";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/videos" element={<VideoDetail />} />
          <Route path="/channels" element={<ChannelDetail />} />
          <Route path="/feed" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
