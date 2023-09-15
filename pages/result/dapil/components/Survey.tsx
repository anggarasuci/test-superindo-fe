import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Chip,
  OutlinedInput,
  Paper,
  SelectChangeEvent,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { CustomDialog } from "components/CustomDialog";
import _ from "lodash";
import { DateConverter } from "src/helpers/date-converter";
import GroupBarSurveyComponent from "pages/result/survey/components/GroupBarSurveyComponent";
import TableResultChartComponent from "pages/result/survey/components/TableResultChartComponent";
import { ResultSurveyByPeriodEntity } from "src/domain/entity/result-survey-entity";
import getConfig from "next/config";

type SurveyProps = {
  chartTypeField: string;
  surveyFilePath: [any];
  dataInfo: ResultSurveyByPeriodEntity[];
  dataBar: any;
  resultSurveyMapped: any[];
};

const Survey: FC<SurveyProps> = ({
  chartTypeField,
  surveyFilePath,
  dataInfo,
  dataBar,
  resultSurveyMapped,
}) => {
  const { publicRuntimeConfig } = getConfig();
  const defaultSelected = publicRuntimeConfig.defaultSelectedSurveyParty;

  // const [chartTypeField, setChartTypeField] = useState<string>("");
  const [selected, setSelected] = useState<any[]>([]);
  const [options, setOptions] = useState<any[]>([]);

  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [messageDialog, setMessageDialog] = useState<string>("");

  const [exampleData, setExampleData] = useState<Array<any>>([]);
  const [dataBarFiltered, setDataBarFiltered] = useState<any>({});

  const [paths, setPaths] = useState<any[]>([]);

  useEffect(() => {
    setPaths(surveyFilePath);
  }, [surveyFilePath]);

  useEffect(() => {
    setExampleData(resultSurveyMapped);
  }, [resultSurveyMapped]);

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

  useEffect(() => {
    let tmpLabels = dataInfo?.map((item) =>
      item.candidate
        ? `${item.candidate?.name} - ${item.party?.short_name}`
        : item?.party?.short_name
    );

    setOptions(tmpLabels);
    if (chartTypeField !== "PER PARTAI") {
      setSelected(tmpLabels);
    }
  }, [dataInfo]);

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

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={0} md={1} />
              <Grid item xs={12} md={12} marginTop={2} marginBottom={0}>
                {paths?.map((item, idx) => (
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
                    <h3>{exampleData.length > 0 ? getTitleChart() : ""}</h3>
                    {exampleData.length > 0 ? (
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
                        <Grid item xs={12} md={12}>
                          {dataBar?.data?.labels?.length > 0 && (
                            <GroupBarSurveyComponent
                              dataBar={dataBarFiltered}
                            />
                          )}
                        </Grid>
                        <Grid item xs={12} md={12}>
                          {dataInfo?.length > 0 && (
                            <TableResultChartComponent data={dataInfo} />
                          )}
                        </Grid>
                      </Grid>
                    ) : (
                      ""
                    )}
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

export default Survey;
