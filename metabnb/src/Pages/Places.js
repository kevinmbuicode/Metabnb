import { Box, Typography } from '@mui/material';
import React from 'react'
import SingleCard from '../Components/Cards/SingleCard';

const Places = () => {
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
      <SingleCard/>
      <SingleCard/>
      </Box>
    </Box>
  )
}

export default Places;