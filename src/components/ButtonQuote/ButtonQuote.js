import React from "react";
import "./ButtonQuote.css";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Form from "../FormDialog/Form";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(0),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(0),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 3 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const ButtonQuote = () => {
  const [openDialog, handleDisplay] = React.useState(false);

  const openDialogBox = () => {
    handleDisplay(true);
  };

  const handleClose = () => {
    handleDisplay(false);
  };

  return (
    <div className="outer-btn">
      <button className="inner-btn" onClick={openDialogBox}>
        Get a Quote
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openDialog}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Tell us what you need, and we will help you get the quotes
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Form action='http://localhost:8000/getquote/' method="post"/>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default ButtonQuote;