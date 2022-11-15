import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SingleCard from "../Cards/SingleCard";
import data from "../../data/data.json";

const Content = () => {
  const Places = data.map((item) => {
    return <SingleCard key={item.id} items={item} />;
  });
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3}}>
        <Typography variant="h4" fontWeight={700}>Inspiration for your next adventure</Typography>
      </Box>
      <Box sx={{ marginTop: 4, margin: 2, justifyContent: "space-between" }}>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 4 }}
          sx={{ justifyContent: "space-around", margin: 1 }}
        >
          {Places}
        </Grid>
      </Box>
    </Box>
  );
};

export default Content;
