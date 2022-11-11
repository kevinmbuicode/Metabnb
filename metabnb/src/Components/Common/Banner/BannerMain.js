import { Box } from '@mui/material';
import React from 'react';
import BannerSVG from './BannerSVG';
import BannerText from './BannerText';

const BannerMain = () => {
  return (
    <Box sx={{ display: "flex", marginTop: 6, margin: 6, border: "3px solid pink"}}>
        <BannerText/>
        <BannerSVG/>
    </Box>
  )
}

export default BannerMain;