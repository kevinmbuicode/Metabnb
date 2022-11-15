import React from "react";
import { Box, Button, styled, Modal, Typography } from "@mui/material";
import MetaMask from "../../../Images/MetaMask_Fox.svg.png";
import WalletConnect from "../../../Images/WalletConnect.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 250,
  borderRadius: 5,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};

const ButtonConnect = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const CustomButton = styled(Button)({
    border: "1px solid #A02279",
    borderRadius: 5,
    padding: 10,
    height: 45,
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
      <CustomButton variant="contained" onClick={handleOpen}>
        Connect wallet
      </CustomButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4">
            Connect a wallet
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Choose your preferred wallet:
          </Typography>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#F8F9FA",
              border: "1px solid #CFD8DC",
              borderRadius: 2,
              gap: 2,
              alignItems: "center",
              marginTop: 1,
              height: 60,
              paddingLeft: 2,
              "&:hover": {
                backgroundColor: "#9A1663",
                color: "gold",
              },
            }}
          >
            <img src={MetaMask} alt="Fox" height="50" width="50" />
            <Typography variant="h5" fontWeight="bold">Metamask</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#F8F9FA",
              border: "1px solid #CFD8DC",
              borderRadius: 2,
              gap: 2,
              alignItems: "center",
              marginTop: 1,
              height: 60,
              paddingLeft: 2,
              "&:hover": {
                backgroundColor: "#9A1663",
                color: "gold",
              },
            }}
          >
            <img src={WalletConnect} alt="Fox" height="50" width="50"/>
            <Typography variant="h5" fontWeight="bold">WalletConnect</Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ButtonConnect;
