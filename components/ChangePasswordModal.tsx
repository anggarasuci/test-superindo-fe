import { Style } from "components/styles";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FC, useEffect, useState } from "react";

type ChangePasswordProps = {
  isOpenModal: boolean;
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
  onSubmit: (
    oldPassword: string,
    newPassword: string,
    newPasswordConfirm: string
  ) => void;
  onClose: () => void;
};

const ChangePasswordModal: FC<ChangePasswordProps> = ({
  isOpenModal,
  oldPassword,
  newPassword,
  newPasswordConfirm,
  onSubmit,
  onClose,
}) => {
  const [oldPasswordField, setOldPasswordField] = useState<string>(oldPassword);
  const [newPasswordField, setNewPasswordField] = useState<string>(newPassword);
  const [newPasswordConfirmField, setNewPasswordConfirmField] =
    useState<string>(newPasswordConfirm);

  const handleOnSubmit = (
    oldPasswordParam: string,
    newPasswordParam: string,
    newPasswordConfirmParam: string
  ) => {
    onSubmit?.(
      (oldPassword = oldPasswordParam),
      (newPassword = newPasswordParam),
      (newPasswordConfirm = newPasswordConfirmParam)
    );
    handleOnClose();
  };

  const handleOnClose = () => {
    onClose?.();
  };

  return (
    <Style.StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={isOpenModal}
      onClose={() => {}}
    >
      <Box sx={{ margin: 1, width: 500 }}>
        <Paper
          variant="outlined"
          sx={{ padding: 1, margin: 0, backgroundColor: "primary.main" }}
        >
          <Grid item xs={12} md={12} margin={0.5} pl={1}>
            <Typography variant="h5" color="secondary.main">
              Ubah Password
            </Typography>
          </Grid>
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            padding: 1,
            marginTop: 0,
            backgroundColor: "background.default",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <TextField
                id="old-password-field"
                defaultValue={oldPassword}
                label="Password Lama"
                variant="outlined"
                color="primary"
                size="small"
                onChange={(e) => {
                  setOldPasswordField(e.currentTarget.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <TextField
                id="new-password-field"
                defaultValue={newPassword}
                label="Password Baru"
                variant="outlined"
                color="primary"
                size="small"
                onChange={(e) => {
                  setNewPasswordField(e.currentTarget.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <TextField
                id="new-password-confirm-field"
                defaultValue={newPasswordConfirm}
                label="Konfirmasi Password Baru"
                variant="outlined"
                color="primary"
                size="small"
                onChange={(e) => {
                  setNewPasswordConfirmField(e.currentTarget.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <Box sx={{ display: "flex" }}>
                <Grid sx={{ pr: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleOnSubmit(
                        oldPasswordField,
                        newPasswordField,
                        newPasswordConfirmField
                      );
                    }}
                  >
                    Simpan
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => {
                      handleOnClose();
                    }}
                  >
                    Tutup
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Style.StyledModal>
  );
};

export default ChangePasswordModal;
