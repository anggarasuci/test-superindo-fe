import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { CustomAlert } from "components/CustomAlert";
import { Loading } from "components/Loading";
import { useEffect, useMemo, useState } from "react";
import { UploadDataScoreEntity } from "src/domain/entity/upload-entity";
import readXlsxFile from "read-excel-file";
import { UploadUtils } from "src/helpers/upload-utils";
import { CustomSelect } from "components/CustomSelect";
import { Button } from "@mui/material";
import { CustomDialog } from "components/CustomDialog";
import { DefaultValue } from "src/helpers/constant/default-value";
import { Utils } from "src/helpers/utils";
import Router from "next/router";
import UploadScoreViewModel from "./upload-score-view-model";
import { UploadScoreFields } from "src/helpers/constant/upload-score-fields";

const UploadPage = () => {
  const {
    status,
    isShowAlert,
    isLoading,
    periods,
    resultTypes,
    validation,
    isShowWarning,
    onUploadClicked,
    onCloseAlert,
    onCloseWarning,
  } = UploadScoreViewModel();

  const columns = useMemo(() => UploadScoreFields.fields, []);
  const [data, setData] = useState<UploadDataScoreEntity[]>();
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [messageDialog, setMessageDialog] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");

  const handleOnFileExcel = (event) => {
    const temp: UploadDataScoreEntity[] = [];
    const data = event?.target?.files[0] ?? null;
    if (!data) {
      openModal("File Tidak Sesuai");
      return;
    }
    readXlsxFile(data).then((rows) => {
      if (!UploadUtils.isCorrectUploadScoreFormat(rows[0] ?? [])) {
        openModal("Format Tidak Sesuai");
        return;
      }

      if (rows.length > DefaultValue.Value.maxRowUpload) {
        openModal(
          "Jumlah row melebihi batas maksimal, (Batas maksimal 5.000 rows)"
        );
        return;
      }
      rows?.map((item, index) => {
        if (index == 0) return;
        temp.push({
          id: index,
          dapil: String(item[0] ?? ""),
          candidate: String(item[1] ?? ""),
          gender: Utils.mapGender(String(item[2] ?? "")),
          party: String(item[3] ?? ""),
          score_type: mapToNumber(String(item[4] ?? "0")),
          score: mapToNumber(String(item[5] ?? "0")),
          notes: String(item[6] ?? ""),
        });
      });
      setData(temp);
    });
  };

  const mapToNumber = (value: string) => {
    const valueNumber = value.replaceAll(".", "");
    return Number(valueNumber);
  };

  const openModal = (message: string) => {
    setMessageDialog(message);
    setIsOpenDialog(true);
  };

  const handleOnCancel = () => {
    setData([]);
  };

  useEffect(() => {
    if (isShowWarning) {
      openModal("Harap Isi Tipe, Periode dan File");
      onCloseWarning();
    }
  }, [isShowWarning]);

  useEffect(() => {
    Utils.authorizePage(window.location.pathname);
    if (!Utils.isLoggedIn()) Router.push("/login");
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Loading isLoading={isLoading} />
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Upload Data Skor</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box>
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link underline="hover" color="inherit" href="#">
                        Upload Data Skor
                      </Link>
                    </Breadcrumbs>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={12} md={3}>
                <CustomSelect
                  id=""
                  data={resultTypes}
                  title={"Tipe"}
                  onSelect={(id) => {
                    setSelectedType(id);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <CustomSelect
                  id=""
                  data={periods}
                  title={"Periode"}
                  onSelect={(id) => {
                    setSelectedPeriod(id);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <input
                  type="file"
                  id="input"
                  accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  onChange={(e) => {
                    handleOnFileExcel(e);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4} margin={0.5} padding={1}>
                <Box sx={{ display: "flex" }}>
                  <Grid sx={{ pr: 1 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        onUploadClicked(selectedType, selectedPeriod, data);
                      }}
                    >
                      Simpan
                    </Button>
                  </Grid>
                  <Grid sx={{ pr: 1 }}>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => {
                        handleOnCancel();
                      }}
                    >
                      Batal
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={12} md={12}>
                <div style={{ height: 500, width: "100%" }}>
                  <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[7]}
                  />
                </div>
              </Grid>
              <CustomAlert
                isOpen={isShowAlert}
                status={status}
                validation={validation}
                onClose={() => {
                  onCloseAlert();
                }}
              />
              <CustomDialog
                isOpen={isOpenDialog}
                title={"Perhatian"}
                message={messageDialog}
                onClose={() => {
                  setIsOpenDialog(false);
                }}
              />
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UploadPage;
