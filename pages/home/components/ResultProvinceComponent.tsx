import {
  Avatar,
  Grid,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ChartData } from "chart.js";
import numeral from "numeral";
import ResultPieChart from "pages/result/components/ResultPieChart";
import React, { FC } from "react";
import { MapResultPartyEntity } from "src/domain/entity/map-result-entity";

type ResultProvinceComponentProps = {
  title: string;
  data: ChartData<any>;
  winner: MapResultPartyEntity;
  resultParties: MapResultPartyEntity[];
};

const ResultProvinceComponent: FC<ResultProvinceComponentProps> = ({
  data,
  title,
  winner,
  resultParties,
}) => {
  return (
    <Grid container>
      <Grid item xs={12} md={12} style={{ textAlign: "end" }}>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item xs={12} md={4} mt={1}>
        <ResultPieChart
          showLegend={false}
          data={data}
          chartTitle={`Perolehan Suara Partai di Provinsi`}
        />
      </Grid>
      <Grid id="winner-container" item xs={12} md={8} mt={1} pl={3}>
        <Paper style={{ padding: 10 }}>
          <Grid container>
            <Grid item xs={12} md={9}>
              <Grid item xs={12} md={12}>
                <Typography style={{ fontSize: 12 }}>Pemenang</Typography>
              </Grid>
              <Grid item xs={12} md={12} style={{ flexDirection: "row" }}>
                <span style={{ fontSize: 20 }}>
                  <strong>
                    {numeral(winner?.total ?? "0")
                      .format("0,0")
                      .replace(",", ".")}
                  </strong>
                </span>{" "}
                <span style={{ fontSize: 12 }}>Suara</span>
              </Grid>
              <Grid item xs={12} md={12}>
                <strong>
                  <span style={{ fontSize: 20 }}>{winner?.percent}</span>
                </strong>
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              md={3}
              style={{ justifyContent: "flex-end" }}
            >
              <Avatar src={winner?.party.logo} />
            </Grid>
            <Grid item xs={12} md={12} mt={1}>
              <Typography style={{ fontSize: 13 }}>
                {winner?.party.name}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} md={12} mt={1}>
        <TableContainer component={Paper} style={{ height: `40vh` }}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Partai</TableCell>
                <TableCell>Suara</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultParties?.map((item) => (
                <TableRow
                  key={item.party.id}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {/* <Avatar src={item?.party.logo} /> */}
                    <span style={{ fontSize: 14 }}>{item?.party.name}</span>
                    <LinearProgress
                      sx={{
                        // backgroundColor: `#ffffff00`,
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: item.party.color,
                        },
                      }}
                      variant="determinate"
                      style={{ marginTop: "10px" }}
                      value={Number(
                        item.percent.replace("%", "").replace(",", ".")
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <span style={{ fontSize: 14 }}>
                      {numeral(item?.total ?? "0")
                        .format("0,0")
                        .replace(",", ".")}
                    </span>
                    <br />
                    <span style={{ fontSize: 14 }}>({item?.percent})</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default ResultProvinceComponent;
