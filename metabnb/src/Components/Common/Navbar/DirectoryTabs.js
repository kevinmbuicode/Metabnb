import React from "react";
import { Box, Link, Typography } from "@mui/material";

const DirectoryTabs = () => {
  return (
    <Box
      flex={2}
      sx={{ display: "flex", justifyContent: "space-around", marginTop: 2 }}
    >
      <Link to="/"><Typography>Home</Typography></Link>
      <Link to="/places">
        <Typography>Places to stay</Typography>
      </Link>
      <Typography>NFTs</Typography>
      <Typography>Community</Typography>
    </Box>
  );
};

export default DirectoryTabs;
