import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { FC } from "react";

type CustomConfirmDialogProps = {
  isOpen: boolean;
  id: string;
  title: string;
  message: string;
  onClose: (id: string, choose: "yes" | "no" | "") => void;
};

const CustomConfirmDialog: FC<CustomConfirmDialogProps> = ({
  isOpen,
  id,
  title,
  message,
  onClose,
}) => {
  const handleOnClose = (choose: "yes" | "no" | "") => {
    onClose?.(id, choose);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        handleOnClose("");
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            handleOnClose("no");
          }}
        >
          Tidak
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            handleOnClose("yes");
          }}
          autoFocus
        >
          Ya
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { CustomConfirmDialog };
