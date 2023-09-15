import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Style } from "components/styles";
import React, { FC, useEffect, useState } from "react";

type AddProductCategoryModalProps = {
  isOpenModal: boolean;
  id: string | null;
  name: string | "";
  isActive: boolean;
  onSubmit: (
    id: string,
    name: string,
    isActive: boolean,
    isEdit: boolean
  ) => void;
  onClose: () => void;
};

const AddProductCategoryModal: FC<AddProductCategoryModalProps> = ({
  isOpenModal,
  id,
  name,
  isActive,
  onSubmit,
  onClose,
}) => {
  const [nameField, setNameField] = useState<string>(name);
  const [isActiveField, setIsActiveField] = useState<boolean>(isActive);
  const prefix = name ? "Edit" : "Tambah";

  useEffect(() => {
    setNameField(name);
    setIsActiveField(isActive);
  }, [isOpenModal]);

  const handleOnSubmit = (nameParam: string, isActive: boolean) => {
    const isEdit = prefix === "Edit";
    onSubmit?.(id, (name = nameParam), isActive, isEdit);
    handleOnClose();
  };

  const handleOnClose = () => {
    setNameField("");
    onClose?.();
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
          <Grid item xs={12} md={12} margin={0.5} pl={1}>
            <Typography variant="h5" color="secondary.main">
              Kategori Produk
            </Typography>
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
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <TextField
                id="name-field"
                defaultValue={name}
                label="Nama"
                variant="outlined"
                color="primary"
                size="small"
                onChange={(e) => {
                  setNameField(e.currentTarget.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isActiveField}
                    onChange={(event, checked) => {
                      setIsActiveField(checked);
                    }}
                  />
                }
                label={"Active"}
                style={{ marginRight: 30 }}
              />
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <Box sx={{ display: "flex" }}>
                <Grid sx={{ pr: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleOnSubmit(nameField, isActiveField);
                    }}
                  >
                    Simpan
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => {
                      handleOnClose();
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
    </Style.StyledModal>
  );
};

export default AddProductCategoryModal;
