import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copywright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copywright 2022 SM Media
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
