import { Box, Rating, Typography } from "@mui/material";
import React from "react";


const SingleCard = ({items}) => {
  const { name, price, distance, duration, icon } = items

  return (
      <Box
        sx={{
          maxWidth: 292,
          border: "1px solid #D7D7D7",
          borderRadius: 5,
          justifyContent: "center",
          margin: 1
        }}
      >
        <Box sx={{ margin: 1.5 }}>
          <img src={icon} alt="metahouse" width="100%" />
          <Box >
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 1 }}>
              <Typography variant="p" fontSize={15}>
                {name}
              </Typography>
              <Typography variant="p" fontSize={15} fontWeight={600}>
                {price} per night
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontSize={15}>{distance}km away</Typography>
              <Typography fontSize={15}>available for {duration} {duration > 1 ? "weeks": "week"}</Typography>
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
