import React from "react";
import { Box, Button, styled } from "@mui/material";

const ButtonConnect = () => {
  const CustomButton = styled(Button)({
    border: "1px solid #A02279",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
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
      flex={1}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: 3,
        marginTop: 1,
      }}
    >
      <CustomButton variant="contained">Connect wallet</CustomButton>
    </Box>
  );
};

export default ButtonConnect;
