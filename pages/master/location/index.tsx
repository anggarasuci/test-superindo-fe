import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { CustomAlert } from "components/CustomAlert";
import { CustomConfirmDialog } from "components/CustomConfirmDialog";
import { CustomSelect } from "components/CustomSelect";
import { Loading } from "components/Loading";
import Router from "next/router";
import { useEffect, useMemo, useState } from "react";
import { DefaultValue } from "src/helpers/constant/default-value";
import { LocationUtils } from "src/helpers/location-utils";
import { Utils } from "src/helpers/utils";
import AddLocationModal from "./components/AddLocationModal";
import LocationViewModel from "./location-view-model";

const LocationPage = () => {
  const getType = (): string => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let type = params.get("type");
    return type;
  };
  const titleName = LocationUtils.getDisplayType(getType());
  const {
    isParentIdAvailable,
    locations,
    status,
    isShowAlert,
    isLoading,
    referenceLocations,
    provinces,
    regencies,
    districts,
    villages,
    provincesModal,
    regenciesModal,
    districtsModal,
    villagesModal,
    selectedProvinceId,
    selectedRegencyId,
    selectedDistrictId,
    selectedVillageId,
    selectedProvinceIdModal,
    selectedRegencyIdModal,
    selectedDistrictIdModal,
    selectedVillageIdModal,
    onSubmitClicked,
    onSearchClicked,
    onRemoveClicked,
    onCloseAlert,
    onSelectReference,
    onClearDataModal,
  } = LocationViewModel(getType());

  const [searchName, setSearchName] = useState<string>("");
  const [codeModal, setCodeModal] = useState<string>("");
  const [nameModal, setNameModal] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] =
    useState<boolean>(false);
  const [titleConfirmDialog, setTitleConfirmDialog] = useState<string>("");
  const [messageConfirmDialog, setMessageConfirmDialog] = useState<string>("");
  const [idConfirmDialog, setIdConfirmDialog] = useState<string>("");

  const handleOpenModalClick = (code: string, name: string) => {
    setCodeModal(code);
    setNameModal(name);
    setIsOpenModal(true);
  };

  const handleOpenConfirmDialog = (code: string, name: string) => {
    setTitleConfirmDialog("Hapus Data");
    setMessageConfirmDialog(`Yakin anda akan menghapus data "${name}"?`);
    setIdConfirmDialog(code);
    setIsOpenConfirmDialog(true);
  };

  const handleOnCloseConfirmDialog = (
    id: string,
    choose: "yes" | "no" | ""
  ) => {
    setIsOpenConfirmDialog(false);
    if (choose == "yes") onRemoveClicked(id);
  };

  const handleOnCloseModal = (isEdit: boolean) => {
    onClearDataModal(isEdit);
    setIsOpenModal(false);
  };

  const columns = useMemo(
    () => [
      { field: "id", type: "string", headerName: "Kode", flex: 1 },
      {
        field: "name",
        type: "string",
        headerName: `Nama ${titleName}`,
        flex: 6,
      },
      {
        field: "actions",
        type: "actions",
        headerName: "",
        flex: 1,
        getActions: (params) => [
          <GridActionsCellItem
            key={`data-row-edit-${params.row.id}`}
            icon={<EditIcon />}
            onClick={() => {
              handleOpenModalClick(params.row.id, params.row.name);
            }}
            label="Edit"
          />,
          <GridActionsCellItem
            key={`data-row-delete-${params.row.id}`}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => {
              handleOpenConfirmDialog(params.row.id, params.row.name);
            }}
          />,
        ],
      },
    ],
    []
  );

  useEffect(() => {
    Utils.authorizePage(window.location.pathname);
    if (!Utils.isLoggedIn()) Router.push("/login");
  }, []);

  return (
    <>
      {Utils.isLoggedIn() && (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Loading isLoading={isLoading} />
            <Box sx={{ margin: 1 }}>
              <Paper variant="outlined" sx={{ padding: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5">
                      Master Data {titleName}
                    </Typography>
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
                            Master Data
                          </Link>
                          <Typography color="text.primary">
                            {titleName}
                          </Typography>
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
                  {referenceLocations?.includes(
                    DefaultValue.Location.Province
                  ) && (
                    <Grid item xs={12} md={3}>
                      <CustomSelect
                        id={selectedProvinceId ?? ""}
                        data={provinces}
                        title={DefaultValue.LocationDisplay.Province}
                        onSelect={(id) => {
                          onSelectReference(DefaultValue.Location.Province, id);
                        }}
                      />
                    </Grid>
                  )}
                  {referenceLocations?.includes(
                    DefaultValue.Location.Regency
                  ) && (
                    <Grid item xs={12} md={3}>
                      <CustomSelect
                        id={selectedRegencyId ?? ""}
                        data={regencies}
                        title={DefaultValue.LocationDisplay.Regency}
                        onSelect={(id) => {
                          onSelectReference(DefaultValue.Location.Regency, id);
                        }}
                      />
                    </Grid>
                  )}
                  {referenceLocations?.includes(
                    DefaultValue.Location.District
                  ) && (
                    <Grid item xs={12} md={3}>
                      <CustomSelect
                        id={selectedDistrictId ?? ""}
                        data={districts}
                        title={DefaultValue.LocationDisplay.District}
                        onSelect={(id) => {
                          onSelectReference(DefaultValue.Location.District, id);
                        }}
                      />
                    </Grid>
                  )}
                  {referenceLocations?.includes(
                    DefaultValue.Location.Village
                  ) && (
                    <Grid item xs={12} md={3}>
                      <CustomSelect
                        id={selectedVillageId ?? ""}
                        data={villages}
                        title={DefaultValue.LocationDisplay.Village}
                        onSelect={(id) => {
                          onSelectReference(DefaultValue.Location.Village, id);
                        }}
                      />
                    </Grid>
                  )}

                  <Grid item xs={12} md={4}>
                    <TextField
                      id="search-field"
                      label={`Cari Nama ${titleName}`}
                      variant="outlined"
                      color="primary"
                      size="small"
                      onChange={(e) => {
                        setSearchName(e.currentTarget.value);
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Button
                      disabled={!isParentIdAvailable}
                      id="search-button"
                      variant="contained"
                      color="primary"
                      size="medium"
                      onClick={() => {
                        onSearchClicked(searchName);
                      }}
                      fullWidth
                    >
                      Cari
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Button
                      id="add-button"
                      variant="contained"
                      color="secondary"
                      size="medium"
                      onClick={() => {
                        handleOpenModalClick("", "");
                      }}
                      fullWidth
                    >
                      Tambah
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div style={{ height: 500, width: "100%" }}>
                      <DataGrid
                        rows={locations}
                        columns={columns}
                        pageSize={7}
                        rowsPerPageOptions={[7]}
                      />
                    </div>
                  </Grid>
                  <AddLocationModal
                    isOpenModal={isOpenModal}
                    referenceLocations={referenceLocations}
                    provinces={provincesModal}
                    selectedProvinceId={selectedProvinceIdModal ?? ""}
                    regencies={regenciesModal}
                    selectedRegencyId={selectedRegencyIdModal ?? ""}
                    villages={villagesModal}
                    selectedVillageId={selectedVillageIdModal ?? ""}
                    districs={districtsModal}
                    selectedDistrictId={selectedDistrictIdModal ?? ""}
                    code={codeModal}
                    name={nameModal}
                    onSubmit={(code, name, isEdit) => {
                      onSubmitClicked(isEdit, code, name);
                    }}
                    onClose={(isEdit) => handleOnCloseModal(isEdit)}
                    onSelectReference={(key, code) => {
                      onSelectReference(key, code, true);
                    }}
                  />
                  <CustomAlert
                    isOpen={isShowAlert}
                    status={status}
                    onClose={() => {
                      onCloseAlert();
                    }}
                  />
                  <CustomConfirmDialog
                    isOpen={isOpenConfirmDialog}
                    id={idConfirmDialog}
                    title={titleConfirmDialog}
                    message={messageConfirmDialog}
                    onClose={(id, choose) => {
                      handleOnCloseConfirmDialog(id, choose);
                    }}
                  />
                </Grid>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default LocationPage;
