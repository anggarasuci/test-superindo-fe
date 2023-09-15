import * as React from "react";
import _ from "lodash";
import {
  styled,
  createTheme,
  ThemeProvider,
  alpha,
} from "@mui/material/styles";
import getConfig from "next/config";
import Head from "next/head";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
import { initStoreImplementation } from "src/data/store-implementation/init-store-implementation";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import { setGlobalPeriodIdUseCase } from "src/use-case/setting/set-global-period-id-use-case";
import { setGlobalTypeIdUseCase } from "src/use-case/setting/set-global-type-id-use-case";
import { CustomSelect } from "./CustomSelect";
import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import { Grid } from "@mui/material";
import { CustomIcon } from "./CustomIcon";
import InputBase from "@mui/material/InputBase";
import { CustomSelectAutoComplete } from "components/CustomSelectAutoComplete";
import { getGlobalDapilUseCase } from "src/use-case/setting/get-global-dapil-use-case";
import { candidateStoreImplementation } from "src/data/store-implementation/candidate-store-implementation";
import { getCandidateByPartyUseCase } from "src/use-case/candidate/get-candidate-by-party-use-case";
import { FormControl, InputLabel, Select } from "@mui/material";
import { GlobalFunction } from "helper/global-function";
import { authStoreImplementation } from "src/data/store-implementation/auth-store-implementation";

const drawerWidth = 240;

//const { setGlobalPeriod, setGlobalTypePeriod } = GlobalFunction();

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const pages = [];

export default function Layout({ children }) {
  const router = useRouter();
  const currentUrl = router.asPath;
  const { publicRuntimeConfig } = getConfig();
  const applicationName = `${publicRuntimeConfig.applicationName}`;
  const appLogo = "";
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openMenuStatus, setOpenMenuStatus] = React.useState([]);

  const [autoCompleteDapils, setAutoCompleteDapils] = React.useState([]);
  const [autoCompleteCandidates, setAutoCompleteCandidate] = React.useState([]);

  const initStore = initStoreImplementation();
  const settingStore = settingStoreImplementation();
  const candidateStore = candidateStoreImplementation();
  const authStore = authStoreImplementation();

  const isCaleg =
    authStore?.auth?.groups?.length === 1 &&
    (authStore?.auth?.groups[0]?.id?.toString() === "3" ||
      authStore?.auth?.groups[0]?.name === "Caleg");

  const { setBacalegtHeader, setDefaultHeader } = GlobalFunction();

  const handleOnClickMenu = (link) => {
    if (
      [
        "/result/survey",
        "/survey/result-survey-seat",
        "/survey/uploads",
        "/survey/pdf-survey",
        "/score-type",
        "/result/uploads-score",
        "/result/score",
        "/result/candidate-score",
        "/dashboard",
      ].includes(link)
    ) {
      setBacalegtHeader();
    } else {
      setDefaultHeader();
    }
  };

  const settings = [
    {
      text:
        "Halo, " + appStoreImplementation.getState()?.auth?.auth?.username ??
        "",
      link: "#",
    },
    {
      text: appStoreImplementation.getState()?.auth?.auth?.isAdmin
        ? "Admin"
        : "User",
      link: "#",
    },
    {
      text: "Logout",
      link: "/login",
    },
  ];

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
      inactive: {
        main: "#cccccc",
        text: "#555555",
      },
      background: {
        default: "#F5F5F6",
        paper: "#F5F5F6",
      },
    },
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: "#ffab40",
              "&:hover": {
                backgroundColor: "#ffab40",
              },
            },
            "&:hover": {
              backgroundColor: "#ffab40",
            },
          },
        },
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [menuItem, setMenuItem] = React.useState([]);

  React.useEffect(() => {
    let generatedMenu = [];

    if (appStoreImplementation.getState()?.auth?.auth?.isAdmin) {
      generatedMenu.push({
        id: 1,
        seq: 1,
        text: "Master",
        link: "/product-category",
        childs: [],
        icon: "",
      });
    }

    generatedMenu.push({
      id: 1,
      seq: 1,
      text: "Summary",
      link: "/transaction",
      childs: [],
      icon: "",
    });

    setMenuItem(_.orderBy(generatedMenu, ["seq"], ["asc"]));
  }, [initStore?.menus]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleClickMenu = (event) => {
    let currentArray = [];
    for (let i = 0; i <= 100; i++) {
      currentArray.push(false);
    }
    if (openMenuStatus[event.id] === false) {
      currentArray[event.id] = true;
    }
    setOpenMenuStatus(currentArray);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e, f) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSettingMenuClick = (url) => {
    router.push(url);
    handleCloseUserMenu();
  };

  const setGlobalPeriod = React.useCallback(
    async (id) => {
      await setGlobalPeriodIdUseCase(settingStore, id);
    },
    [settingStore]
  );

  const setTypePeriod = React.useCallback(
    (id) => {
      setGlobalTypeIdUseCase(settingStore, id);
    },
    [settingStore]
  );

  const handleChangeToolbarPeriodField = (id) => {
    setGlobalPeriod(id);
  };

  const handleChangeToolbarTypeField = (id) => {
    setTypePeriod(id);
  };

  const getDapilByName = React.useCallback(
    async (dapilName) => {
      await getGlobalDapilUseCase(settingStore, dapilName);
    },
    [settingStore]
  );

  const getCandidateByName = React.useCallback(
    async (candidateName) => {
      await getCandidateByPartyUseCase(candidateStore, "", candidateName);
    },
    [candidateStore]
  );

  React.useEffect(() => {
    mapCandidatesToAutocompleteFormat();
  }, [candidateStore.candidates]);

  const mapCandidatesToAutocompleteFormat = () => {
    const temp = candidateStore.candidates?.map((item) => ({
      id: item.id,
      label: item.name,
    }));
    setAutoCompleteCandidate(temp);
  };

  React.useEffect(() => {
    mapDapilsToAutocompleteFormat();
  }, [settingStore.globalDapils]);

  const mapDapilsToAutocompleteFormat = () => {
    const temp = settingStore.globalDapils?.map((item) => ({
      id: `${item.id}-${item.province?.id}`,
      label: item.name,
    }));
    setAutoCompleteDapils(temp);
  };

  const handleChangeDapilField = (id) => {
    const splitedId = id?.split("-");

    if (splitedId?.length > 1) {
      const url = `${window.location.origin
        .toString()
        .replace("home", "")}/result/dapil?province=${splitedId[1]}&dapil=${
        splitedId[0]
      }`;
      window.open(url, "_self");
    }
  };

  const handleChangeCandidateField = (id) => {
    const url = `${window.location.origin
      .toString()
      .replace("home", "")}/result/candidate?id=${id}`;
    window.open(url, "_self");
  };

  const handleOnSearchAutocompleteCandidate = (candidateName) => {
    getCandidateByName(candidateName);
  };

  const handleOnSearchAutocompleteDapil = (dapilName) => {
    getDapilByName(dapilName);
  };

  React.useEffect(() => {
    let currentArray = openMenuStatus;
    for (let i = 0; i <= 100; i++) {
      currentArray.push(false);
    }
    setOpenMenuStatus(currentArray);
  }, [open]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{applicationName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={appLogo} />
      </Head>
      <Box
        sx={{ display: "flex", backgroundColor: "#E1E2E1", color: "#242564" }}
      >
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            // backgroundColor: "#f5ad16",
            // border: "#f5ad16",
            backgroundColor: "#242564",
            borderBottom: "#f5ad16",
            borderBottomWidth: 2,
            color: "#fff",
          }}
          theme={darkTheme}
        >
          <Toolbar>
            {!isCaleg && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              {applicationName}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages &&
                pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
            </Box>

            <Box
              theme={darkTheme}
              sx={{
                flexGrow: 0,
                display: { xs: "flex", md: "flex" },
                ml: "auto",
                flexDirection: "flex-end",
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Test User" src="/user-icon.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => {
                  return (
                    <MenuItem
                      key={setting.text}
                      sx={{
                        backgroundColor: setting.link !== "#" ? "#fff" : "#eee",
                        color: setting.link !== "#" ? "#000" : "#666",
                      }}
                      onClick={() => {
                        handleSettingMenuClick(setting.link);
                      }}
                    >
                      {setting.text}
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#242564",
              borderColor: "#242564",
            },
            backgroundColor: "#242564",
            borderColor: "#242564",
          }}
          variant="persistent"
          anchor="left"
          open={open}
          fill="#242564"
          border="#242564"
          color="#fff"
        >
          <DrawerHeader
            sx={{
              backgroundColor: "#242564",
              borderColor: "#242564",
            }}
          >
            <IconButton onClick={handleDrawerClose} sx={{ color: "#fff" }}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider sx={{ borderColor: "#242564" }} />
          <List
            key="menu-section"
            sx={{
              backgroundColor: "#242564",
              color: "#ffffff",
            }}
          >
            {menuItem.map((item, index) => {
              if (item.childs.length > 0) {
                return (
                  <ThemeProvider theme={theme}>
                    <ListItemButton
                      component="a"
                      href={item.link}
                      selected={item.link === currentUrl}
                      key={`menu-button-${index}`}
                      onClick={handleClickMenu.bind(this, item)}
                    >
                      <CustomIcon name={item.icon} />
                      <ListItemText
                        key={`menu-text-${index}`}
                        primary={item.text}
                        title={item.id}
                      />
                      {openMenuStatus[item.id] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItemButton>
                    <Collapse
                      in={openMenuStatus[item.id]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List
                        key={`child-list-${index}`}
                        component="div"
                        disablePadding
                      >
                        {item.childs.map((child, idChild) => {
                          return (
                            <ListItemButton
                              sx={{ pl: 4 }}
                              component="a"
                              selected={child.link === currentUrl}
                              href={child.link}
                              key={`child-menu-button-${idChild}`}
                              onClick={() => {
                                handleOnClickMenu(child.link);
                              }}
                            >
                              <CustomIcon name={child.icon} />
                              <ListItemText
                                key={`child-menu-text-${idChild}`}
                                primary={child.text}
                              />
                            </ListItemButton>
                          );
                        })}
                      </List>
                    </Collapse>
                  </ThemeProvider>
                );
              } else {
                return (
                  <ListItemButton
                    key={`menu-button-${index}`}
                    component="a"
                    selected={item.link === currentUrl}
                    href={item.link}
                    onClick={() => {
                      handleOnClickMenu(item.link);
                    }}
                  >
                    <CustomIcon name={item.icon} />
                    <ListItemText
                      key={`menu-text-${index}`}
                      primary={item.text}
                    />
                  </ListItemButton>
                );
              }
            })}
          </List>
          <Divider sx={{ borderColor: "#242564" }} />
        </Drawer>
        <Main
          open={open}
          sx={{
            backgroundColor: "#E1E2E1",
            color: "#242564",
            borderColor: "#000",
          }}
        >
          <DrawerHeader />
          {children}
        </Main>
      </Box>
    </ThemeProvider>
  );
}
