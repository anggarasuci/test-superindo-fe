import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Alert, Button, Chip, Snackbar } from "@mui/material";
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
  GridRenderCellParams,
  GridRowId,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Loading } from "components/Loading";
import { useEffect, useMemo, useState } from "react";
import UserViewModel from "./user-view-model";
import { CustomAlert } from "components/CustomAlert";
import { CustomConfirmDialog } from "components/CustomConfirmDialog";
import AddUserModal from "./components/AddUserModal";
import { GroupEntity } from "src/domain/entity/group-entity";
import { Utils } from "src/helpers/utils";
import Router from "next/router";

const UserPage = () => {
  const {
    isShowAlert,
    isLoading,
    users,
    status,
    groups,
    onSearchClicked,
    onSubmitClicked,
    onRemoveClicked,
    onCloseAlert,
    onGetGroup,
  } = UserViewModel();

  const [searchName, setSearchName] = useState<string>("");
  const [idModal, setIdModal] = useState<number>(null);
  const [usernameModal, setUsernameModal] = useState<string>("");
  const [emailModal, setEmailModal] = useState<string>("");
  const [isStaffModal, setIsStaffModal] = useState<boolean>(true);
  const [isSuperuserModal, setIsSuperuserModal] = useState<boolean>(true);
  const [isActiveModal, setIsActiveModal] = useState<boolean>(true);
  const [passwordModal, setPasswordModal] = useState<string>("");
  const [groupsModal, setGroupsModal] = useState<Array<GroupEntity>>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] =
    useState<boolean>(false);
  const [titleConfirmDialog, setTitleConfirmDialog] = useState<string>("");
  const [messageConfirmDialog, setMessageConfirmDialog] = useState<string>("");
  const [idConfirmDialog, setIdConfirmDialog] = useState<number>(null);

  const handleOpenModalClick = (
    id: number,
    username: string,
    email: string,
    is_staff: boolean,
    is_superuser: boolean,
    is_active: boolean,
    password: string,
    groups: Array<GroupEntity>
  ) => {
    setIdModal(id);
    setUsernameModal(username);
    setEmailModal(email);
    setIsStaffModal(is_staff);
    setIsSuperuserModal(is_superuser);
    setIsActiveModal(is_active);
    setPasswordModal(password);
    setGroupsModal(groups);
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
      {
        field: "username",
        type: "string",
        headerName: "Nama User",
        width: 300,
      },
      { field: "email", type: "string", headerName: "Email", width: 300 },
      {
        field: "groups",
        type: "string",
        width: 300,
        headerName: "Group",
        renderCell: (params: GridRenderCellParams<Array<GroupEntity>>) => {
          const Items = (items: Array<GroupEntity>) => (
            <>
              {items?.map((item) => (
                <Chip key={item.id} label={item.name} sx={{ mr: 0.5 }} />
              ))}
            </>
          );
          return <div>{Items(params.row.groups)}</div>;
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
              setIdModal(params.row.id);
              setUsernameModal(params.row.username);
              setEmailModal(params.row.email);
              setIsStaffModal(params.row.is_staff);
              setIsSuperuserModal(params.row.is_superuser);
              setIsActiveModal(params.row.is_active);
              setGroupsModal(params.row.groups);
              handleOpenModalClick(
                params.row.id,
                params.row.username,
                params.row.email,
                params.row.is_staff,
                params.row.is_superuser,
                params.row.is_active,
                "",
                params.row.groups
              );
            }}
            label="Edit"
          />,
          <GridActionsCellItem
            key={`data-row-delete-${params.row.id}`}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => {
              handleOpenConfirmDialog(params.row.id, params.row.username);
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
    onGetGroup();
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Loading isLoading={isLoading} />
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Konfigurasi User</Typography>
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
                      <Typography color="text.primary">User</Typography>
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
                  label="Cari Nama User"
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
                      "",
                      "",
                      true,
                      true,
                      true,
                      "",
                      []
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
                    rows={users}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                  />
                </div>
              </Grid>
              <AddUserModal
                isOpenModal={isOpenModal}
                id={idModal}
                username={usernameModal}
                email={emailModal}
                is_staff={isStaffModal}
                is_superuser={isSuperuserModal}
                is_active={isActiveModal}
                password={passwordModal}
                groups={groupsModal}
                listGroups={groups}
                onSubmit={(
                  id,
                  username,
                  email,
                  is_staff,
                  is_superuser,
                  is_active,
                  password,
                  groups,
                  isEdit
                ) => {
                  onSubmitClicked(
                    isEdit,
                    id,
                    username,
                    email,
                    is_staff,
                    is_superuser,
                    is_active,
                    password,
                    groups
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

export default UserPage;
