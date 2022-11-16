import React from "react";
import Title from "./Title";
import DirectoryTabs from "./DirectoryTabs";
import ButtonConnect from "./ButtonConnect";
import { Box } from "@mui/material";
import LongMenu from "./Menu";


const Navbar = () => {

  return (
    <Box sx={{ display: {xs: "none", sm: "flex"}, justifyContent: "space-between" }}>
      <Title />
      <DirectoryTabs />
      <ButtonConnect />
      <Box sx={{ display: {xs: "!flex", sm: "none"}}}>
        <LongMenu/>
      </Box>
    </Box>
    
  );
};

export default Navbar;