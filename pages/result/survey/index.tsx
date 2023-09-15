import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { Loading } from "components/Loading";
import React, { useEffect, useState } from "react";
import ResultSurveyViewModel from "./result-survey-view-model";
import { CustomDialog } from "components/CustomDialog";
import _ from "lodash";
import { DateConverter } from "src/helpers/date-converter";
import TableResultChartComponent from "./components/TableResultChartComponent";
import GroupBarSurveyComponent from "./components/GroupBarSurveyComponent";
import getConfig from "next/config";
import { Utils } from "src/helpers/utils";
import Router from "next/router";

const ResultSurvey = () => {
  let search = window.location.search;
  let urlParams = new URLSearchParams(search);

  const {
    dataInfo,
    dataBar,
    locations,
    dapils,
    settings,
    resultSurvey,
    resultSurveyMapped,
    uploadSurveys,
    options,
    initProvince,
    initParty,
    isLoading,
    isLoadingModal,
    handleGetDapils,
    getResultSurvey,
    getUploadSurveys,
  } = ResultSurveyViewModel();

  const { publicRuntimeConfig } = getConfig();

  const defaultSelected = publicRuntimeConfig.defaultSelectedSurveyParty;

  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const [provinceName, setProvinceName] = useState<string>("");
  const [dapilName, setDapilName] = useState<string>("");
  const [totalKursi, setTotalKursi] = useState<number>(0);
  const [provinceField, setProvinceField] = useState<string>("");
  const [dapilField, setDapilField] = useState<string>("");
  const [chartTypeField, setChartTypeField] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);

  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [messageDialog, setMessageDialog] = useState<string>("");

  const [exampleData, setExampleData] = useState<Array<any>>([]);
  const [dataBarFiltered, setDataBarFiltered] = useState<any>({});

  const chartTypes = ["PER PARTAI", "PER CALEG"];

  useEffect(() => {
    Utils.authorizePage(window.location.pathname);
    if (!Utils.isLoggedIn()) Router.push("/login");

    initProvince();
    initParty();
    if (urlParams.get("province") && urlParams.get("dapil")) {
      const provinceId = urlParams?.get("province") ?? "";
      const dapilId = urlParams?.get("dapil") ?? "";

      setProvinceField(provinceId);
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

      handleGetDapils(id);
    }
  };

  const handleChangeDapilField = (event) => {
    const id = event.target.value;
    setIsFirstLoad(false);
    setDapilField(id);
  };

  const handleChangeChartTypeField = (event) => {
    setIsFirstLoad(false);
    setChartTypeField(event.target.value);
  };

  const openModal = (message: string) => {
    setMessageDialog(message);
    setIsOpenDialog(true);
  };

  const onSearchClicked = async (dapilId: string, chartType: string) => {
    if (!dapilId || chartType == "") {
      openModal("Harap Pilih Dapil dan Jenis Chart");
      return;
    }

    dapils?.forEach((item) => {
      if (item?.id?.toString() === dapilId) {
        setDapilName(item?.name);
      }
    });

    if (chartType === "PER PARTAI") {
      await getResultSurvey(provinceField, dapilId, "party");
    } else {
      await getResultSurvey(provinceField, dapilId, "candidate");
    }
  };

  useEffect(() => {
    getUploadSurveys(dapilName);
  }, [dapilName]);

  useEffect(() => {}, [uploadSurveys.uploadSurveys]);

  useEffect(() => {
    setExampleData(resultSurveyMapped);
  }, [resultSurveyMapped]);

  useEffect(() => {
    if (resultSurvey?.resultSurveys?.length > 0) {
      const selectedRow = resultSurvey.resultSurveys[0];

      setTotalKursi(selectedRow?.dapil?.total_kursi);
    }
  }, [resultSurvey.resultSurveys]);

  useEffect(() => {
    filterDataBar();
  }, [selected]);

  useEffect(() => {
    if (chartTypeField === "PER PARTAI") {
      setSelected(defaultSelected);
    } else {
      setSelected(options ?? []);
    }
    filterDataBar();
  }, [dataBar]);

  const filterDataBar = () => {
    let tmpSelectedIndex = [];
    let tmpLabel = dataBar?.data?.labels?.filter((l) => {
      if (selected.indexOf(l) !== -1) {
        tmpSelectedIndex.push(options.indexOf(l));
      }
      return selected.indexOf(l) !== -1;
    });

    let tmpDatasets = [];
    dataBar?.data?.datasets?.forEach((d) => {
      let tmpBackgroundColor = d?.backgroundColor?.filter((l, i) => {
        if (tmpSelectedIndex.indexOf(i) !== -1) {
          tmpSelectedIndex.push(selected.indexOf(l));
          return true;
        }
      });
      let tmpBorderColor = d?.borderColor?.filter((l, i) => {
        if (tmpSelectedIndex.indexOf(i) !== -1) {
          tmpSelectedIndex.push(selected.indexOf(l));
          return true;
        }
      });
      let tmpData = d?.data?.filter((l, i) => {
        if (tmpSelectedIndex.indexOf(i) !== -1) {
          tmpSelectedIndex.push(selected.indexOf(l));
          return true;
        }
      });
      let tmpHoverBackgroundColor = d?.hoverBackgroundColor?.filter((l, i) => {
        if (tmpSelectedIndex.indexOf(i) !== -1) {
          tmpSelectedIndex.push(selected.indexOf(l));
          return true;
        }
      });

      let obj = {
        ...d,
        backgroundColor: tmpBackgroundColor,
        borderColor: tmpBorderColor,
        data: tmpData,
        hoverBackgroundColor: tmpHoverBackgroundColor,
      };

      tmpDatasets.push(obj);
    });

    setDataBarFiltered({
      data: {
        datasets: tmpDatasets,
        labels: tmpLabel,
      },
    });
  };

  const handleClickDownloadFile = (fileName: string) => {
    window.open(fileName, "_blank");
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChangeSelected = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;

    setSelected(typeof value === "string" ? value.split(",") : value);
  };

  const selectAll = () => {
    let tmp = [];
    options.forEach((item) => {
      tmp.push(item);
    });

    setSelected(tmp);
  };

  const deselectAll = () => {
    let tmp = [];
    setSelected(tmp);
  };

  const getTitleChart = () => {
    return chartTypeField == "PER PARTAI"
      ? `Survey Partai`
      : chartTypeField == "PER CALEG"
      ? `Survey Caleg`
      : "";
  };

  useEffect(() => {
    if (provinceField !== "" && !isFirstLoad) {
      setDapilField(dapils[0]?.id);
    }
  }, [dapils]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Loading isLoading={isLoading} />
        <Loading isLoading={isLoadingModal} />
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Hasil Survey</Typography>
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
                        Survey
                      </Link>
                      <Typography color="text.primary">Hasil Survey</Typography>
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
              <Grid item xs={12} md={12} marginTop={2} marginBottom={0}>
                <Typography variant="h4" textAlign="center">
                  <strong>{dapilName}</strong>
                </Typography>
                {dapilName !== "" && (
                  <Typography variant="h5" textAlign="center">
                    <strong>{totalKursi} Kursi</strong>
                  </Typography>
                )}
                <Grid item xs={12} md={12}>
                  {uploadSurveys?.uploadSurveys?.map((item, idx) => (
                    <Chip
                      key={idx}
                      label={`Download File Hasil Survey ${
                        item?.dapil?.name
                      } - ${DateConverter.getDisplayMonthYear(
                        item?.period_survey
                      )}`}
                      size="small"
                      variant="outlined"
                      onClick={() => {
                        handleClickDownloadFile(item?.file);
                      }}
                    />
                  ))}
                </Grid>
              </Grid>
              <Grid item component={"div"} xs={12} md={12}>
                <Grid container textAlign={"center"}>
                  <Grid
                    item
                    xs={12}
                    md={
                      chartTypeField == "PER CALEG" ||
                      chartTypeField == "PER PARTAI"
                        ? 12
                        : chartTypeField == "PEMENANG KURSI"
                        ? 0
                        : 12
                    }
                    textAlign="center"
                    padding={0}
                    margin={0}
                  >
                    <h3>
                      {resultSurveyMapped?.length > 0 ? getTitleChart() : ""}
                    </h3>
                    {resultSurveyMapped?.length > 0 ? (
                      <Grid container>
                        <Grid item xs={12} md={8} marginRight={1}>
                          <FormControl fullWidth>
                            <InputLabel id="menus-label">
                              Partai/Caleg yang ditampilkan
                            </InputLabel>
                            <Select
                              labelId="menus-label"
                              id="menus-field"
                              color="primary"
                              multiple
                              value={selected}
                              onChange={handleChangeSelected}
                              input={
                                <OutlinedInput
                                  id="select-multiple-chip"
                                  label="Partai/Caleg yang ditampilkan"
                                  color="primary"
                                />
                              }
                              renderValue={(selected) => {
                                return (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexWrap: "wrap",
                                      gap: 0.5,
                                    }}
                                  >
                                    {selected.map((value, idx) => {
                                      return <Chip key={value} label={value} />;
                                    })}
                                  </Box>
                                );
                              }}
                              MenuProps={MenuProps}
                              fullWidth
                            >
                              {options?.map((item, idx) => (
                                <MenuItem key={idx} value={item}>
                                  {item}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} md={2} marginRight={-1}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            style={{ height: "55px" }}
                            onClick={() => {
                              selectAll();
                            }}
                            fullWidth
                          >
                            Pilih semua
                          </Button>
                        </Grid>
                        <Grid item xs={6} md={1}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            style={{ height: "55px" }}
                            onClick={() => {
                              deselectAll();
                            }}
                          >
                            Reset
                          </Button>
                        </Grid>
                      </Grid>
                    ) : (
                      ""
                    )}
                    <Grid container md={12}>
                      {/* <Grid item xs={12} md={12} mt={5}> */}
                      {/* <LineChart
                          mainId={dapilField}
                          mainTitle={dapilName}
                          chartData={exampleData}
                          eventType="popup"
                          chartDetailType={
                            "DAPIL - " +
                            (chartTypeField === "PER PARTAI"
                              ? "PER PARTAI"
                              : "PER CALEG")
                          }
                        /> */}
                      {/* <ColumnSeriesChart
                          mainId={dapilField}
                          mainTitle={dapilName}
                          chartData={exampleData}
                          eventType="popup"
                          chartDetailType={
                            "DAPIL - " +
                            (chartTypeField === "PER PARTAI"
                              ? "PER PARTAI"
                              : "PER CALEG")
                          }
                        /> */}
                      {/* </Grid> */}
                      <Grid item xs={12} md={12}>
                        {dataBar?.data?.labels?.length > 0 && (
                          <GroupBarSurveyComponent dataBar={dataBarFiltered} />
                        )}
                      </Grid>
                      <Grid item xs={12} md={12}>
                        {dataInfo?.length > 0 && (
                          <TableResultChartComponent
                            data={dataInfo}
                            isParty={chartTypeField === "PER PARTAI"}
                          />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
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

export default ResultSurvey;
