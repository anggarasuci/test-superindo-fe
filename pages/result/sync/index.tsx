import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CustomAlert } from "components/CustomAlert";
import { Loading } from "components/Loading";
import Router from "next/router";
import { useEffect } from "react";
import { Utils } from "src/helpers/utils";
import SyncViewModel from "./sync-view-model";

const SyncPage = () => {
  const {
    status,
    isShowAlert,
    isLoading,
    validation,
    onSyncClicked,
    onCloseAlert,
  } = SyncViewModel();

  useEffect(() => {
    Utils.authorizePage(window.location.pathname);
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
                <Typography variant="h5">Sync Data</Typography>
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
                      <Link underline="hover" color="inherit" href="#">
                        Sync Data
                      </Link>
                    </Breadcrumbs>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={12} md={4} margin={0.5} padding={1}>
                <Box sx={{ display: "flex" }}>
                  <Grid sx={{ pr: 1 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        onSyncClicked();
                      }}
                    >
                      Sync Data
                    </Button>
                  </Grid>
                </Box>
                <CustomAlert
                  isOpen={isShowAlert}
                  status={status}
                  validation={validation}
                  onClose={() => {
                    onCloseAlert();
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SyncPage;
