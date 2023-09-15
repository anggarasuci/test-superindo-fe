import {
  Avatar,
  Button,
  Divider,
  Grid,
  List,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import numeral from "numeral";
import React, { FC } from "react";
import {
  MapResultDapilRegencyEntity,
  MapResultDapilRegionEntity,
  MapResultPartyMemberEntity,
} from "src/domain/entity/map-result-entity";
import AirlineSeatReclineNormalRoundedIcon from "@mui/icons-material/AirlineSeatReclineNormalRounded";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import _ from "lodash";

type ResultDapilRegionComponentProps = {
  title: string;
  data: MapResultDapilRegionEntity[];
  mapType: "city" | "province";
  onDapilClick: (id: string) => void;
  onRegencyClick: (id: string) => void;
};

const ResultDapilRegionComponent: FC<ResultDapilRegionComponentProps> = ({
  data,
  title,
  mapType,
  onDapilClick,
  onRegencyClick,
}) => {
  const maxheight = 69; //62;

  const getLink = (provinceCode: string, dapilCode: String) => {
    const url = `${window.location
      .toString()
      .replace(
        "home",
        ""
      )}/result/dapil?province=${provinceCode}&dapil=${dapilCode}`;
    window.open(url, "_self");
  };

  const getLinkByRegency = (provinceCode: string, regencyCode: String) => {
    return `${window.location
      .toString()
      .replace(
        "home",
        ""
      )}/result/city?province=${provinceCode}&regency=${regencyCode}`;
  };

  const getLinkByProvince = (provinceCode: string) => {
    return `${window.location
      .toString()
      .replace("home", "")}/result/province?province=${provinceCode}`;
  };

  const getTotalChairProvince = () => {
    const total = _.sumBy(data, "dapil.total_kursi");
    return total;
  };

  const renderRegencyItemContentTable = (
    regencies: MapResultDapilRegencyEntity[]
  ) => {
    return regencies?.map((item) => {
      return (
        <>
          <TableRow
            key={item.party.id}
            sx={{
              "td, th": {
                border: 1,
                borderColor: "#DADBDA80",
              },
            }}
          >
            <TableCell
              component="th"
              scope="row"
              rowSpan={2}
              sx={{ "&:last-child th": { border: 4 } }}
            >
              <a
                style={{ cursor: "pointer" }}
                // target={"_blank"}
                // rel="noreferrer"
                // href={getLinkByRegency(
                //   item.regency.province.id,
                //   item.regency.id
                // )}
                onClick={() => {
                  onRegencyClick?.(item.regency.id);
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    background: item.party.color,
                    color: item.party.text_color,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                  }}
                >
                  {item?.regency.name}
                </span>
              </a>
            </TableCell>

            <TableCell style={{ width: 30 }}>
              <Avatar src={item.party.logo} style={{ width: 27, height: 27 }} />
            </TableCell>

            <TableCell>
              <span style={{ fontSize: 14 }}>
                <strong>
                  {numeral(item?.total_suara ?? "0")
                    .format("0,0")
                    .replaceAll(",", ".")}
                </strong>
              </span>
            </TableCell>
          </TableRow>
          <TableRow
            sx={{
              "td, th": {
                border: 1,
                borderColor: "#DADBDA80",
              },
            }}
          >
            <TableCell component="th" scope="row" colSpan={2}>
              <span style={{ fontSize: 12 }}>{item?.party.name}</span>
            </TableCell>
          </TableRow>
          <TableRow
            sx={{
              "td, th": {
                border: 2,
                borderColor: "#DADBDA",
              },
            }}
          >
            <TableCell
              component="th"
              scope="row"
              colSpan={3}
              style={{ padding: 0 }}
            />
          </TableRow>
        </>
      );
    });
  };

  const renderRegencyContentTable = (
    regencies: MapResultDapilRegencyEntity[]
  ) => {
    return (
      <Grid item xs={12} md={12} mt={1}>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow
                sx={{
                  "td, th": {
                    border: 1,
                    borderColor: "#DADBDA80",
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                }}
              >
                <TableCell>Kota / Kab</TableCell>
                <TableCell>Partai</TableCell>
                <TableCell>Suara</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderRegencyItemContentTable(regencies)}</TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  };

  const renderPartyMemberItem = (partyMember: MapResultPartyMemberEntity) => {
    return partyMember?.parties?.map((item, index) => {
      return (
        <>
          <TableRow
            key={item.id}
            sx={{
              "td, th": {
                border: 1,
                borderColor: "#DADBDA80",
              },
            }}
          >
            <TableCell
              component="th"
              scope="row"
              rowSpan={2}
              style={{ width: 30 }}
            >
              <span style={{ fontSize: 12 }}>{index + 1}</span>
            </TableCell>
            <TableCell style={{ width: 30 }}>
              <Avatar src={item.logo} style={{ width: 27, height: 27 }} />
            </TableCell>

            <TableCell>
              <span style={{ fontSize: 14 }}>
                <strong>
                  {numeral(partyMember?.total_suara?.[index] ?? "0")
                    .format("0,0")
                    .replaceAll(",", ".")}
                </strong>
              </span>
            </TableCell>
          </TableRow>
          <TableRow
            sx={{
              "td, th": {
                border: 1,
                borderColor: "#DADBDA80",
              },
            }}
          >
            <TableCell component="th" scope="row" colSpan={2}>
              <span style={{ fontSize: 12 }}>{item?.name}</span>
            </TableCell>
          </TableRow>
        </>
      );
    });
  };

  const renderPartyMemberContent = (
    partyMember: MapResultPartyMemberEntity
  ) => {
    return (
      <Grid item xs={12} md={12} mt={1}>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow
                sx={{
                  "td, th": {
                    border: 1,
                    borderColor: "#DADBDA80",
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                }}
              >
                <TableCell>No</TableCell>
                <TableCell>Partai</TableCell>
                <TableCell>Suara</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderPartyMemberItem(partyMember)}</TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  };

  const renderDapilItemContent = () => {
    return data?.map((item, index) => {
      return (
        <>
          <Grid
            container
            xs={12}
            md={12}
            // display={mapType == "city" ? "none" : ""}
          >
            <Grid item xs={12} md={10} mt={index == 0 ? 0 : 4}>
              <Divider textAlign="left">
                <Button
                  // href={getLink(
                  //   item.regencies?.[0]?.regency?.province?.id ?? "",
                  //   item.dapil.id
                  // )}
                  variant="contained"
                  color="secondary"
                  // size="medium"
                  // target="_self"
                  // rel="noreferrer"
                  sx={{
                    borderRadius: 15,
                  }}
                  onClick={() => {
                    //onDapilClick?.(item.dapil.id);
                    getLink(
                      item.regencies?.[0]?.regency?.province?.id ?? "",
                      item.dapil.id
                    );
                  }}
                  fullWidth
                >
                  {item.dapil.name}
                </Button>
              </Divider>
            </Grid>
            <Grid
              container
              mt={index == 0 ? 0 : 4}
              xs={12}
              md={2}
              style={{
                alignSelf: "center",
                alignItems: "center",
                background: "#00000090",
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                // borderTopRightRadius:10
              }}
            >
              <Grid xs={12} md={6}>
                <AirlineSeatReclineNormalRoundedIcon
                  style={{ width: 25, height: 25 }}
                  sx={{ color: "#ffffff", marginTop: 0.6, marginLeft: 1 }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Typography style={{ fontSize: 16, color: "#ffffff" }}>
                  <strong>{item.dapil.total_kursi}</strong>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} mt={1} hidden={mapType == "city"}>
            <Paper
              style={{
                padding: 10,
                background: item.winner?.party?.color,
                boxShadow: "none",
                borderRadius: 15,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <Grid container>
                <Grid item xs={12} md={9}>
                  <Grid item xs={12} md={12}>
                    <Typography
                      style={{
                        fontSize: 12,
                        color: item.winner?.party?.text_color,
                      }}
                    >
                      Suara Terbanyak
                    </Typography>
                  </Grid>

                  <Grid
                    container
                    xs={12}
                    md={12}
                    style={{
                      background: item.winner.party.color,
                      alignItems: "center",
                      // borderRadius: 20,
                    }}
                  >
                    <Grid
                      container
                      xs={12}
                      md={8}
                      style={{
                        alignSelf: "center",
                        alignItems: "center",
                        background: item.winner.party.color,
                        // borderBottomLeftRadius: 10,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        marginRight: 1,
                      }}
                    >
                      <Grid item xs={12} md={3}>
                        <HowToVoteIcon
                          style={{ width: 20, height: 20 }}
                          sx={{
                            color: item.winner.party.text_color,
                            marginTop: 0.6,
                            marginLeft: 1.5,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={9}>
                        <span
                          style={{
                            fontSize: 20,
                            color: item.winner?.party?.text_color,
                          }}
                        >
                          <strong>
                            {numeral(item.winner?.total_suara ?? "0")
                              .format("0,0")
                              .replaceAll(",", ".")}
                          </strong>
                        </span>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      xs={12}
                      md={3}
                      style={{
                        alignSelf: "center",
                        alignItems: "center",
                        background: item.winner.party.color,
                        // borderTopRightRadius: 10,
                        marginLeft: 1,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        md={7}
                        style={{
                          justifyContent: "flex-end",
                          textAlign: "end",
                          paddingRight: 5,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 20,
                            color: item.winner?.party?.text_color,
                          }}
                        >
                          <strong>
                            {numeral(item.winner?.total_kursi ?? "0")
                              .format("0,0")
                              .replace(",", ".")}
                          </strong>
                        </span>
                      </Grid>
                      <Grid
                        item
                        xs={5}
                        md={3}
                        style={{ justifyContent: "flex-end" }}
                      >
                        <AirlineSeatReclineNormalRoundedIcon
                          style={{ width: 20, height: 20 }}
                          sx={{
                            color: item.winner.party.text_color,
                            marginTop: 0.6,
                            marginRight: 2,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  md={3}
                  style={{ justifyContent: "flex-end" }}
                >
                  <Avatar src={item.winner?.party.logo} />
                </Grid>
                <Grid item xs={12} md={12} mt={1}>
                  <Typography
                    style={{
                      fontSize: 13,
                      color: item.winner?.party?.text_color,
                    }}
                  >
                    {item.winner?.party.name}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {renderRegencyContentTable(item?.regencies)}
          {/* <Typography>{item?.regencies?.at(0)?.partyMembers?.at(0)?.total_suara}</Typography> */}
          {mapType == "city"
            ? renderPartyMemberContent(item?.regencies?.[0]?.partyMember)
            : null}
        </>
      );
    });
  };

  return (
    <>
      {data && (
        <Grid container>
          <Grid
            container
            xs={12}
            md={12}
            mb={2}
            style={{
              color: "#00000597",
              background: "#DADBDA70",
              // padding: 5,
              // paddingRight: 20,
              borderRadius: 10,
            }}
            display={mapType == "city" ? "none" : ""}
          >
            <Grid
              container
              xs={12}
              md={3}
              style={{
                alignSelf: "center",
                alignItems: "center",
                background: "#00000090",
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <Grid xs={12} md={4}>
                <AirlineSeatReclineNormalRoundedIcon
                  style={{ width: 25, height: 25 }}
                  sx={{ color: "#ffffff", marginTop: 0.6, marginLeft: 1 }}
                />
              </Grid>
              <Grid xs={12} md={8}>
                <Typography style={{ fontSize: 16, color: "#ffffff" }}>
                  <strong>{getTotalChairProvince()}</strong>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              style={{
                textAlign: "end",
                alignSelf: "center",
                paddingRight: 20,
              }}
            >
              <Typography variant="h6">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={getLinkByProvince(
                    data?.[0].regencies?.[0]?.regency?.province?.id
                  )}
                >
                  {title}
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <List
              key={"id"}
              style={{
                maxHeight: `${maxheight}vh`,
                overflow: "auto",
                paddingLeft: 1,
                paddingRight: 1,
              }}
            >
              {renderDapilItemContent()}
            </List>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ResultDapilRegionComponent;
