import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#1D1D1E",
        color: "#F7F7F7",
        height: 350,
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h4">Metabnb</Typography>
        <Box>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </Box>
        <p>&copy; 2022 Metabnb</p>
      </Box>
      <Box>
        <Typography variant="h5">Community</Typography>
        <p>NFT</p>
        <p>Tokens</p>
        <p>Landlords</p>
        <p>Discord</p>
      </Box>
      <Box>
        <Typography variant="h5">Places</Typography>
        <p>Castle</p>
        <p>Farms</p>
        <p>Beach</p>
        <p>Learn more</p>
      </Box>
      <Box>
        <Typography>About us</Typography>
        <p>Road map</p>
        <p>Creators</p>
        <p>Career</p>
        <p>Contact us</p>
      </Box>
    </Box>
  );
};

export default Footer;
