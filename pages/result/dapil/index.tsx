import {
  Avatar,
  Badge,
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
  styled,
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
import { ChartData } from "chart.js";
import { HorizontalBarChart } from "components/chart/HorizontalChart";
import CustomCard from "components/CustomCard";
import Image from "next/image";
import { Loading } from "components/Loading";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import ResultDapilViewModel from "./result-dapil-view-model";
import Survey from "./components/Survey";
import { CustomDialog } from "components/CustomDialog";
import ListModalCandidate from "../components/ListModalCandidate";
import female from "assets/female.png";
import male from "assets/male.png";
import trophy from "assets/trophy.png";
import potential from "assets/bronze-medal.png";
import hold from "assets/forbidden.png";
import CandidateModalComponent from "components/candidate/CandidateModalComponent";
import { Utils } from "src/helpers/utils";
import Router from "next/router";

const ResultDapil = () => {
  let search = window.location.search;
  let urlParams = new URLSearchParams(search);

  const {
    locations,
    dapils,
    settings,
    resultDapil,
    resultDapils,
    resultWinner,
    uploadSurveys,
    initProvince,
    initParty,
    isLoading,
    isLoadingModal,
    candidateDataModal,
    showCandidateModal,
    dataBarSurvey,
    dataInfo,
    resultSurveyMapped,
    onCandidateClicked,
    onCloseModalCandidate,
    getResultDapilParty,
    generateResultDapilPerParty,
    getResultDapilCandidate,
    generateResultDapilPerCandidate,
    handleGetDapils,
    onRegionSelected,
    generateResultPerKabupatenKota,
    getResultWinner,
    getUploadSurveys,
    getResultSurvey,
  } = ResultDapilViewModel();

  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const [provinceName, setProvinceName] = useState<string>("");
  const [dapilName, setDapilName] = useState<string>("");
  const [provinceField, setProvinceField] = useState<string>("");
  const [dapilField, setDapilField] = useState<string>("");
  const [totalDpt, setTotalDpt] = useState<number>(0);
  const [totalPenggunaHakPilih, setTotalPenggunaHakPilih] = useState<number>(0);
  const [totalSah, setTotalSah] = useState<number>(0);
  const [totalTidakSah, setTotalTidakSah] = useState<number>(0);
  const [totalKursi, setTotalKursi] = useState<number>(0);
  const [chartTypeField, setChartTypeField] = useState<string>("");
  const [dataPerKabupatenKota, setDataPerKabupatenKota] = useState<
    ChartData<any>
  >({
    labels: [],
    datasets: [],
  });
  const [dataPerPartai, setDataPerPartai] = useState<ChartData<any>>({
    labels: [],
    datasets: [],
  });
  const [dataBar, setDataBar] = useState<ChartData<any>>({
    labels: [],
    datasets: [],
  });
  const [dataHorizontalChart, setDataHorizontalChart] = useState<
    ChartData<any>
  >({
    labels: [],
    datasets: [],
  });
  const [tabsValue, setTabsValue] = useState(0);

  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [messageDialog, setMessageDialog] = useState<string>("");
  const [dataCaleg, setDataCaleg] = useState<Array<any>>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [surveyFilePath, setSurveyFilePath] = useState<string>("");

  const chartTypes = [
    "PER KABUPATEN/KOTA",
    "PER PARTAI",
    "PER CALEG",
    "PEMENANG KURSI",
  ];

  useEffect(() => {
    getUploadSurveys(dapilName);
  }, [dapilName]);

  useEffect(() => {
    if (uploadSurveys.uploadSurveys) {
      const item = uploadSurveys?.uploadSurveys?.[0]?.file ?? "";

      setSurveyFilePath(item);
    }
  }, [uploadSurveys.uploadSurveys]);

  useEffect(() => {
    Utils.authorizePage(window.location.pathname);
    if (!Utils.isLoggedIn()) Router.push("/login");

    initProvince();
    initParty();
    if (urlParams.get("province") && urlParams.get("dapil")) {
      const provinceId = urlParams.get("province");
      const dapilId = urlParams.get("dapil");

      setProvinceField(provinceId);
      onRegionSelected(provinceId);
      handleGetDapils(provinceId);
      setDapilField(dapilId);
      setChartTypeField(settings?.defaultChartType);
    }
  }, []);

  useEffect(() => {
    if (dapilField !== "") {
      onSearchClicked(dapilField, chartTypeField);
    }
  }, [locations.provinces]);

  useEffect(() => {
    if (
      resultDapil?.results_dapil_parties?.length > 0 &&
      chartTypeField === "PER PARTAI"
    ) {
      const dataPie = generateResultDapilPerParty(
        resultDapil?.results_dapil_parties,
        resultWinner?.results_winners
      );
      setDataPerPartai(dataPie);
      setDataHorizontalChart(dataPie);
    }
  }, [resultDapil.results_dapil_parties]);

  useEffect(() => {
    if (
      resultDapil?.results_dapil_candidates?.length > 0 &&
      chartTypeField === "PER CALEG"
    ) {
      const dataBar = generateResultDapilPerCandidate(
        resultDapil?.results_dapil_candidates,
        10,
        resultWinner?.results_winners
      );
      setDataBar(dataBar);
      setDataHorizontalChart(dataBar);
      setDataCaleg(resultDapil?.results_dapil_candidates);
    }
  }, [resultDapil.results_dapil_candidates]);

  const handleChangeProvinceField = (event) => {
    let id = event.target.value;
    setIsFirstLoad(false);
    setProvinceField(id);
    if (id !== "") {
      locations.provinces.forEach((item) => {
        if (item.id === id) {
          setProvinceName(item.name);
        }
      });

      // onRegionSelected(id);
      handleGetDapils(id);
    }
  };

  const handleChangeDapilField = (event) => {
    const id = event.target.value;
    setIsFirstLoad(false);
    setDapilField(id);
  };

  const handleChangeChartTypeField = (event) => {
    setDataHorizontalChart(null);
    setIsFirstLoad(false);
    setChartTypeField(event.target.value);
  };

  const openModal = (message: string) => {
    setMessageDialog(message);
    setIsOpenDialog(true);
  };

  const setCardTotal = (dapilId: string) => {
    resultDapils?.forEach((item) => {
      if (item.dapil.id == dapilId) {
        setTotalDpt(item?.dapil?.total_dpt);
        setTotalPenggunaHakPilih(item?.dapil?.total_pengguna_hak_pilih);
        setTotalSah(item?.dapil?.total_sah);
        setTotalTidakSah(item?.dapil?.total_tidak_sah);
        setTotalKursi(item?.dapil?.total_kursi);

        setDapilName(item?.dapil?.name);

        getUploadSurveys(dapilName);
      }
    });
  };

  const onSearchClicked = async (dapilId: string, chartType: string) => {
    if (!dapilId || chartType == "") {
      openModal("Harap Pilih Dapil dan Jenis Chart");
      return;
    }
    //for kabupaten/kota
    onRegionSelected(provinceField);

    //for winner
    await getResultWinner(dapilId);

    //for partai
    await getResultDapilParty(dapilId);

    //for caleg
    await getResultDapilCandidate(provinceField, dapilId);

    setCardTotal(dapilId);

    if (chartType === "PER PARTAI") {
      await getResultSurvey(provinceField, dapilId, "party");
    } else if (chartType === "PER CALEG") {
      await getResultSurvey(provinceField, dapilId, "candidate");
    }
  };

  useEffect(() => {
    resultDapils?.forEach((item) => {
      if (item.dapil.id == dapilField) {
        if (chartTypeField === "PER KABUPATEN/KOTA") {
          const dataChart = generateResultPerKabupatenKota(item?.regencies);
          setDataPerKabupatenKota(dataChart);
          setDataHorizontalChart(dataChart);
        }

        setTotalDpt(item?.dapil?.total_dpt);
        setTotalPenggunaHakPilih(item?.dapil?.total_pengguna_hak_pilih);
        setTotalSah(item?.dapil?.total_sah);
        setTotalTidakSah(item?.dapil?.total_tidak_sah);
        setTotalKursi(item?.dapil?.total_kursi);

        setDapilName(item?.dapil?.name);
      }
    });
  }, [resultDapils]);

  useEffect(() => {
    if (provinceField !== "" && !isFirstLoad) {
      setDapilField(dapils[0]?.id);
    }
  }, [dapils]);

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  const getTitleChart = () => {
    return chartTypeField == "PER KABUPATEN/KOTA"
      ? "Suara Terbanyak Per Kabupaten/Kota"
      : chartTypeField == "PER PARTAI"
      ? "Perolehan Suara Per Partai"
      : chartTypeField == "PER CALEG"
      ? `10 Kandidat dengan Total Suara Terbanyak ${dapilName}`
      : "";
  };

  const renderTable = () => {
    // const isHidden = chartTypeField != "PER CALEG";
    const isHidden = true;
    return (
      !isHidden && (
        <Grid
          item
          component={"div"}
          xs={12}
          md={3}
          padding={2}
          margin={2}
          textAlign="center"
          maxHeight={800}
          marginTop={10}
          overflow="scroll"
        >
          <TableContainer sx={{ height: 750 }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Kandidat</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataHorizontalChart?.labels?.map((row, index) => (
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
          {chartTypeField === "PER CALEG" && (
            <>
              <Button
                variant="outlined"
                color="warning"
                onClick={() => setIsOpenModal(true)}
              >
                Lihat semua kandidat
              </Button>
              <ListModalCandidate
                data={dataCaleg}
                winner={resultWinner.results_winners}
                title={`Daftar Kandidat di ${dapilName}`}
                isOpenModal={isOpenModal}
                onClose={() => setIsOpenModal(false)}
              ></ListModalCandidate>
            </>
          )}
        </Grid>
      )
    );
  };

  const renderTableWinner = () => {
    return (
      <Grid
        item
        xs={12}
        md={12}
        padding={2}
        margin={2}
        textAlign="center"
        maxHeight={600}
        overflow="scroll"
      >
        <h3>Daftar Pemenang Kursi {dapilName}</h3>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Nama Kandidat Pemenang</TableCell>
                <TableCell>Partai</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultWinner.results_winners?.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row?.sequence}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ mr: 1 }}>
                        <Badge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          badgeContent={
                            <Avatar
                              sx={{
                                mb: 1,
                                width: 20,
                                height: 20,
                                marginLeft: "auto",
                                marginRight: "auto",
                              }}
                            >
                              <Image
                                width="20"
                                height="20"
                                src={
                                  row?.flag_win === true
                                    ? trophy
                                    : row?.flag_win === false &&
                                      row?.sequence < totalKursi
                                    ? hold
                                    : potential
                                }
                              />
                            </Avatar>
                          }
                        >
                          <Avatar
                            sx={{
                              mb: 1,
                              width: 50,
                              height: 50,
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          >
                            <Image
                              width="50"
                              height="50"
                              src={
                                row?.candidate?.gender == "F" ? female : male
                              }
                            />
                          </Avatar>
                        </Badge>
                      </Box>
                      <Box alignSelf="center">
                        <a
                          href="#"
                          onClick={() => {
                            onCandidateClicked(row?.candidate?.id?.toString());
                          }}
                        >
                          {row.candidate?.name} - Total Suara:{" "}
                          {numeral(row.total_suara).format("0,0")} (SL:{" "}
                          {numeral(row.total_suara_saint_lague).format("0,0")})
                        </a>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ mr: 1 }}>
                        <Avatar
                          src={row.candidate?.party?.logo}
                          sx={{ mr: 1 }}
                        />
                      </Box>
                      <Box alignSelf="center">
                        <a
                          href={`/result/party?id=${row.candidate?.party?.id}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {row.candidate?.party?.short_name}
                        </a>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CandidateModalComponent
          isOpenModal={showCandidateModal}
          data={candidateDataModal}
          onClose={() => {
            onCloseModalCandidate();
          }}
        />
      </Grid>
    );
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
        <Loading isLoading={isLoadingModal} />
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Hasil Pemilu per Dapil</Typography>
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
                      <Typography color="text.primary">Per Dapil</Typography>
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
              <Grid item xs={12} md={3}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="dapil-select-label">Pilih Dapil</InputLabel>
                  <Select
                    labelId="dapil-select-label"
                    id="dapil-select"
                    value={dapilField}
                    label="Tipe"
                    onChange={handleChangeDapilField}
                  >
                    {dapils.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
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
                    onSearchClicked(dapilField, chartTypeField);
                  }}
                  fullWidth
                >
                  Tampilkan
                </Button>
              </Grid>
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={12} marginTop={4} marginBottom={3}>
                <Typography variant="h4" textAlign="center">
                  <strong>{dapilName}</strong>
                </Typography>
                {dapilName !== "" && (
                  <Typography variant="h5" textAlign="center">
                    <strong>{totalKursi} Kursi</strong>
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12} md={3}>
                <CustomCard
                  textLeft="Total Daftar Pemilih Tetap (DPT)"
                  textRight={numeral(totalDpt).format("0,0")}
                  sx={{
                    minHeight: "12vh",
                    padding: 2,
                    backgroundColor: "primary.main",
                    color: "background.paper",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomCard
                  textLeft="Total Pengguna Hak Pilih"
                  textRight={numeral(totalPenggunaHakPilih).format("0,0")}
                  sx={{
                    minHeight: "12vh",
                    padding: 2,
                    backgroundColor: "warning.main",
                    color: "background.paper",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomCard
                  textLeft="Total Suara Sah Pemilih"
                  textRight={numeral(totalSah).format("0,0")}
                  sx={{
                    minHeight: "12vh",
                    padding: 2,
                    backgroundColor: "success.main",
                    color: "background.paper",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomCard
                  textLeft="Total Suara Tidak Sah Pemilih"
                  textRight={numeral(totalTidakSah).format("0,0")}
                  sx={{
                    minHeight: "12vh",
                    padding: 2,
                    backgroundColor: "inactive.main",
                    color: "inactive.text",
                  }}
                />
              </Grid>
              <Grid item component={"div"} xs={12} md={12}>
                <Box
                  component={"div"}
                  sx={{ borderBottom: 1, borderColor: "divider", marginTop: 2 }}
                >
                  <Tabs
                    value={tabsValue}
                    onChange={(event, value) => {
                      handleChangeTabs(event, value);
                    }}
                    aria-label="basic tabs"
                    textColor="primary"
                    indicatorColor="primary"
                    centered
                  >
                    <Tab label="Hasil Perolehan Suara" />
                    <Tab label="Hasil Survey" />
                  </Tabs>
                </Box>

                <Grid container textAlign={"center"}>
                  <Grid
                    display={{
                      xs:
                        tabsValue == 0 && chartTypeField != "PEMENANG KURSI"
                          ? "block"
                          : "none",
                    }}
                    item
                    xs={12}
                    md={
                      chartTypeField == "PER KABUPATEN/KOTA" ||
                      chartTypeField == "PER PARTAI"
                        ? 12
                        : chartTypeField == "PEMENANG KURSI"
                        ? 0
                        : 12
                    }
                    textAlign="center"
                    padding={2}
                    margin={2}
                  >
                    <h3>{getTitleChart()}</h3>
                    <HorizontalBarChart
                      mainId={dapilField}
                      mainTitle={dapilName}
                      chartData={dataHorizontalChart}
                      eventType="popup"
                      chartDetailType={"DAPIL - " + chartTypeField}
                    />
                    {chartTypeField === "PER CALEG" && (
                      <Grid item alignContent="baseline" textAlign="center">
                        <Box alignContent="baseline" textAlign="center">
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => setIsOpenModal(true)}
                          >
                            Lihat semua kandidat
                          </Button>
                        </Box>
                        <ListModalCandidate
                          data={dataCaleg}
                          title={`Daftar Kandidat di ${dapilName}`}
                          isOpenModal={isOpenModal}
                          onClose={() => setIsOpenModal(false)}
                        ></ListModalCandidate>
                      </Grid>
                    )}
                  </Grid>
                  {tabsValue == 0 ? renderTable() : null}
                  {tabsValue == 0 && chartTypeField == "PEMENANG KURSI"
                    ? renderTableWinner()
                    : null}
                </Grid>
                <TabPanel value={tabsValue} index={1}>
                  <Survey
                    chartTypeField={chartTypeField}
                    dataBar={dataBarSurvey}
                    dataInfo={dataInfo}
                    surveyFilePath={uploadSurveys.uploadSurveys}
                    resultSurveyMapped={resultSurveyMapped}
                  />
                </TabPanel>
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

export default ResultDapil;
