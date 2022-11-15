import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import VectorFooter from "../../../Images/VectorFooter.svg";
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
        padding: 4,
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={VectorFooter} alt="Logo" height="38" />
          <Typography variant="h4" fontWeight="bold">
            Metabnb
          </Typography>
        </Box>
        <Box>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </Box>
        <p>&copy; 2022 Metabnb</p>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: 4 }}>
        <Typography variant="h6" fontWeight="bold">
          Community
        </Typography>
        <p>NFT</p>
        <p>Tokens</p>
        <p>Landlords</p>
        <p>Discord</p>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: 4 }}>
        <Typography variant="h6" fontWeight="bold">
          Places
        </Typography>
        <p>Castle</p>
        <p>Farms</p>
        <p>Beach</p>
        <p>Learn more</p>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: 4 }}>
        <Typography variant="h6" fontWeight="bold">
          About us
        </Typography>
        <p>Road map</p>
        <p>Creators</p>
        <p>Career</p>
        <p>Contact us</p>
      </Box>
    </Box>
  );
};

export default Footer;
