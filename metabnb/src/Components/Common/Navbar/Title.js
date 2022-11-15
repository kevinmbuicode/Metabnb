import { Box, Typography } from "@mui/material";
import React from "react";
import TitleVector from "../../../Images/TitleVector.svg";
import TitleLogo from "../../../Images/TitleLogo.svg";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Box flex={1} sx={{ marginLeft: 4, alignItems: "center", display: "flex" }}>
      <Link to="/">
        <Box sx={{ marginLeft: 4, alignItems: "center", display: "flex" }}>
          <img src={TitleLogo} alt="Logo" height="35" width="50" />
          <img src={TitleVector} alt="Logo" height="60" width="120" />
        </Box>
      </Link>
    </Box>
  );
};

export default Title;
