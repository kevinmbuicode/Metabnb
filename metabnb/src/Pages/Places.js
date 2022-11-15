import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import SingleCard from '../Components/Cards/SingleCard';
import data from '../data/data.json'

const Places = () => {
  const OtherPlaces = data.map((item) => {
    return <SingleCard key={item.id} items={item} />;
  });
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginLeft: 4, marginRight: 10, marginTop: 4, marginBottom: 4}}>
        <Typography>Restaurant</Typography>
        <Typography>Cottage</Typography>
        <Typography>Castle</Typography>
        <Typography>Fantast city</Typography>
        <Typography>Beach</Typography>
        <Typography>Carbins</Typography>
        <Typography>Off-grid</Typography>
        <Typography>Farm</Typography>
        <Typography>Location</Typography>
      </Box>
      <Box>
      <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 4 }}
          sx={{ justifyContent: "space-around", margin: 1 }}
        >
          {OtherPlaces}
        </Grid>
      </Box>
    </Box>
  )
}

export default Places;