import AirlineSeatReclineNormalRoundedIcon from "@mui/icons-material/AirlineSeatReclineNormalRounded";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import PercentIcon from "@mui/icons-material/Percent";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import DialpadIcon from "@mui/icons-material/Dialpad";
import {
  Avatar,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import numeral from "numeral";
import React, { FC } from "react";
import {
  LineDataSeriesEntity,
  ResultSurveyByPeriodDataEntity,
  ResultSurveyByPeriodEntity,
} from "src/domain/entity/result-survey-entity";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { LineSeriesUtil } from "src/helpers/line-series-util";
Chart.register();

type TableResultChartComponentProps = {
  data: ResultSurveyByPeriodEntity[];
  isParty?: boolean;
};

const TableResultChartComponent: FC<TableResultChartComponentProps> = ({
  data,
  isParty,
}) => {
  // const getLineChartData = (
  //   items: LineDataSeriesEntity[],
  //   color: string,
  //   bulletBorderColor: string
  // ) => {
  //   const result = {
  //     labels: items?.map(() => ""),
  //     datasets: [
  //       {
  //         lineTension: 0,
  //         data: items.map((item) => item.y),
  //         fill: false,
  //         borderColor: color,
  //         pointBorderColor: items?.map(() => bulletBorderColor),
  //         pointBackgroundColor: items?.map(() => color),
  //       },
  //     ],
  //   };
  //   return result;
  // };

  const getBarChartData = (
    items: LineDataSeriesEntity[],
    color: string,
    bulletBorderColor: string
  ) => {
    const result = {
      labels: items?.map(() => ""),
      datasets: [
        {
          data: items.map((item) => item.y),
          borderColor: items?.map(() => bulletBorderColor),
          backgroundColor: items?.map(() => color),
          borderWidth: 1,
        },
      ],
    };
    return result;
  };

  const generateItemData = (item: ResultSurveyByPeriodDataEntity) => {
    return (
      <TableRow
        sx={{
          "td, th": {
            fontSize: 14,
            color: "#00000080",
            border: 1,
            borderColor: "#DADBDA",
          },
        }}
      >
        <TableCell style={{ minWidth: "180px" }}>
          <span>{item?.institution?.name}</span>
          <br />
          <span>{item?.period_survery}</span>
        </TableCell>
        <TableCell>
          {numeral(item?.total_pengguna_hak_pilih ?? "0")
            .format("0,0")
            .replaceAll(",", ".")}{" "}
        </TableCell>
        <TableCell>
          {numeral(item?.total_sah ?? "0")
            .format("0,0")
            .replaceAll(",", ".")}{" "}
        </TableCell>
        <TableCell>
          <strong>
            <span>{item?.result}</span>
          </strong>
        </TableCell>
        <TableCell>
          {item?.total_kursi == 0 ? "-" : item?.total_kursi}
        </TableCell>
        {isParty && <TableCell>{item?.position}</TableCell>}
      </TableRow>
    );
  };

  const generateItem = (item: ResultSurveyByPeriodEntity) => {
    return (
      <>
        <TableRow
          sx={{
            "td, th": {
              fontSize: 14,
              color: "#00000080",
              border: 1,
              borderColor: "#DADBDA",
            },
          }}
        >
          <TableCell rowSpan={item?.data?.length + 1}>
            <div
              style={{
                height: "20px",
                width: "20px",
                background: item?.party?.color,
                borderRadius: 30,
                border: `2px solid ${item?.party?.secondary_color}`,
              }}
            />
          </TableCell>
          <TableCell colSpan={isParty ? 6 : 5}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span style={{ marginRight: item?.candidate ? 20 : 0 }}>
                <strong>{item?.candidate?.name}</strong>
              </span>

              <Avatar
                sx={{ boxShadow: 1 }}
                style={{ width: 20, height: 20, marginRight: 10 }}
                src={item?.party?.logo}
              />
              <span style={{ marginRight: 75 }}>
                <strong>{item?.party?.short_name}</strong>
              </span>
            </div>
          </TableCell>
          <TableCell rowSpan={item?.data?.length + 1}>
            {item?.lineDataSeries?.length > 0 && (
              <div style={{ width: "auto", maxWidth: "100px" }}>
                <Line
                  data={LineSeriesUtil.getLineChartData(
                    item?.lineDataSeries,
                    item?.party?.color,
                    item?.party?.secondary_color
                  )}
                  options={LineSeriesUtil.options}
                />

                {/* <Bar
                  data={getBarChartData(
                    item?.lineDataSeries,
                    item?.party?.color,
                    item?.party?.secondary_color
                  )}
                  options={LineSeriesUtil.options}
                /> */}
              </div>
            )}
          </TableCell>
        </TableRow>

        {item?.data?.map((itemData) => {
          return generateItemData(itemData);
        })}
      </>
    );
  };

  return (
    <Grid container>
      <Grid item md={12} mr={1} mt={5}>
        <div
          style={{
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ marginTop: 0 }}>
            <SupervisedUserCircleIcon
              style={{
                width: "30px",
                height: "30px",
                marginBottom: "-10px",
                color: "#00000080",
              }}
            />
            <span style={{ marginRight: 30, marginLeft: 10 }}>
              Total Hak Pilih
            </span>
          </div>

          <div style={{ marginTop: 0 }}>
            <FileDownloadDoneIcon
              style={{
                width: "30px",
                height: "30px",
                marginBottom: "-10px",
                color: "#00000080",
              }}
            />
            <span style={{ marginRight: 30, marginLeft: 7 }}>Total Sah</span>
          </div>

          <div style={{ marginTop: 0 }}>
            <PercentIcon
              style={{
                width: "26px",
                height: "30px",
                marginBottom: "-10px",
                color: "#00000080",
              }}
            />
            <span style={{ marginRight: 30, marginLeft: 7 }}>Persentase</span>
          </div>

          <div style={{ marginTop: 0 }}>
            <AirlineSeatReclineNormalRoundedIcon
              style={{
                width: "26px",
                height: "30px",
                marginBottom: "-10px",
                color: "#00000080",
              }}
            />
            <span style={{ marginRight: 30, marginLeft: 7 }}>Kursi</span>
          </div>

          {isParty && (
            <div style={{ marginTop: 0 }}>
              <DialpadIcon
                style={{
                  width: "26px",
                  height: "30px",
                  marginBottom: "-10px",
                  color: "#00000080",
                }}
              />
              <span style={{ marginRight: 30, marginLeft: 7 }}>Nomor Urut</span>
            </div>
          )}
        </div>
      </Grid>
      {data && (
        <Grid item xs={12} md={12} mb={3} mr={1}>
          <TableContainer style={{ maxHeight: "730px" }}>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow
                  sx={{
                    "td, th": {
                      fontSize: 14,
                      background: "#CCCCCC",
                      fontWeight: "bold",
                      color: "#00000080",
                      border: 1,
                      borderColor: "#DADBDA",
                    },
                  }}
                >
                  <TableCell
                    style={{
                      textAlign: "center",
                      width: "50px",
                      backgroundColor: "#CCCCCC",
                    }}
                  ></TableCell>
                  <TableCell style={{ textAlign: "center" }}>Periode</TableCell>
                  <TableCell style={{ textAlign: "center", width: "80px" }}>
                    <SupervisedUserCircleIcon
                      style={{
                        width: "28px",
                        height: "28px",
                        marginBottom: "-5px",
                      }}
                    />
                  </TableCell>
                  <TableCell style={{ textAlign: "center", width: "80px" }}>
                    <FileDownloadDoneIcon
                      style={{
                        width: "28px",
                        height: "28px",
                        marginBottom: "-5px",
                      }}
                    />
                  </TableCell>
                  <TableCell style={{ textAlign: "center", width: "50px" }}>
                    <PercentIcon
                      style={{
                        width: "25px",
                        height: "28px",
                        marginBottom: "-5px",
                      }}
                    />
                  </TableCell>
                  <TableCell style={{ textAlign: "center", width: "50px" }}>
                    <AirlineSeatReclineNormalRoundedIcon
                      style={{
                        width: "25px",
                        height: "28px",
                        marginBottom: "-5px",
                      }}
                    />
                  </TableCell>
                  {isParty && (
                    <TableCell style={{ textAlign: "center", width: "50px" }}>
                      <DialpadIcon
                        style={{
                          width: "25px",
                          height: "28px",
                          marginBottom: "-5px",
                        }}
                      />
                    </TableCell>
                  )}
                  <TableCell
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Grafik
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => {
                  return generateItem(item);
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
        </Grid>
      )}
    </Grid>
  );
};

export default TableResultChartComponent;
