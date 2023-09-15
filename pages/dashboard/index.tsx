import {
  Grid,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import DashboardViewModel from "./dashboard-view-model";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import numeral from "numeral";
import { Loading } from "components/Loading";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { DapilDocumentEntity } from "src/domain/entity/dashboard-entity";
import { useEffect } from "react";
import { Utils } from "src/helpers/utils";
import Router from "next/router";
Chart.register();

const Dashboard = () => {
  const { dashboard, dataBar, isLoading } = DashboardViewModel();

  useEffect(() => {
    Utils.authorizePage(window.location.pathname);
    if (!Utils.isLoggedIn()) Router.push("/login");
  }, []);

  const options = {
    responsive: true,
    type: "bar",
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
        },
        display: true,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: true,
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: true,
          steps: 5,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const generateItem = (item: DapilDocumentEntity) => {
    return (
      <TableRow
        hover={true}
        sx={{
          "td, th": {
            fontSize: 14,
            color: "#00000080",
            border: 1,
            borderColor: "#DADBDA",
          },
        }}
      >
        <TableCell>{item?.dapil_name}</TableCell>
        <TableCell>
          {numeral(item?.total_doc ?? "0")
            .format("0,0")
            .replaceAll(",", ".")}
        </TableCell>
        <TableCell>
          {item?.percent_uploaded.toFixed(2).replace(".00", "") + "%"}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Grid container>
      <Grid item xs={12} md={12} mb={1}>
        <Typography variant="h5">
          Dashboard Dokumen Bacaleg 2024 Partai Nasdem
        </Typography>
      </Grid>
      <Grid item xs={12} md={3.7} m={1}>
        <Paper sx={{ padding: 2, backgroundColor: "#00968840" }}>
          <Grid md={12} direction="column" flex={1}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "10px",
              }}
            >
              <PeopleAltIcon style={{ width: "40px", height: "40px" }} />
              <Typography
                variant="h6"
                style={{ marginLeft: "7px", marginTop: "7px" }}
              >
                Total Bacaleg
              </Typography>
            </div>
            <Typography variant="h4">
              {numeral(dashboard?.total_candidate ?? "0")
                .format("0,0")
                .replaceAll(",", ".")}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3.7} m={1}>
        <Paper sx={{ padding: 2, backgroundColor: "#0091ea40" }}>
          <Grid md={12} direction="column" flex={1}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "10px",
              }}
            >
              <DriveFolderUploadIcon
                style={{ width: "40px", height: "40px" }}
              />
              <Typography
                variant="h6"
                style={{ marginLeft: "7px", marginTop: "7px" }}
              >
                Total Dokumen Terupload
              </Typography>
            </div>
            <Typography variant="h4">
              {numeral(dashboard?.total_document_uploaded ?? "0")
                .format("0,0")
                .replaceAll(",", ".")}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3.7} m={1}>
        <Paper sx={{ padding: 2, backgroundColor: "#ffab4040" }}>
          <Grid md={12} direction="column" flex={1}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "10px",
              }}
            >
              <AssignmentIndIcon style={{ width: "40px", height: "40px" }} />
              <Typography
                variant="h6"
                style={{ marginLeft: "7px", marginTop: "7px" }}
              >
                Bacaleg Dokumen Lengkap
              </Typography>
            </div>
            <Typography variant="h4">
              {numeral(dashboard?.total_document_complete ?? "0")
                .format("0,0")
                .replaceAll(",", ".")}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      {dataBar && (
        <Grid xs={12} md={11.8} mt={3} mb={2}>
          <Bar data={dataBar?.data} options={options} />
        </Grid>
      )}
      <Grid xs={12} md={12} mt={3}>
        <Typography variant="h6">
          Persentase Jumlah Dokumen Terupload Per Dapil
        </Typography>
      </Grid>
      <Grid xs={12} md={11.8} mb={2}>
        <TableContainer>
          <Table size="small">
            <TableRow
              sx={{
                "td, th": {
                  fontSize: 14,
                  background: "#00000010",
                  fontWeight: "bold",
                  color: "#00000080",
                  border: 1,
                  borderColor: "#DADBDA",
                },
              }}
            >
              <TableCell>Nama Dapil</TableCell>
              <TableCell>Jumlah Dokumen Terupload</TableCell>
              <TableCell>Persentase</TableCell>
            </TableRow>

            <TableBody>
              {dashboard?.dapil_document_uploaded &&
                dashboard?.dapil_document_uploaded?.map((item) => {
                  return generateItem(item);
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Loading isLoading={isLoading} />
    </Grid>
  );
};

export default Dashboard;
