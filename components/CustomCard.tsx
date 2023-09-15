import { Avatar, Badge, Box, Grid, Icon, Paper, SxProps } from "@mui/material";
import candidate from "pages/result/candidate";
import React, { FC } from "react";
import BadgeIcon from "@mui/icons-material/Badge";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";
import { useTheme } from "@mui/system";

type CustomCardProps = {
  textLeft?: string;
  textRight?: string;
  sx?: SxProps;
};

const CustomCard: FC<CustomCardProps> = ({ textLeft, textRight, sx }) => {
  const getStyle = () => {
    const baseColor =
      textLeft == "Total Daftar Pemilih Tetap (DPT)"
        ? "#242564"
        : textLeft == "Total Pengguna Hak Pilih"
        ? "#ffab40"
        : textLeft == "Total Suara Sah Pemilih"
        ? "#009688"
        : "#cccccc";
    return {
      marginTop: -20,
      marginRight: -50,
      color: "#ffffff",
      strokeWidth: 1,
      stroke: baseColor,
      width: 50,
      height: 50,
    };
  };

  const getIcon = () => {
    return textLeft == "Total Daftar Pemilih Tetap (DPT)" ? (
      <BadgeIcon style={getStyle()} />
    ) : textLeft == "Total Pengguna Hak Pilih" ? (
      <SupervisedUserCircleIcon style={getStyle()} />
    ) : textLeft == "Total Suara Sah Pemilih" ? (
      <FileDownloadDoneIcon style={getStyle()} />
    ) : (
      <DoNotTouchIcon style={getStyle()} />
    );
  };

  return (
    <Box>
      <Badge
        style={{ width: "100%" }}
        overlap="circular"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        badgeContent={getIcon()}
      >
        <Paper variant="outlined" sx={sx} style={{ width: "100%" }}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={12}
              textAlign="left"
              style={{ fontSize: 20 }}
            >
              <strong>{textRight}</strong>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              textAlign="left"
              style={{ fontSize: 14 }}
            >
              {textLeft}
            </Grid>
          </Grid>
        </Paper>
      </Badge>
    </Box>
  );
};

export default CustomCard;
