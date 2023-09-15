import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import { Loading } from "components/Loading";
import React, { useEffect, useState } from "react";

import ResultBarChart from "../components/ResultBarChart";
import ResultProvinceViewModel from "./result-province-view-model";
import { ChartData } from "chart.js";
import _ from "lodash";
import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import { CustomAlert } from "components/CustomAlert";
import { CustomDialog } from "components/CustomDialog";
import { HorizontalBarChart } from "components/chart/HorizontalChart";
import { Utils } from "src/helpers/utils";
import Router from "next/router";

const ResultProvince = () => {
  let search = window.location.search;
  let urlParams = new URLSearchParams(search);

  const {
    locations,
    parties,
    settings,
    resultProvince,
    resultRegency,
    resultDapils,
    resultRegencies,
    resultParties,
    isLoading,
    initProvince,
    initParty,
    getResultProvince,
    generateResultPartyPerProvince,
    getResultRegency,
    generateResultPartyPerRegency,
    generateResultPerDapil,
    generateResultPerRegency,
    generateResultPerParty,
    onRegionSelected,
  } = ResultProvinceViewModel();

  const [provinceName, setProvinceName] = useState<string>("");
  const [provinceField, setProvinceField] = useState<string>("");
  const [chartTypeField, setChartTypeField] = useState<string>("");
  const [dataKabKot, setDataKabKot] = useState<ChartData<any>>({
    labels: [],
    datasets: [],
  });
  const [dataDapils, setDataDapils] = useState<ChartData<any>>({
    labels: [],
    datasets: [],
  });
  const [dataParties, seDataParties] = useState<ChartData<any>>({
    labels: [],
    datasets: [],
  });
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [messageDialog, setMessageDialog] = useState<string>("");

  const chartTypes = ["PER DAPIL", "PER KABUPATEN/KOTA", "PER PARTAI"];

  const handleChangeProvinceField = (event) => {
    let id = event.target.value;
    setProvinceField(id);
  };

  const handleChangeChartTypeField = (event) => {
    setChartTypeField(event.target.value);
  };

  const onSearchClicked = async (provinceId: string) => {
    if (!provinceId || chartTypeField == "") {
      openModal("Harap Pilih Provinsi dan Jenis Chart");
      return;
    }
    await onRegionSelected(provinceId);

    locations.provinces.forEach((item) => {
      if (item.id.toString() === provinceId) {
        setProvinceName(item.name);
      }
    });
  };

  const openModal = (message: string) => {
    setMessageDialog(message);
    setIsOpenDialog(true);
  };

  useEffect(() => {
    Utils.authorizePage(window.location.pathname);
    if (!Utils.isLoggedIn()) Router.push("/login");

    initProvince();
    if (urlParams.get("province")) {
      const provinceId = urlParams.get("province");

      setProvinceField(provinceId);
      setChartTypeField(settings?.defaultChartType);
    }
  }, []);

  useEffect(() => {
    if (provinceField !== "") {
      onSearchClicked(provinceField);
    }
  }, [locations.provinces]);

  useEffect(() => {
    if (resultDapils?.length > 0) {
      const data = generateResultPerDapil(resultDapils);
      setDataDapils(data);
    }
  }, [resultDapils]);

  useEffect(() => {
    if (resultRegencies?.length > 0) {
      const data = generateResultPerRegency(resultRegencies);
      setDataKabKot(data);
    }
  }, [resultRegencies]);

  useEffect(() => {
    if (resultParties?.length > 0) {
      const data = generateResultPerParty(resultParties);
      seDataParties(data);
    }
  }, [resultRegencies]);

  const [tabsValue, setTabsValue] = useState(0);

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Loading isLoading={isLoading} />
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Hasil Pemilu per Provinsi</Typography>
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
                        Hasil Pemilu
                      </Link>
                      <Typography color="text.primary">Per Provinsi</Typography>
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
              <Grid item xs={12} md={3}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="province-select-label">
                    Pilih Provinsi
                  </InputLabel>
                  <Select
                    labelId="province-select-label"
                    id="province-select"
                    value={provinceField}
                    label="Provinsi"
                    onChange={handleChangeProvinceField}
                  >
                    {locations.provinces?.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="select-chart-type">Pilih Chart</InputLabel>
                  <Select
                    labelId="chart-type-select-label"
                    id="dapil-select"
                    value={chartTypeField}
                    label="Tipe"
                    onChange={handleChangeChartTypeField}
                  >
                    {chartTypes?.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  id="search-button"
                  variant="contained"
                  color="primary"
                  size="medium"
                  style={{ height: "55px" }}
                  onClick={() => {
                    onSearchClicked(provinceField);
                  }}
                  fullWidth
                >
                  Tampilkan
                </Button>
              </Grid>
              <Grid item xs={0} md={4} />
              <Grid item xs={12} md={12} marginTop={4} marginBottom={0}>
                <Typography variant="h4" textAlign="center">
                  <strong>{provinceName}</strong>
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box
                  sx={{ borderBottom: 1, borderColor: "divider", marginTop: 2 }}
                >
                  <Tabs
                    value={tabsValue}
                    onChange={handleChangeTabs}
                    aria-label="basic tabs"
                    textColor="primary"
                    indicatorColor="primary"
                    centered
                  >
                    <Tab label="Hasil Perolehan Suara" />
                  </Tabs>
                  <TabPanel value={tabsValue} index={0}></TabPanel>
                  <Grid container>
                    {chartTypeField === "PER PARTAI" && (
                      <Grid
                        item
                        xs={12}
                        md={12}
                        padding={2}
                        margin={2}
                        textAlign="center"
                      >
                        <Grid>
                          <Grid item xs={12} md={12}>
                            <h3>
                              Partai Dengan Suara Terbanyak di Provinsi{" "}
                              {provinceName}
                            </h3>
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <HorizontalBarChart
                              chartData={dataParties}
                              height="1000px"
                              mainId={provinceField}
                              mainTitle={provinceName}
                              eventType="popup"
                              chartDetailType={"PROVINSI - " + chartTypeField}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                    {chartTypeField === "PER PARTAI" && (
                      <Grid
                        item
                        xs={12}
                        md={0}
                        padding={2}
                        margin={2}
                        textAlign="center"
                        maxHeight={1000}
                        overflow="scroll"
                      >
                        <TableContainer>
                          <Table aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell>No</TableCell>
                                <TableCell>Partai</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {dataParties.labels?.map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {index + 1}
                                  </TableCell>
                                  <TableCell>{row}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>
                    )}
                    {chartTypeField === "PER KABUPATEN/KOTA" && (
                      <Grid
                        item
                        xs={12}
                        md={12}
                        padding={2}
                        margin={2}
                        textAlign="center"
                      >
                        <Grid>
                          <Grid item xs={12} md={12}>
                            <h3>
                              Partai Dengan Suara Terbanyak Per Kabupaten/Kota
                              di Provinsi {provinceName}
                            </h3>
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <HorizontalBarChart
                              chartData={dataKabKot}
                              height="1200px"
                              mainId={provinceField}
                              mainTitle={provinceName}
                              eventType="popup"
                              chartDetailType={"PROVINSI - " + chartTypeField}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                    {chartTypeField === "PER KABUPATEN/KOTA" && (
                      <Grid
                        item
                        xs={12}
                        md={0}
                        padding={1}
                        margin={1}
                        textAlign="center"
                        maxHeight={1200}
                        overflow="scroll"
                      >
                        <TableContainer>
                          <Table aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell>No</TableCell>
                                <TableCell>Partai</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {dataKabKot.labels?.map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {index + 1}
                                  </TableCell>
                                  <TableCell>{row}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>
                    )}
                    {chartTypeField === "PER DAPIL" && (
                      <Grid
                        item
                        xs={12}
                        md={12}
                        padding={2}
                        margin={2}
                        textAlign="center"
                      >
                        <Grid>
                          <Grid item xs={12} md={12}>
                            <h3>
                              Partai Dengan Suara Terbanyak Per Dapil di
                              Provinsi {provinceName}
                            </h3>
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <HorizontalBarChart
                              mainId={provinceField}
                              mainTitle={provinceName}
                              chartData={dataDapils}
                              height="600px"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                    {chartTypeField === "PER DAPIL" && (
                      <Grid
                        item
                        xs={12}
                        md={0}
                        padding={2}
                        margin={2}
                        textAlign="center"
                        maxHeight={600}
                        overflow="scroll"
                      >
                        <TableContainer>
                          <Table aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell>No</TableCell>
                                <TableCell>Partai</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {dataDapils.labels?.map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {index + 1}
                                  </TableCell>
                                  <TableCell>{row}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>
                    )}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <CustomDialog
        isOpen={isOpenDialog}
        title={"Perhatian"}
        message={messageDialog}
        onClose={() => {
          setIsOpenDialog(false);
        }}
      />
    </Grid>
  );
};

export default ResultProvince;
