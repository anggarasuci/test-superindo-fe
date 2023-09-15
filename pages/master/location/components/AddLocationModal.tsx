import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Style } from "components/styles";
import React, { FC, useState } from "react";
import { CustomSelect } from "components/CustomSelect";
import { DefaultValue } from "src/helpers/constant/default-value";

type AddLocationModalProps = {
  isOpenModal: boolean;
  referenceLocations: string[];
  provinces: any[];
  selectedProvinceId: string | "";
  districs: any[];
  selectedDistrictId: string | "";
  regencies: any[];
  selectedRegencyId: string | "";
  villages: any[];
  selectedVillageId: string | "";
  code: string | "";
  name: string | "";
  onSubmit: (code: string, name: string, isEdit: boolean) => void;
  onClose: (isEdit: boolean) => void;
  onSelectReference: (key: string, code: string) => void;
};

const AddLocationModal: FC<AddLocationModalProps> = ({
  isOpenModal,
  referenceLocations,
  code,
  name,
  provinces,
  selectedProvinceId,
  districs,
  selectedDistrictId,
  regencies,
  selectedRegencyId,
  villages,
  selectedVillageId,
  onSubmit,
  onSelectReference,
  onClose,
}) => {
  const [codeField, setCodeField] = useState<string>(code);
  const [nameField, setNameField] = useState<string>(name);
  const prefix = code || name ? "Edit" : "Tambah";

  const handleOnSubmit = (codeParam: string, nameParam: string) => {
    const isEdit = prefix === "Edit";
    onSubmit?.(
      (code = isEdit ? code : codeParam),
      (name = nameParam != "" ? nameParam : name),
      isEdit
    );
    handleOnClose();
  };

  const handleOnClose = () => {
    setCodeField("");
    setNameField("");
    onClose?.(code != "");
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
              {prefix} Data
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
            {referenceLocations?.includes(DefaultValue.Location.Province) && (
              <Grid item xs={12} md={12} margin={0.5} padding={1}>
                <CustomSelect
                  id={selectedProvinceId}
                  data={provinces}
                  title={DefaultValue.LocationDisplay.Province}
                  onSelect={(id) => {
                    onSelectReference?.(DefaultValue.Location.Province, id);
                  }}
                />
              </Grid>
            )}
            {referenceLocations?.includes(DefaultValue.Location.Regency) && (
              <Grid item xs={12} md={12} margin={0.5} padding={1}>
                <CustomSelect
                  id={selectedRegencyId}
                  data={regencies}
                  title={DefaultValue.LocationDisplay.Regency}
                  onSelect={(id) => {
                    onSelectReference?.(DefaultValue.Location.Regency, id);
                  }}
                />
              </Grid>
            )}
            {referenceLocations?.includes(DefaultValue.Location.District) && (
              <Grid item xs={12} md={12} margin={0.5} padding={1}>
                <CustomSelect
                  id={selectedDistrictId}
                  data={districs}
                  title={DefaultValue.LocationDisplay.District}
                  onSelect={(id) => {
                    onSelectReference?.(DefaultValue.Location.District, id);
                  }}
                />
              </Grid>
            )}
            {referenceLocations?.includes(DefaultValue.Location.Village) && (
              <Grid item xs={12} md={12} margin={0.5} padding={1}>
                <CustomSelect
                  id={selectedVillageId}
                  data={villages}
                  title={DefaultValue.LocationDisplay.Village}
                  onSelect={(id) => {
                    onSelectReference?.(DefaultValue.Location.Village, id);
                  }}
                />
              </Grid>
            )}
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <TextField
                id="code-field"
                disabled={prefix === "Edit" ? true : false}
                defaultValue={code}
                label="Kode"
                variant="outlined"
                color="primary"
                size="small"
                onChange={(e) => {
                  setCodeField(e.currentTarget.value);
                }}
                fullWidth
              />
            </Grid>
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
              <Box sx={{ display: "flex" }}>
                <Grid sx={{ pr: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleOnSubmit(codeField, nameField);
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

export default AddLocationModal;
