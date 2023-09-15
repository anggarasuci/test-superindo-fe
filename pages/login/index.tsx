import { AccountCircle, Key, Password } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { CustomAlert } from "components/CustomAlert";
import { Loading } from "components/Loading";
import getConfig from "next/config";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import LoginViewModel from "./login-view-model";

export const getStaticProps = async () => {
  return {
    props: { noLayout: true },
  };
};

const LoginPage = () => {
  const router = useRouter();
  const { publicRuntimeConfig } = getConfig();
  const applicationName = `${publicRuntimeConfig.applicationName} - Login`;
  const appLogo = publicRuntimeConfig.appLogo;
  const { onLoginClicked, isSuccess, isShowAlert, onCloseAlert } =
    LoginViewModel();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#242564",
      },
      secondary: {
        main: "#c6c3d7",
      },
      success: {
        main: "#009688",
      },
      info: {
        main: "#0091ea",
      },
      warning: {
        main: "#ffab40",
      },
      error: {
        main: "#ec407a",
      },
      background: {
        default: "#F5F5F6",
        paper: "#F5F5F6",
      },
    },
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onLoginClicked(username, password);
    }
  };

  const handleChange = (event) => {
    if (event.target.id === "username") {
      setUsername(event.target.value);
    }

    if (event.target.id === "password") {
      setPassword(event.target.value);
    }
  };

  useEffect(() => {
    if (isSuccess) router.push("transaction");
  }, [isSuccess]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{applicationName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={appLogo} />
      </Head>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1.5, width: "30ch" },
            alignContent: "center",
            marginBottom: "200px",
          }}
          noValidate
          autoComplete="off"
        >
          <Grid item xs={12} md={12}>
            <TextField
              label="Username"
              placeholder="Username"
              color="primary"
              id="username"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              style={{ width: "100%", marginLeft: 0 }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Password"
              type={"password"}
              placeholder="Password"
              color="primary"
              id="password"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Key />
                  </InputAdornment>
                ),
              }}
              style={{ width: "100%", marginLeft: 0 }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                onLoginClicked(username, password);
              }}
              style={{ width: "100%", margin: 0 }}
            >
              Login
            </Button>
          </Grid>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginPage;
