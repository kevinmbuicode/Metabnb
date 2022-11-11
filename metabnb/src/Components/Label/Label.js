import { Box, Typography } from "@mui/material";
import React from "react";
import OpenSea from "../../Images/OpenSea.png";
import Metamask from "../../Images/MetaMask_Fox.svg.png";

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
      <Box sx={{ display: "flex", justifyItems: "center" }}>
        <img src={Metamask} alt="Metamask" height="60" width="55" />
        <Typography variant="h4" color="white">
          MBToken
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <img src={Metamask} alt="Metamask" height="60" width="55" />
        <Typography variant="h4" color="white">
          Metamask
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <img src={OpenSea} alt="OpenSea" height="55" width="55" />
        <Typography variant="h4" color="white">
          OpenSea
        </Typography>
      </Box>
    </Box>
  );
};

export default Label;
