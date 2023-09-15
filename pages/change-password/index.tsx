import { Alert, Avatar, Button, Snackbar } from "@mui/material";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Loading } from "components/Loading";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Utils } from "src/helpers/utils";
import ChangePasswordViewModel from "./change-password-view-model";

const ChangePasswordPage = () => {
  const { changePasswordObject, isLoading, onSubmitClicked } =
    ChangePasswordViewModel();

  const [oldPasswordField, setOldPasswordField] = useState<string>("");
  const [newPasswordField, setNewPasswordField] = useState<string>("");
  const [newPasswordConfirmField, setNewPasswordConfirmField] =
    useState<string>("");

  useEffect(() => {
    if (!Utils.isLoggedIn()) Router.push("/login");
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Loading isLoading={isLoading} />
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Ubah Password</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box>
                    <Breadcrumbs aria-label="breadcrumb">
                      <Typography color="text.primary">
                        Ubah Password
                      </Typography>
                    </Breadcrumbs>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={12} md={12} margin={0.5} padding={1}>
                <TextField
                  id="old-password-field"
                  defaultValue={oldPasswordField}
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
                  defaultValue={newPasswordField}
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
                  defaultValue={newPasswordConfirmField}
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    onSubmitClicked(
                      oldPasswordField,
                      newPasswordField,
                      newPasswordConfirmField
                    );
                  }}
                >
                  Simpan
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChangePasswordPage;
