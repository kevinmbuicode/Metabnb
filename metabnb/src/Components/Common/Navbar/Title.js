import { Box } from "@mui/material";
import React from "react";
import TitleVector from "../../../Images/TitleVector.svg";
import TitleLogo from "../../../Images/TitleLogo.svg";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Box flex={1} sx={{ marginLeft: {xs: 0, sm: 4}, alignItems: "center", display: "flex" }}>
      <Link to="/">
        <Box sx={{ marginLeft: {xs: 0, sm: 4}, alignItems: "center", display: "flex" }}>
          <img src={TitleLogo} alt="Logo" height="35" width="50" />
          <Box sx={{ width: {xs: "80%", sm: 70}}}><img src={TitleVector} alt="Logo" height="60" width="120" /></Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Title;
