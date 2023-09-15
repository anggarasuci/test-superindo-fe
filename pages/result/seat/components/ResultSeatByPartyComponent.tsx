import {
  Avatar,
  Grid,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import potential from "assets/bronze-medal.png";
import hold from "assets/forbidden.png";
import trophy from "assets/trophy.png";
import Image from "next/image";
import numeral from "numeral";
import React, { FC } from "react";
import {
  ResultWinnerSeatByPartyEntity,
  WinnerSeatPartyEntity,
} from "src/domain/entity/result-winner-seat-entity";

type ResultSeatByPartyComponentProps = {
  data: ResultWinnerSeatByPartyEntity;
  onCandidateClicked: (id: string) => void;
  onClicked: (id: string) => void;
};

const ResultSeatByPartyComponent: FC<ResultSeatByPartyComponentProps> = ({
  data,
  onCandidateClicked,
  onClicked,
}) => {
  const getDapilLink = (province: string, dapil: string) => {
    return `${window.location
      .toString()
      .replace("seat", "")
      .replace("#", "")}/dapil?province=${province}&dapil=${dapil}`;
  };

  const generateItem = (item: WinnerSeatPartyEntity) => {
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
        <TableCell>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <span style={{ marginRight: 10 }}>{item?.sequence ?? "-"}</span>
            <Image
              width="20"
              height="20"
              src={
                item?.status == "winner"
                  ? trophy
                  : item?.status == "potential"
                  ? potential
                  : hold
              }
            />
          </div>
        </TableCell>
        <TableCell>
          <span>
            <Link
              style={{ cursor: "pointer" }}
              onClick={() => {
                onCandidateClicked?.(item?.candidate?.id?.toString());
              }}
            >
              {item?.candidate?.name}
            </Link>
          </span>
        </TableCell>
        <TableCell>
          {numeral(item?.total_suara ?? "0")
            .format("0,0")
            .replaceAll(",", ".")}
        </TableCell>
        <TableCell>
          {numeral(item?.total_suara_saint_lague ?? "0")
            .format("0,0")
            .replaceAll(",", ".")}
        </TableCell>
        <TableCell>
          <span>
            <Link
              href={getDapilLink(item?.province?.id, item?.dapil?.id)}
              style={{ cursor: "pointer" }}
            >
              {item?.dapil?.name}
            </Link>
          </span>
        </TableCell>
        <TableCell>{item?.province?.name}</TableCell>
      </TableRow>
    );
  };

  return (
    <Grid container>
      <Grid item md={12} mr={1}>
        <div
          style={{
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Avatar
            sx={{ boxShadow: 3 }}
            style={{ width: 40, height: 40, marginRight: 10 }}
            src={data?.data?.[0]?.party?.logo}
          />
          <span style={{ marginRight: 75, marginTop: 15 }}>
            <strong>{data?.data?.[0]?.party?.short_name}</strong>
          </span>

          <div style={{ marginTop: 13 }}>
            <Image width="20" height="20" src={trophy} />
            <span style={{ marginRight: 30, marginLeft: 10, marginTop: 5 }}>
              {data?.total_winner}
            </span>
          </div>

          <div style={{ marginTop: 13 }}>
            <Image width="20" height="20" src={potential} />
            <span style={{ marginRight: 30, marginLeft: 10, marginTop: 5 }}>
              {data?.total_potential}
            </span>
          </div>

          <div style={{ marginTop: 13 }}>
            <Image width="20" height="20" src={hold} />
            <span style={{ marginRight: 30, marginLeft: 10, marginTop: 5 }}>
              {data?.total_tracehold}
            </span>
          </div>
        </div>
      </Grid>
      {data?.data && (
        <Grid item xs={12} md={12} mb={3} mr={1}>
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
                <TableCell style={{ width: 50 }} rowSpan={2}>
                  Peringkat
                </TableCell>
                <TableCell rowSpan={2}>Kandidat</TableCell>
                <TableCell colSpan={2} style={{ textAlign: "center" }}>
                  Total
                </TableCell>
                <TableCell rowSpan={2}>Dapil</TableCell>
                <TableCell rowSpan={2}>Provinsi</TableCell>
              </TableRow>

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
                <TableCell>Suara</TableCell>
                <TableCell>Saint League</TableCell>
              </TableRow>

              <TableBody>
                {data?.data?.map((item) => {
                  return generateItem(item);
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      )}
    </Grid>
  );
};

export default ResultSeatByPartyComponent;
