import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  DataGrid,
  GridActionsCellItem,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { useEffect, useMemo, useState } from "react";
import { CustomConfirmDialog } from "components/CustomConfirmDialog";
import ProductCategoryViewModel from "./product-category-view-model";
import { ProductCategoryEntity } from "src/domain/entity/product-category-entity";
import AddProductCategoryModal from "./components/AddProductCategoryModal";

const ProductCategoryPage = () => {
  const {
    isShowAlert,
    productCategories,
    onSubmitClicked,
    onRemoveClicked,
    onCloseAlert,
  } = ProductCategoryViewModel();

  const [searchName, setSearchName] = useState<string>("");
  const [idModal, setIdModal] = useState<string>(null);
  const [nameModal, setNameModal] = useState<string>("");
  const [isActiveModal, setIsActiveModal] = useState<boolean>(true);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] =
    useState<boolean>(false);
  const [titleConfirmDialog, setTitleConfirmDialog] = useState<string>("");
  const [messageConfirmDialog, setMessageConfirmDialog] = useState<string>("");
  const [idConfirmDialog, setIdConfirmDialog] = useState<string>("");

  const handleOpenModalClick = (
    id: string,
    name: string,
    isActive: boolean
  ) => {
    setIdModal(id);
    setNameModal(name);
    setIsActiveModal(isActive);
    setIsOpenModal(true);
  };

  const handleOpenConfirmDialog = (id: string, name: string) => {
    setTitleConfirmDialog("Hapus Data");
    setMessageConfirmDialog(`Yakin anda akan menghapus data "${name}"?`);
    setIdConfirmDialog(id);
    setIsOpenConfirmDialog(true);
  };

  const onCloseConfirmDialog = (id: string, choose: "yes" | "no" | "") => {
    setIsOpenConfirmDialog(false);
    if (choose == "yes") onRemoveClicked(id);
  };

  const getLabel = (isActive: boolean) => {
    return !isActive ? "Non-Aktif" : "Aktif";
  };

  const columns = useMemo(
    () => [
      //{ field: "id.pid", type: "string", headerName: "ID", width: 100 },
      {
        field: "name",
        type: "string",
        headerName: "Nama",
        width: 300,
        renderCell: (params: GridRenderCellParams<string>) => {
          return (
            <div>
              <Box sx={{ display: "flex" }}>
                <Box alignSelf="center">{params.row.name}</Box>
              </Box>
            </div>
          );
        },
      },
      {
        field: "isActive",
        type: "string",
        headerName: "Active",
        width: 100,
        renderCell: (params: GridRenderCellParams<string>) => {
          return (
            <div>
              <Box sx={{ display: "flex" }}>
                <Box alignSelf="center">{getLabel(params.row.isActive)}</Box>
              </Box>
            </div>
          );
        },
      },
      {
        field: "actions",
        type: "actions",
        headerName: "",
        width: 150,
        getActions: (params) => [
          <GridActionsCellItem
            key={`data-row-edit-${params.row.id}`}
            icon={<EditIcon />}
            onClick={() => {
              handleOpenModalClick(
                params.row.id,
                params.row.name,
                params.row.isActive
              );
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

  // useEffect(() => {
  //   Utils.authorizePage(window.location.pathname);
  //   if (!Utils.isLoggedIn()) Router.push("/login");
  // }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box sx={{ margin: 1 }}>
          <Paper
            variant="outlined"
            sx={{
              padding: 2,
            }}
          >
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Kategori Produk</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={12} md={1}>
                <Button
                  id="add-button"
                  variant="contained"
                  color="secondary"
                  size="medium"
                  onClick={() => {
                    handleOpenModalClick(null, "", true);
                  }}
                  fullWidth
                >
                  Tambah
                </Button>
              </Grid>
              <Grid item xs={12} md={12}>
                <div style={{ height: 500, width: "100%" }}>
                  <DataGrid
                    rows={productCategories}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                  />
                </div>
              </Grid>
              <AddProductCategoryModal
                isOpenModal={isOpenModal}
                id={idModal}
                name={nameModal}
                isActive={isActiveModal}
                onSubmit={(id, name, isActive, isEdit) => {
                  onSubmitClicked(id, name, isActive);
                }}
                onClose={() => setIsOpenModal(false)}
              />

              <CustomConfirmDialog
                isOpen={isOpenConfirmDialog}
                id={idConfirmDialog}
                title={titleConfirmDialog}
                message={messageConfirmDialog}
                onClose={(id, choose) => {
                  onCloseConfirmDialog(id, choose);
                }}
              />
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductCategoryPage;
