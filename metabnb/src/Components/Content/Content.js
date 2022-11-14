import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SingleCard from "../Cards/SingleCard";

const Content = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h4">Inspiration for your next adventure</Typography>
      <Box sx={{marginTop:4, margin: 2, justifyContent: "space-between"}}>
      <Grid container spacing={3}>
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
      </Grid>
      </Box>
    </Box>
  );
};

export default Content;
