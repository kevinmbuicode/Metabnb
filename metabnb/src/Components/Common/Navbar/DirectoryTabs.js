import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DirectoryTabs = () => {
  return (
    <Box
      flex={2}
      sx={{ display: "flex", justifyContent: "space-around", marginTop: 2 }}
    >
      <Link to="/" style={{ textDecoration: "none"}}>
        <Typography sx={{ color: "black", cursor: "pointer"}}>Home</Typography>
      </Link>
      <Link to="/places" style={{ textDecoration: "none"}}>
        <Typography sx={{ color: "black", cursor: "pointer"}}>Places to stay</Typography>
      </Link>
      <Typography>NFTs</Typography>
      <Typography>Community</Typography>
    </Box>
  );
};

export default DirectoryTabs;
