import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Style } from "components/styles";
import numeral from "numeral";
import React, { FC } from "react";
import { ResultDapilEntity } from "src/domain/entity/result-dapil-entity";

type ResultDapilModalComponentProps = {
  isOpenModal: boolean;
  data: ResultDapilEntity[];
  onClose: () => void;
};

const ResultDapilModalComponent: FC<ResultDapilModalComponentProps> = ({
  isOpenModal,
  data,
  onClose,
}) => {
  const generateItem = (item: ResultDapilEntity) => {
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
              src={item?.party?.logo}
            />
            <span>{item?.party?.short_name}</span>
          </div>
        </TableCell>
        <TableCell>
          {numeral(item?.total_suara ?? "0")
            .format("0,0")
            .replaceAll(",", ".")}{" "}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Style.StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={isOpenModal}
      onClose={() => {}}
    >
      <Box sx={{ margin: 1, width: 500 }}>
        <Paper
          variant="outlined"
          sx={{ padding: 1, margin: 0, backgroundColor: "primary.main" }}
        >
          <Grid container margin={0.5} pl={1}>
            <Grid item xs={12} md={11}>
              <Typography variant="h6" color="secondary.main">
                {data?.[0]?.dapil?.name}
              </Typography>
            </Grid>
            <Grid item xs={12} md={1}>
              <Typography
                variant="h6"
                style={{ color: "#FFFFFF", cursor: "pointer" }}
              >
                <span
                  style={{}}
                  onClick={() => {
                    onClose();
                  }}
                >
                  X
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            padding: 1,
            marginTop: 0,
            backgroundColor: "background.default",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={12}>
              <TableContainer sx={{ height: 450 }}>
                <Table aria-label="simple table">
                  <TableBody>
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
                      <TableCell>Partai</TableCell>
                      <TableCell>Total Suara</TableCell>
                    </TableRow>
                    {data?.map((item) => {
                      return generateItem(item);
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Style.StyledModal>
  );
};

export default ResultDapilModalComponent;
