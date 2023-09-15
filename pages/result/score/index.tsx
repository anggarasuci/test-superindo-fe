import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { CustomSelect } from "components/CustomSelect";
import { Loading } from "components/Loading";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { Utils } from "src/helpers/utils";
import DocumentComponentModal from "./components/DocumentComponentModal";
import ResultDapilScoreComponent from "./components/ResultDapilScoreComponent";
import ResultDapilScoreViewModel from "./result-dapil-score-view-model";
import AddCandidateComponentModal from "./components/AddCandidateComponentModal";

const ResultDapilScorePage = () => {
  const [selectedCandidateName, setSelectedCandidateName] =
    useState<string>("");

  const {
    provinces,
    isLoading,
    data,
    maxScore,
    orderBy,
    drillDownData,
    maxDocument,
    additionalField,
    masterDocuments,
    documents,
    showDocumentModal,
    onCloseDocumentModal,
    onUpdateAdditionalField,
    onSortDrilldown,
    onExpandedByDapil,
    onSortClicked,
    onProvinceSelected,
    onButtonClicked,
    onDocumentClicked,
    onSubmitNewCandidate,
    onDeleteCandidateClicked,
  } = ResultDapilScoreViewModel();

  useEffect(() => {
    Utils.authorizePage(window.location.pathname);
    if (!Utils.isLoggedIn()) Router.push("/login");
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5">
                  Skor Partai Nasdem (SKOR DAPIL)
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
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
            <Grid md={12}>
              <ResultDapilScoreComponent
                drillDownData={drillDownData}
                maxDocument={maxDocument}
                additionalField={additionalField}
                data={data}
                maxScore={maxScore}
                sortBy={orderBy}
                sortByClicked={(name: string, orderBy: "asc" | "desc") => {
                  onSortClicked(name, orderBy);
                }}
                onExpandByDapil={(dapilid, isExpanded) => {
                  onExpandedByDapil(dapilid, isExpanded);
                }}
                sortByDapilDrilldown={(
                  dapilId: number,
                  name: string,
                  orderBy: "asc" | "desc"
                ) => {
                  onSortDrilldown(dapilId, name, orderBy);
                }}
                onUpdateAdditionalFieldClicked={(item) => {
                  onUpdateAdditionalField(item);
                }}
                onDocumentClick={(candidateId, candidateName) => {
                  onDocumentClicked(candidateId);
                  setSelectedCandidateName(candidateName);
                }}
                onDeleteCandidate={(id) => {
                  onDeleteCandidateClicked(id);
                }}
                onAddCandidate={(
                  candidate: string,
                  gender: string,
                  dapil: string
                ) => {
                  onSubmitNewCandidate(dapil, candidate, gender);
                }}
              />
            </Grid>
          </Paper>
        </Box>
        <DocumentComponentModal
          isOpenModal={showDocumentModal}
          documents={documents}
          masterDocuments={masterDocuments}
          onClose={() => onCloseDocumentModal()}
          candidateName={selectedCandidateName}
        />
        <Loading isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default ResultDapilScorePage;
