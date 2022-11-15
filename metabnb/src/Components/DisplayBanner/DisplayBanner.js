import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import ThreeSVGS from "../../Images/DisplayBanner.svg";

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
        height: "90vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "25%",
          display: "flex",
          flexDirection: "column",
          marginLeft: 3,
          marginRight: 4,
          gap: 4
        }}
      >
        <Typography variant="h3" color="white" fontWeight={700}>
          Metabnb NFTs
        </Typography>
        <Typography variant="p" color="white" fontWeight={500}>
          Discover our NFT gift card collection. Loyal customers get amazing
          gift cards which are traded as NFTs. These NFTs give our customers
          loads of exclusive services
        </Typography>
        <Box>
          <LearnButton variant="contained">Learn More</LearnButton>
        </Box>
      </Box>
      <Box sx={{ width: "50%", display: "flex",justifyContent: "center" }}>
        <img src={ThreeSVGS} alt="twisted_houses" height="600"/>
      </Box>
    </Box>
  );
};

export default DisplayBanner;
