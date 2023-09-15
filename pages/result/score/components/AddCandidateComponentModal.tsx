import { Style } from "components/styles";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { FC, useState } from "react";

type AddCandidateComponentModalProps = {
  isOpenModal: boolean;
  dapilName: string;
  onClose: () => void;
  onSubmit: (
    candidateName: string,
    genderName: string,
    dapilName: string
  ) => void;
};

const AddCandidateComponentModal: FC<AddCandidateComponentModalProps> = ({
  isOpenModal,
  dapilName,
  onSubmit,
  onClose,
}) => {
  const [candidateName, setCandidateName] = useState<string>("");
  const [genderName, setGenderName] = useState<string>("");

  const handleOnAddCandidate = () => {
    onSubmit(candidateName, genderName, dapilName);
    setGenderName("");
    setCandidateName("");
  };

  return (
    <Style.StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={isOpenModal}
      onClose={() => {
        onClose?.();
      }}
    >
      <Box sx={{ margin: 1, width: 400 }}>
        <Paper sx={{ padding: 2 }}>
          <Grid container>
            <Grid item xs={12} md={12}>
              Add Candidate
            </Grid>
            <Grid item xs={12} md={12} mt={2}>
              <TextField
                type={"text"}
                fullWidth
                value={candidateName}
                label="Kandidat"
                onChange={(event) => {
                  setCandidateName(event.currentTarget.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} mb={3} mt={2}>
              <TextField
                type={"text"}
                fullWidth
                value={genderName}
                placeholder="M / F"
                label="Gender"
                onChange={(event) => {
                  setGenderName(event.currentTarget.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={5.8}>
              <Button
                variant="contained"
                color="warning"
                fullWidth
                onClick={() => {
                  onClose?.();
                }}
              >
                Tutup
              </Button>
            </Grid>
            <Grid item xs={12} md={0.4}></Grid>
            <Grid item xs={12} md={5.8}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  handleOnAddCandidate?.();
                }}
              >
                Simpan
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Style.StyledModal>
  );
};

export default AddCandidateComponentModal;
