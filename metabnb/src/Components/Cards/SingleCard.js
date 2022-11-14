import { Box, CardContent, Rating, Typography } from "@mui/material";
import React from "react";
import BeachHouse from "../../Images/BeachHouse.png";

const SingleCard = () => {
  return (
      <Box
        sx={{
          maxWidth: 292,
          height: "372",
          border: "1px solid #D7D7D7",
          borderRadius: 5,
          justifyContent: "center",
        }}
      >
        <Box sx={{ margin: 1.5 }}>
          <img src={BeachHouse} alt="metahouse" width="100%" />
          <Box sx={{ height: 75}}>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 1 }}>
              <Typography variant="p" fontSize={15}>
                Desert King
              </Typography>
              <Typography variant="p" fontSize={15} fontWeight={600}>
                1MBT per night
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontSize={15}>2345km away</Typography>
              <Typography fontSize={15}>available for 2 weeks</Typography>
            </Box>
            <Box>
              <Rating name="read-only" value="5" readOnly color="red" size="small" />
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default SingleCard;
