import React from "react";
import { Box, Link, Typography } from "@mui/material";

const DirectoryTabs = () => {
  return (
    <Box
      flex={2}
      sx={{ display: "flex", justifyContent: "space-around", marginTop: 2 }}
    >
      <Link to="/" sx={{textDecoration: "none", color: "black", cursor: "pointer"}}>
        <Typography>Home</Typography>
      </Link>
      <Link to="/places" sx={{textDecoration: "none", color: "black", cursor: "pointer"}}>
        <Typography>Places to stay</Typography>
      </Link>
      <Typography>NFTs</Typography>
      <Typography>Community</Typography>
    </Box>
  );
};

export default DirectoryTabs;
