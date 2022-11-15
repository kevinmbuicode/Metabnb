import { Box, Button, styled, TextField, Typography } from "@mui/material";
import React from "react";

const BannerText = () => {
  const SearchButton = styled(Button)({
    border: "1px solid #A02279",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    cursor: "pointer",
    backgroundColor: "#A02279",
    fontWeight: 700,
    color: "white",
    "&:hover": {
      backgroundColor: "#9A1663",
      color: "gold",
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 4,
      }}
    >
      <Box sx={{ marginBottom: 2}}>  
      <Typography variant="h4">
        Rent a Place away from Home in the Metaverse
      </Typography>
      </Box>
      <Box sx={{ marginBottom: 2}}>
      <Typography variant="p">
        We provide you access to luxury and affordable houses in the metaverse,
        get a chance to turn your imagination to reality at your comfort zone
      </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <TextField
          id="outlined-search"
          label="Search for location"
          type="search"
          variant="outlined"
          size="small"
        />
        <div class="input-group-append">
          <SearchButton variant="contained">Search</SearchButton>
        </div>
      </Box>
    </Box>
  );
};

export default BannerText;
