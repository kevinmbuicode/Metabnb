import { Box } from '@mui/material';
import React from 'react'
import BannerMain from '../Components/Common/Banner/BannerMain';
import Content from '../Components/Content/Content';
import DisplayBanner from '../Components/DisplayBanner/DisplayBanner';
import Label from '../Components/Label/Label';

const Home = () => {
  return (
    <Box>
        <BannerMain/>
        <Label/>
        <Content/>
        <DisplayBanner/>
    </Box>
  )
}

export default Home;