import React from 'react';
import { Box, Typography } from '@mui/material'

const DirectoryTabs = () => {
  return (
    <Box flex={2} sx={{ display: "flex", justifyContent: "space-around", marginTop: 2}}>
        <Typography>Home</Typography>
        <Typography>Places to stay</Typography>
        <Typography>NFTs</Typography>
        <Typography>Community</Typography>
    </Box>
  )
}

export default DirectoryTabs;