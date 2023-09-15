import AirlineSeatReclineNormalRoundedIcon from "@mui/icons-material/AirlineSeatReclineNormalRounded";
import Deck from "@mui/icons-material/Deck";
import {
  Avatar,
  Button,
  Grid,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import numeral from "numeral";
import React, { FC } from "react";
import { CandidateEntity } from "src/domain/entity/candidate-entity";
import { ResultWinnerSeatProvinceEntity } from "src/domain/entity/result-winner-seat-entity";
import trophy from "assets/trophy.png";
import medal from "assets/medal.png";
import potential from "assets/bronze-medal.png";
import hold from "assets/forbidden.png";
import Image from "next/image";

type ResultSeatComponentProps = {
  data: ResultWinnerSeatProvinceEntity[];
  onCandidateClicked: (id: string) => void;
  onClicked: (id: string) => void;
};

const ResultSeatComponent: FC<ResultSeatComponentProps> = ({
  data,
  onCandidateClicked,
  onClicked,
}) => {
  const getCandidateLink = (party: string, candidate: string) => {
    return `${window.location
      .toString()
      .replace("seat", "")
      .replace("#", "")}/candidate?party=${party}&candidate=${candidate}`;
  };

  const getDapilLink = (province: string, dapil: string) => {
    return `${window.location
      .toString()
      .replace("seat", "")
      .replace("#", "")}/dapil?province=${province}&dapil=${dapil}`;
  };

  const potentialHeadContent = () => {
    return (
      <TableRow
        sx={{
          "td, th": {
            fontSize: 14,
            fontWeight: "bold",
            color: "#00000080",
            border: 1,
            borderColor: "#DADBDA",
          },
        }}
      >
        <TableCell style={{ width: 50 }} colSpan={4}>
          Kandidat Potensial
        </TableCell>
      </TableRow>
    );
  };

  const getIcon = (isWinner: boolean, rank: number, total_kursi: number) => {
    const icon = isWinner ? trophy : rank > total_kursi ? potential : hold;
    return <Image width="20" height="20" src={icon} />;
  };

  const generateCandidateContent = (
    item: CandidateEntity[],
    saint_laguages: number[],
    total_suara: number[],
    rank: number[],
    winner: boolean[],
    total_kursi: number
  ) => {
    let isPotentialHeadContentGenerated = false;
    return (
      <>
        {item?.map((candidate, index) => {
          return (
            <>
              {rank?.[index] > total_kursi &&
                !isPotentialHeadContentGenerated &&
                potentialHeadContent()}
              {(isPotentialHeadContentGenerated = rank?.[index] > total_kursi)}
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
                <TableCell rowSpan={2}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ marginRight: 10 }}>
                      {rank?.[index] ?? "-"}
                    </span>
                    {getIcon(winner?.[index], rank?.[index], total_kursi)}
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>
                      <Link
                        target={"_blank"}
                        rel="noreferrer"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          onCandidateClicked?.(candidate?.id?.toString());
                        }}
                      >
                        {candidate?.name}
                      </Link>
                    </span>
                  </div>
                </TableCell>
                <TableCell rowSpan={2}>
                  {numeral(total_suara?.[index] ?? "0")
                    .format("0,0")
                    .replaceAll(",", ".")}{" "}
                </TableCell>
                <TableCell rowSpan={2}>
                  {numeral(saint_laguages?.[index] ?? "0")
                    .format("0,0")
                    .replaceAll(",", ".")}{" "}
                </TableCell>
              </TableRow>
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
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Avatar
                      style={{ width: 20, height: 20, marginRight: 10 }}
                      src={candidate?.party?.logo}
                    />
                    <span>{candidate?.party?.short_name}</span>
                  </div>
                </TableCell>
              </TableRow>
            </>
          );
        })}
      </>
    );
  };

  const generateDapilContent = (provinceId, item) => {
    return (
      <>
        <TableRow
          sx={{
            "td, th": {
              background: "#ececec",
              fontSize: 18,
              fontWeight: "bold",
              color: "#000000",
              border: 1,
              borderColor: "#DADBDA",
            },
          }}
        >
          <TableCell component="th" scope="row" colSpan={2}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Deck
                style={{ width: 25, height: 25, marginRight: 15 }}
                sx={{ color: "#000000" }}
              />
              <div>
                <Button
                  href={getDapilLink(provinceId, item?.dapil?.id)}
                  variant="contained"
                  color="secondary"
                  size="medium"
                  sx={{
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                    borderTopLeftRadius: 1,
                    borderBottomLeftRadius: 1,
                    height: 30,
                    boxShadow: 0,
                    background: "#00000030",
                    fontWeight: "bold",
                  }}
                >
                  {item?.dapil?.name}
                </Button>
              </div>
            </div>
          </TableCell>
          <TableCell component="th" scope="row" colSpan={2}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <AirlineSeatReclineNormalRoundedIcon
                style={{ width: 25, height: 25, marginRight: 10 }}
                sx={{ color: "#000000" }}
              />
              <span>{item?.dapil?.total_kursi}</span>
            </div>
          </TableCell>
        </TableRow>

        <TableRow
          sx={{
            "td, th": {
              fontSize: 14,
              fontWeight: "bold",
              color: "#00000080",
              border: 1,
              borderColor: "#DADBDA",
            },
          }}
        >
          <TableCell style={{ width: 50 }} rowSpan={2}>
            Peringkat
          </TableCell>
          <TableCell rowSpan={2}>Kandidat</TableCell>
          <TableCell colSpan={2} style={{ textAlign: "center" }}>
            Total
          </TableCell>
        </TableRow>

        <TableRow
          sx={{
            "td, th": {
              fontSize: 14,
              fontWeight: "bold",
              color: "#00000080",
              border: 1,
              borderColor: "#DADBDA",
            },
          }}
        >
          <TableCell style={{ width: 150 }}>Suara</TableCell>
          <TableCell style={{ width: 150 }}>Saint Laguage</TableCell>
        </TableRow>

        {generateCandidateContent(
          item?.candidates,
          item?.saint_laguages,
          item?.total_suara,
          item?.rank,
          item?.winner,
          item?.dapil?.total_kursi
        )}
      </>
    );
  };

  const generateProvinceContent = (item) => {
    return (
      <Grid container>
        <Grid
          container
          md={12}
          mb={1}
          style={{
            alignSelf: "center",
            padding: 5,
            paddingLeft: 20,
            alignItems: "center",
            background: "#cecece80",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Grid item md={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                fontSize: 18,
                fontWeight: "bold",
                color: "#00000090",
              }}
            >
              <span style={{ marginRight: 30 }}>{item?.province?.name}</span>
              {/* <span style={{ marginRight: 30, fontStyle:"italic" }}>( Total Kursi 10 )</span> */}
            </div>
          </Grid>
        </Grid>

        {item?.dapils && (
          <Grid item xs={12} md={12} mb={3} mt={-1}>
            <TableContainer>
              <Table size="small">
                <TableBody>
                  {item?.dapils?.map((dapil) => {
                    return generateDapilContent(item?.province?.id, dapil);
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        )}
      </Grid>
    );
  };

  return (
    <Grid container>
      {data?.map((item) => {
        return generateProvinceContent(item);
      })}
    </Grid>
  );
};

export default ResultSeatComponent;
