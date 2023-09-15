import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Alert, Button, Snackbar } from "@mui/material";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowId,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Loading } from "components/Loading";
import { useEffect, useMemo, useState } from "react";
import MenuViewModel from "./menu-view-model";
import { CustomAlert } from "components/CustomAlert";
import { CustomConfirmDialog } from "components/CustomConfirmDialog";
import AddMenuModal from "./components/AddMenuModal";
import { MenuEntity } from "src/domain/entity/menu-entity";
import { Utils } from "src/helpers/utils";
import Router from "next/router";

const MenuPage = () => {
  const {
    isShowAlert,
    isLoading,
    menus,
    status,
    onSearchClicked,
    onSubmitClicked,
    onRemoveClicked,
    onCloseAlert,
    onGetMenu,
  } = MenuViewModel();

  const [searchName, setSearchName] = useState<string>("");
  const [idModal, setIdModal] = useState<number>(null);
  const [seqModal, setSeqModal] = useState<number>(null);
  const [nameModal, setNameModal] = useState<string>("");
  const [urlModal, setUrlModal] = useState<string>("");
  const [iconModal, setIconModal] = useState<string>("");
  const [parentModal, setParentModal] = useState<MenuEntity>(null);
  const [parentIdModal, setParentIdModal] = useState<string>("");
  const [listMenus, setListMenus] = useState<Array<MenuEntity>>(menus);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] =
    useState<boolean>(false);
  const [titleConfirmDialog, setTitleConfirmDialog] = useState<string>("");
  const [messageConfirmDialog, setMessageConfirmDialog] = useState<string>("");
  const [idConfirmDialog, setIdConfirmDialog] = useState<number>(null);

  const handleOpenModalClick = (
    id: number,
    seq: number,
    name: string,
    url: string,
    icon: string,
    parent: MenuEntity,
    parent_id: string,
    listMenus: Array<MenuEntity>
  ) => {
    setIdModal(id);
    setSeqModal(seq);
    setNameModal(name);
    setUrlModal(url);
    setIconModal(icon);
    setParentModal(parent);
    setParentIdModal(parent_id);
    setListMenus(menus);
    setIsOpenModal(true);
  };

  const handleOpenConfirmDialog = (id: number, name: string) => {
    setTitleConfirmDialog("Hapus Data");
    setMessageConfirmDialog(`Yakin anda akan menghapus data "${name}"?`);
    setIdConfirmDialog(id);
    setIsOpenConfirmDialog(true);
  };

  const onCloseConfirmDialog = (id: number, choose: "yes" | "no" | "") => {
    setIsOpenConfirmDialog(false);
    if (choose == "yes") onRemoveClicked(id);
  };

  const columns = useMemo(
    () => [
      { field: "id", type: "number", headerName: "ID", width: 50 },
      { field: "seq", type: "number", headerName: "Nomor Urut", width: 100 },
      { field: "name", type: "string", headerName: "Nama Menu", width: 300 },
      { field: "url", type: "string", headerName: "URL", width: 300 },
      {
        field: "parent",
        type: "string",
        headerName: "Parent",
        width: 250,
        valueGetter: (params: GridValueGetterParams) => params.row.parent?.name,
      },
      {
        field: "actions",
        type: "actions",
        headerName: "",
        width: 100,
        getActions: (params) => [
          <GridActionsCellItem
            key={`data-row-edit-${params.row.id}`}
            icon={<EditIcon />}
            onClick={() => {
              setIdModal(params.row.id);
              setNameModal(params.row.name);
              setUrlModal(params.row.url);
              setIconModal(params.row.icon);
              setParentModal(params.row.parent);
              setParentIdModal(params.row.parent_id);
              handleOpenModalClick(
                params.row.id,
                params.row.seq,
                params.row.name,
                params.row.url,
                params.row.icon,
                params.row.parent,
                params.row.parent_id,
                menus
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

  useEffect(() => {
    Utils.authorizePage(window.location.pathname);
    if (!Utils.isLoggedIn()) Router.push("/login");
    onGetMenu();
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Loading isLoading={isLoading} />
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Konfigurasi Menu</Typography>
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
                        Konfigurasi
                      </Link>
                      <Typography color="text.primary">Menu</Typography>
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
              <Grid item xs={12} md={4}>
                <TextField
                  id="search-field"
                  label="Cari Nama Menu"
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
                    handleOpenModalClick(
                      null,
                      null,
                      "",
                      "",
                      "",
                      null,
                      "",
                      menus
                    );
                  }}
                  fullWidth
                >
                  Tambah
                </Button>
              </Grid>
              <Grid item xs={12} md={12}>
                <div style={{ height: 500, width: "100%" }}>
                  <DataGrid
                    rows={menus}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                  />
                </div>
              </Grid>
              <AddMenuModal
                isOpenModal={isOpenModal}
                id={idModal}
                seq={seqModal}
                name={nameModal}
                url={urlModal}
                icon={iconModal}
                parent={parentModal}
                parent_id={parentIdModal}
                listMenus={menus}
                onSubmit={(
                  id,
                  seq,
                  name,
                  url,
                  icon,
                  parent,
                  parent_id,
                  isEdit
                ) => {
                  onSubmitClicked(
                    isEdit,
                    id,
                    seq,
                    name,
                    url,
                    icon,
                    parent,
                    parent_id
                  );
                }}
                onClose={() => setIsOpenModal(false)}
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
                id={idConfirmDialog?.toString()}
                title={titleConfirmDialog}
                message={messageConfirmDialog}
                onClose={(id, choose) => {
                  onCloseConfirmDialog(parseInt(id), choose);
                }}
              />
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MenuPage;
