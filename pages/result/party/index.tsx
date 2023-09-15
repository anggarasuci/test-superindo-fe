import {
  Grid,
  Box,
  Paper,
  Typography,
  Breadcrumbs,
  FormControl,
  Link,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Badge,
  LinearProgress,
} from "@mui/material";
import { ChartData } from "chart.js";
import { HorizontalBarChart } from "components/chart/HorizontalChart";
import { CustomDialog } from "components/CustomDialog";
import { Loading } from "components/Loading";
import Router from "next/router";
import { useEffect, useState } from "react";
import { PartyEntity } from "src/domain/entity/party-entity";
import { Utils } from "src/helpers/utils";
import { getResultRegencyCandidatePerPartyUseCase } from "src/use-case/result-regency/get-result-regency-candidate-per-party-use-case";
import ListModalCandidate from "../components/ListModalCandidate";
import ResultBarChart from "../components/ResultBarChart";
import ResultPartyViewModel from "./result-party-view-model";

const ResultParty = () => {
  let search = window.location.search;
  let urlParams = new URLSearchParams(search);

  const {
    locations,
    parties,
    settings,
    resultProvinces,
    resultRegencies,
    initParty,
    initProvince,
    initCity,
    getResultProvincePerParty,
    getResultRegencyPerParty,
    getResultProvinceCandidatePerParty,
    getResultRegencyCandidatePerParty,
    generateResultPartyPerProvince,
    generateResultPartyPerRegency,
    generateResultCandidatePerParty,
    generateLinkProvince,
    generateLinkRegency,
    getPartyById,
  } = ResultPartyViewModel();

  const [title, setTitle] = useState<string>("NASIONAL");
  const [partyName, setPartyName] = useState<string>("");
  const [provinceName, setProvinceName] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [partyField, setPartyField] = useState<string>("");
  const [cityField, setCityField] = useState<string>("");
  const [provinceField, setProvinceField] = useState<string>("");
  const [selectedParty, setSelectedParty] = useState<PartyEntity>(null);
  const [totalSuaraParty, setTotalSuaraParty] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [dataCaleg, setDataCaleg] = useState<Array<any>>([]);
  const [dataBar, setDataBar] = useState<ChartData<any>>({
    labels: [],
    datasets: [],
  });
  const [dataBarTopCandidate, setDataBarTopCandidate] = useState<
    ChartData<any>
  >({
    labels: [],
    datasets: [],
  });
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [messageDialog, setMessageDialog] = useState<string>("");
  const [linkProv, setLinkProv] = useState<Array<string>>([]);

  const handleChangePartyField = (event) => {
    let id = event.target.value;
    setPartyField(id);
  };

  const openModal = (message: string) => {
    setMessageDialog(message);
    setIsOpenDialog(true);
  };

  const onSearchClicked = async (partyId, provinceId, cityId) => {
    if (!partyId) {
      openModal("Harap Pilih Partai");
      return;
    }
    const selected = getPartyById(partyId);
    setSelectedParty(selected?.[0]);
    if (cityField !== "") {
      await getResultRegencyPerParty(partyId, cityId);
      await getResultRegencyCandidatePerParty(partyId, cityId);
      setTitle(cityName);
    } else if (provinceField !== "") {
      await getResultRegencyPerParty(partyId, "", provinceId);
      await getResultProvinceCandidatePerParty(partyId, provinceId);
      setTitle(provinceName);
    } else {
      await getResultProvincePerParty(partyId, provinceId);
      await getResultProvinceCandidatePerParty(partyId, provinceId);
      setTitle("NASIONAL");
    }
  };

  useEffect(() => {
    if (
      resultProvinces?.results_province_per_party?.length > 0 &&
      partyField !== ""
    ) {
      const dataBar = generateResultPartyPerProvince(
        resultProvinces?.results_province_per_party
      );
      setDataBar(dataBar);
      setLinkProv(
        generateLinkProvince(resultProvinces?.results_province_per_party)
      );

      const subtotal = dataBar?.datasets?.[0]?.data?.reduce((next, prev) => {
        return next + prev;
      }, 0);
      setTotalSuaraParty(subtotal);

      parties.forEach((item) => {
        if (item.id.toString() === partyField) {
          setPartyName(item.name);
        }
      });
    }
  }, [resultProvinces.results_province_per_party]);

  useEffect(() => {
    if (
      resultProvinces?.results_province_candidate_per_party?.length > 0 &&
      partyField !== ""
    ) {
      const dataBar = generateResultCandidatePerParty(
        resultProvinces?.results_province_candidate_per_party,
        10
      );
      setDataBarTopCandidate(dataBar);
      setDataCaleg(resultProvinces?.results_province_candidate_per_party);
    }
  }, [resultProvinces.results_province_candidate_per_party]);

  useEffect(() => {
    if (
      resultRegencies?.results_regency_per_party?.length > 0 &&
      partyField !== ""
    ) {
      const dataBar = generateResultPartyPerRegency(
        resultRegencies?.results_regency_per_party
      );
      setDataBar(dataBar);
      setLinkProv(
        generateLinkRegency(resultRegencies?.results_regency_per_party)
      );

      const subtotal = dataBar?.datasets?.[0]?.data?.reduce((next, prev) => {
        return next + prev;
      }, 0);
      setTotalSuaraParty(subtotal);

      parties.forEach((item) => {
        if (item.id.toString() === partyField) {
          setPartyName(item.name);
        }
      });
    }
  }, [resultRegencies.results_regency_per_party]);

  useEffect(() => {
    if (
      resultRegencies?.results_regency_candidate_per_party?.length > 0 &&
      partyField !== ""
    ) {
      const dataBar = generateResultCandidatePerParty(
        resultRegencies?.results_regency_candidate_per_party,
        10
      );
      setDataBarTopCandidate(dataBar);
      setDataCaleg(resultRegencies?.results_regency_candidate_per_party);
    }
  }, [resultRegencies.results_regency_candidate_per_party]);

  useEffect(() => {
    Utils.authorizePage(window.location.pathname);
    if (!Utils.isLoggedIn()) Router.push("/login");

    initParty();
    initProvince();

    if (urlParams.get("id")) {
      const partyId = urlParams.get("id");

      setPartyField(partyId);

      onSearchClicked(partyId, provinceField, cityField);
    }
  }, []);

  const handleChangeProvinceField = (event) => {
    let id = event.target.value;
    setProvinceField(id);
    if (id !== "") {
      locations.provinces.forEach((item) => {
        if (item.id === id) {
          setProvinceName(item.name);
        }
      });

      initCity(id);
      setCityField("");
    } else {
      setProvinceName("");
    }
  };

  const handleChangeCityField = (event) => {
    const id = event.target.value;
    setCityField(id);
    if (id !== "") {
      locations.regencies.forEach((item) => {
        if (item.id === id) {
          setCityName(item.name);
        }
      });
    } else {
      setCityName("");
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Loading isLoading={settings.isLoading} />
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Hasil Pemilu per Partai</Typography>
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
                      <Typography color="text.primary">Per Partai</Typography>
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
            <Grid container spacing={1} alignItems="center" marginBottom={2}>
              <Grid item xs={12} md={5}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="party-select-label">Partai</InputLabel>
                  <Select
                    labelId="party-select-label"
                    id="party-select"
                    value={partyField?.toString()}
                    label="Partai"
                    type="warning"
                    color="primary"
                    onChange={handleChangePartyField}
                  >
                    {parties?.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        <Box sx={{ display: "flex" }}>
                          <Box sx={{ mr: 1 }}>
                            <Avatar
                              src={item.logo}
                              sx={{ height: 24, width: 24, mr: 1 }}
                            />
                          </Box>
                          <Box alignSelf="center">
                            {item.name} ({item.short_name})
                          </Box>
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="province-select-label">Provinsi</InputLabel>
                  <Select
                    labelId="province-select-label"
                    id="province-select"
                    value={provinceField}
                    label="Provinsi"
                    onChange={handleChangeProvinceField}
                  >
                    <MenuItem value="">
                      <em>Semua Provinsi</em>
                    </MenuItem>
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
                  <InputLabel id="city-select-label">Kabupaten/Kota</InputLabel>
                  <Select
                    labelId="city-select-label"
                    id="city-select"
                    value={cityField}
                    label="Tipe"
                    onChange={handleChangeCityField}
                  >
                    <MenuItem value="">
                      <em>Semua Kabupaten/Kota</em>
                    </MenuItem>
                    {locations.regencies?.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={1}>
                <Button
                  id="search-button"
                  variant="contained"
                  color="primary"
                  size="medium"
                  style={{ height: "55px" }}
                  onClick={() => {
                    onSearchClicked(partyField, provinceField, cityField);
                  }}
                  fullWidth
                >
                  Tampilkan
                </Button>
              </Grid>
              <Grid container>
                {selectedParty && (
                  <Grid
                    item
                    xs={12}
                    md={3}
                    padding={2}
                    margin={2}
                    textAlign="center"
                  >
                    <Box>
                      <Paper
                        variant="outlined"
                        color={selectedParty?.color}
                        sx={{
                          backgroundColor: selectedParty?.color,
                          color: selectedParty?.text_color,
                        }}
                      >
                        <Grid container>
                          <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{ padding: 2, margin: 1 }}
                            textAlign="center"
                          >
                            <Badge overlap="circular">
                              <Avatar
                                src={selectedParty?.logo}
                                sx={{
                                  mb: 1,
                                  width: 150,
                                  height: 150,
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                }}
                              />
                            </Badge>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ alignContent: "center", alignSelf: "center" }}
                          >
                            <Typography variant="h6">
                              <strong>{selectedParty?.short_name}</strong>
                            </Typography>
                            <Typography variant="subtitle1">
                              {selectedParty?.name}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              marginTop: 2,
                              borderTop: "divider",
                              borderTopColor: "#000",
                              borderTopWidth: 1,
                            }}
                          >
                            {dataBar?.datasets?.[0]?.data?.map((row, index) => (
                              <Box
                                key={index}
                                sx={{
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                  width: "80%",
                                  textAlign: "left",
                                }}
                              >
                                <a
                                  href={linkProv[index]}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {dataBar?.labels[index]}
                                </a>
                                <LinearProgress
                                  sx={{
                                    "& .MuiLinearProgress-bar": {
                                      backgroundColor:
                                        selectedParty?.secondary_color,
                                    },
                                  }}
                                  variant="determinate"
                                  style={{
                                    marginTop: "10px",
                                    marginBottom: "15px",
                                  }}
                                  value={(row / totalSuaraParty) * 100}
                                />
                              </Box>
                            ))}
                          </Grid>
                        </Grid>
                      </Paper>
                    </Box>
                  </Grid>
                )}
                {selectedParty && (
                  <Grid
                    item
                    xs={12}
                    md={7}
                    padding={2}
                    margin={2}
                    marginTop={0}
                    paddingTop={0}
                    alignContent="baseline"
                    textAlign="center"
                  >
                    <h3>
                      10 Kandidat dengan Perolehan Suara Terbanyak ({title})
                    </h3>
                    <HorizontalBarChart chartData={dataBarTopCandidate} />
                    <Grid container>
                      <Grid item xs={12}>
                        <Button
                          variant="outlined"
                          color="warning"
                          onClick={() => setIsOpenModal(true)}
                        >
                          Lihat semua kandidat
                        </Button>
                        <ListModalCandidate
                          data={dataCaleg}
                          title={`Daftar Semua Kandidat`}
                          isOpenModal={isOpenModal}
                          onClose={() => setIsOpenModal(false)}
                        ></ListModalCandidate>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
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

export default ResultParty;
