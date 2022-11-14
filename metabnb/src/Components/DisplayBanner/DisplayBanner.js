import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import DisplaySVG from "../../Images/SummerHouse.jpeg";

const DisplayBanner = () => {

    const LearnButton = styled(Button)({
        border: "1px solid #A02279",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        cursor: "pointer",
        backgroundColor: "white",
        fontWeight: 700,
        color: "#A02279",
        "&:hover": {
          backgroundColor: "#9A1663",
          color: "gold",
        },
      });


  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#A02279",
        height: 600,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "50%",
          border: "4px solid black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" color="white" fontWeight={700}>
          Metabnb NFTs
        </Typography>
        <Typography variant="p" color="white">
          Discover our NFT gift card collection. Loyal customers get amazing
          gift cards which are traded as NFTs. These NFTs give our customers
          loads of exclusive services
        </Typography>
        <Box>
          <LearnButton variant="contained">Learn More</LearnButton>
        </Box>
      </Box>
      <Box sx={{ width: "50%", border: "4px solid black" }}>
        <img src={DisplaySVG} alt="svg_images" height="150" width="150" />
        <img src={DisplaySVG} alt="svg_images" height="150" width="150" />
        <img src={DisplaySVG} alt="svg_images" height="150" width="150" />
      </Box>
    </Box>
  );
};

export default DisplayBanner;
