import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  Typography,
} from "@mui/material";
import CandidateModalComponent from "components/candidate/CandidateModalComponent";
import { CustomSelect } from "components/CustomSelect";
import { Loading } from "components/Loading";
import React from "react";
import ResultDapilModalComponent from "./components/ResultDapilModalComponent";
import ResultSeatByPartyComponent from "./components/ResultSeatByPartyComponent";
import ResultSeatComponent from "./components/ResultSeatComponent";
import ResultSeatViewModel from "./result-seat-view-model";

const SeatPage = () => {
  const {
    provinces,
    parties,
    dapils,
    isLoading,
    data,
    showModal,
    dataDapil,
    filterData,
    candidateDataModal,
    showCandidateModal,
    selectedParty,
    dataByParty,
    selectedDapil,
    onCandidateClicked,
    onProvinceSelected,
    onFilterSelected,
    onPartySelected,
    onDapilSelected,
    onButtonClicked,
    onDapilClicked,
    onCloseModal,
  } = ResultSeatViewModel();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Perolehan Kursi</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Loading isLoading={isLoading} />
        <Box sx={{ margin: 1 }}>
          <Paper sx={{ padding: 2 }}>
            <Grid container spacing={1} md={12}>
              <Grid item xs={12} md={4}>
                <CustomSelect
                  data={provinces}
                  id={""}
                  title={"Provinsi"}
                  onSelect={(id) => {
                    onProvinceSelected(id);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3} mb={1}>
                <CustomSelect
                  data={dapils}
                  id={""}
                  title={"Dapil"}
                  value={selectedDapil}
                  onSelect={(id) => {
                    onDapilSelected(id);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3} mb={1}>
                <CustomSelect
                  data={parties}
                  id={""}
                  includeLogo={true}
                  title={"Partai"}
                  onSelect={(id) => {
                    onPartySelected(id);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2} mb={1}>
                <Button
                  style={{ height: "55px" }}
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => {
                    onButtonClicked();
                  }}
                >
                  Tampilkan
                </Button>
              </Grid>
            </Grid>
            {data?.length > 0 && (
              <Grid md={12} mt={1} mb={1} mr={1}>
                <div
                  style={{
                    borderStyle: "dashed",
                    borderWidth: 0.5,
                    borderColor: "#00000020",
                    marginBottom: 10,
                  }}
                />
                <Grid container>
                  <Grid item md={10} />
                  <Grid item md={2} mt={2} pl={1}>
                    <CustomSelect
                      data={filterData}
                      id={"all"}
                      title={"Filter"}
                      onSelect={(id) => {
                        onFilterSelected(id);
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
            <Grid md={12}>
              {selectedParty == "" || selectedParty == "-1" ? (
                <ResultSeatComponent
                  data={data}
                  onClicked={(id) => {
                    onDapilClicked(id);
                  }}
                  onCandidateClicked={(id) => {
                    onCandidateClicked(id);
                  }}
                />
              ) : (
                <ResultSeatByPartyComponent
                  data={dataByParty}
                  onClicked={(id) => {
                    onDapilClicked(id);
                  }}
                  onCandidateClicked={(id) => {
                    onCandidateClicked(id);
                  }}
                />
              )}
            </Grid>
            <ResultDapilModalComponent
              isOpenModal={showModal}
              data={dataDapil}
              onClose={() => {
                onCloseModal();
              }}
            />
            <CandidateModalComponent
              isOpenModal={showCandidateModal}
              data={candidateDataModal}
              onClose={() => {
                onCloseModal();
              }}
            />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SeatPage;
