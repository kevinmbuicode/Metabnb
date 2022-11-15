import { Box, Typography } from "@mui/material";
import React from "react";
import OpenSea from "../../Images/OpenSea.svg";
import Metamask from "../../Images/Metamask.svg";
import MBToken from "../../Images/MBToken.svg";

const Label = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#A02279",
        height: 60,
      }}
    >
        <img src={MBToken} alt="Metamask" height="100%" width="155" />
        <img src={Metamask} alt="Metamask" height="100%" width="175" />
        <img src={OpenSea} alt="OpenSea" height="100%" width="155" />
    </Box>
  );
};

export default Label;
