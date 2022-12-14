import { Box } from "@mui/material";
import React from "react";
import BeachShop from "../../../Images/BeachShop.svg";
import CastleHouse from "../../../Images/CastleHouse.svg";
import CandyHouse from "../../../Images/CandyHouse.svg";
import MetaSuit from "../../../Images/MetaSuit.svg";
// import "./BannerSVG.css";

const BannerSVG = () => {
  return (
    <Box sx={{ display: "flex", marginTop: 2}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          marginTop: 9,
          marginLeft: {xs: 0, sm: 3},
          marginRight: {xs: 0, sm: 1},
        }}
      >
        <img src={MetaSuit} alt="SummerHouse" height="165" />
        <img src={CandyHouse} alt="SummerHouse" height="165" />
      </Box>
      <Box
        sx={{  display: "flex", flexDirection: "column", gap: 1, width: {xs: "100%", sm: "55%"} }}
      >
        <img src={BeachShop} alt="SummerHouse" height="165" />
        <img src={CastleHouse} alt="SummerHouse" height="165" />
      </Box>
    </Box>
  );
};

export default BannerSVG;
