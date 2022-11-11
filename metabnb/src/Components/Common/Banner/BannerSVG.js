import { Box } from "@mui/material";
import React from "react";
import SummerHouse from "../../../Images/SummerHouse.jpeg";
import "./BannerSVG.css";

const BannerSVG = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginTop: 9,
          width: 250,
          marginRight: 1,
        }}
      >
        <img src={SummerHouse} alt="SummerHouse" height="165" width="250" />
        <img src={SummerHouse} alt="SummerHouse" height="165" width="250" />
      </Box>
      <Box
        sx={{ width: 250, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <img src={SummerHouse} alt="SummerHouse" height="165" width="250" />
        <img src={SummerHouse} alt="SummerHouse" height="165" width="250" />
      </Box>
    </Box>
  );
};

export default BannerSVG;
