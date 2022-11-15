import { Box } from "@mui/material";
import React from "react";
import BannerSVG from "./BannerSVG";
import BannerText from "./BannerText";

const BannerMain = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        marginTop: {xs: 2, sm: 6},
        margin: {xs: 3, sm: 6},
      }}
    >
      <BannerText />
      <BannerSVG />
    </Box>
  );
};

export default BannerMain;
