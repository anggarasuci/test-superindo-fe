import { Box, Grid, Paper, Typography } from "@mui/material";
import { CustomDialog } from "components/CustomDialog";
import { CustomSelect } from "components/CustomSelect";
import LinearBarModalComponent from "components/linear-bar/LinearBarModalComponent";
import { Loading } from "components/Loading";
import { mapTypes } from "components/map/Component";
import { Map } from "components/map/Map";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { MapResultDapilRegionEntity } from "src/domain/entity/map-result-entity";
import { Utils } from "src/helpers/utils";
import ResultDapilRegionComponent from "./components/ResultDapilRegionComponent";
import MapViewModel from "./map-view-model";

const MapPage = () => {
  // const {
  //   token,
  //   locationPoint,
  //   mapResult,
  //   mapResultRegency,
  //   isCollected,
  //   chartData,
  //   winner,
  //   resultParties,
  //   isLoading,
  //   resultDapils,
  //   isShowWarning,
  //   showModal,
  //   linearBarData,
  //   onDapilClicked,
  //   onRegionSelected,
  //   onRegencyClicked,
  //   onCloseWarning,
  // } = MapViewModel();
  const [mapType, setMapType] = useState<mapTypes>("province");
  const [title, setTitle] = useState<string>("");
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [messageDialog, setMessageDialog] = useState<string>("");
  const [dapils, setDapils] = useState<MapResultDapilRegionEntity[]>();
  // const infoSectionHeight = 71.5;
  const infoSectionHeight = 78.5;

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        aaa
      </Grid>
    </Grid>
  );
};

export default MapPage;
