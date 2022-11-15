import { Box } from "@mui/material";
import React from "react";
import BeachShop from "../../../Images/BeachShop.svg";
import CastleHouse from "../../../Images/CastleHouse.svg";
import CandyHouse from "../../../Images/CandyHouse.svg";
import MetaSuit from "../../../Images/MetaSuit.svg";
// import "./BannerSVG.css";

const BannerSVG = () => {
  return (
    <Box sx={{ display: "flex"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          marginTop: 9,
          marginLeft: 3,
          marginRight: 1,
        }}
      >
        <img src={MetaSuit} alt="SummerHouse" height="165" />
        <img src={CandyHouse} alt="SummerHouse" height="165" />
      </Box>
      <Box
        sx={{  display: "flex", flexDirection: "column", gap: 1 }}
      >
        <img src={BeachShop} alt="SummerHouse" height="165" />
        <img src={CastleHouse} alt="SummerHouse" height="165" />
      </Box>
    </Box>
  );
};

export default BannerSVG;
