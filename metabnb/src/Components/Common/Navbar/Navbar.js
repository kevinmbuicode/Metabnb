import React from 'react';
import Title from './Title';
import DirectoryTabs from './DirectoryTabs';
import ButtonConnect from './ButtonConnect';
import { Box } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between"}}>
      <Title/>
      <DirectoryTabs/>
      <ButtonConnect/>
    </Box>
  )
}

export default Navbar;