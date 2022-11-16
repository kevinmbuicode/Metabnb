import React from "react";
import Title from "./Title";
import DirectoryTabs from "./DirectoryTabs";
import ButtonConnect from "./ButtonConnect";
import { Box } from "@mui/material";
import LongMenu from "./Menu";


const Navbar = () => {

  return (
    <>
    <Box sx={{ display: {xs: "none", sm: "flex"}, justifyContent: "space-between" }}>
      <Title />
      <DirectoryTabs />
      <ButtonConnect />
    </Box>
      <Box sx={{ display: {xs: "flex", sm: "none"}, justifyContent: "space-between"}}>
        <Title/>
        <LongMenu/>
      </Box>
    </>
    
  );
};

export default Navbar;