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
import { useMemo, useState } from "react";
import { CustomConfirmDialog } from "components/CustomConfirmDialog";
import TransactionViewModel from "./transaction-view-model";
import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import AddTransactionModal from "./components/AddTransactionModal";

const TransactionPage = () => {
  const {
    isShowAlert,
    transactions,
    onSubmitClicked,
    onRemoveClicked,
    onCloseAlert,
  } = TransactionViewModel();

  const [searchName, setSearchName] = useState<string>("");
  const [idModal, setIdModal] = useState<string>(null);
  const [nameModal, setNameModal] = useState<string>("");
  const [productCategoryIdModal, setProductCategoryIdModal] =
    useState<string>("");
  const [amountModal, setAmountModal] = useState<number>(0);
  const [totalModal, setTotalModal] = useState<number>(0);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] =
    useState<boolean>(false);
  const [titleConfirmDialog, setTitleConfirmDialog] = useState<string>("");
  const [messageConfirmDialog, setMessageConfirmDialog] = useState<string>("");
  const [idConfirmDialog, setIdConfirmDialog] = useState<string>("");

  const handleOpenModalClick = (
    id: string,
    name: string,
    productCategoryId: string,
    amount: number,
    total: number
  ) => {
    setIdModal(id);
    setNameModal(name);
    setProductCategoryIdModal(productCategoryId);
    setAmountModal(amount);
    setTotalModal(total);
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
        field: "productCategoryName",
        type: "string",
        headerName: "Kategori",
        width: 100,
        renderCell: (params: GridRenderCellParams<string>) => {
          return (
            <div>
              <Box sx={{ display: "flex" }}>
                <Box alignSelf="center">{params.row.productCategoryName}</Box>
              </Box>
            </div>
          );
        },
      },
      {
        field: "amount",
        type: "string",
        headerName: "Jumlah",
        width: 100,
        renderCell: (params: GridRenderCellParams<string>) => {
          return (
            <div>
              <Box sx={{ display: "flex" }}>
                <Box alignSelf="center">{params.row.amount}</Box>
              </Box>
            </div>
          );
        },
      },
      {
        field: "total",
        type: "string",
        headerName: "Total",
        width: 100,
        renderCell: (params: GridRenderCellParams<string>) => {
          return (
            <div>
              <Box sx={{ display: "flex" }}>
                <Box alignSelf="center">{params.row.total}</Box>
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
        getActions: (params) =>
          appStoreImplementation.getState()?.auth?.auth?.isAdmin
            ? [
                <GridActionsCellItem
                  key={`data-row-edit-${params.row.id}`}
                  icon={<EditIcon />}
                  onClick={() => {
                    handleOpenModalClick(
                      params.row.id,
                      params.row.name,
                      params.row.productCategoryId,
                      params.row.amount,
                      params.row.total
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
              ]
            : [
                <div>
                  <Box sx={{ display: "flex" }}>
                    <Box alignSelf="center">Don't have Access</Box>
                  </Box>
                </div>,
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
                <Typography variant="h5">Summary</Typography>
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
              {appStoreImplementation.getState()?.auth?.auth?.isAdmin && (
                <Grid item xs={12} md={1}>
                  <Button
                    id="add-button"
                    variant="contained"
                    color="secondary"
                    size="medium"
                    onClick={() => {
                      handleOpenModalClick(null, "", "", 0, 0);
                    }}
                    fullWidth
                  >
                    Tambah
                  </Button>
                </Grid>
              )}
              <Grid item xs={12} md={12}>
                <div style={{ height: 500, width: "100%" }}>
                  <DataGrid
                    rows={transactions}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                  />
                </div>
              </Grid>
              <AddTransactionModal
                isOpenModal={isOpenModal}
                id={idModal}
                name={nameModal}
                onSubmit={(
                  id,
                  name,
                  productCategoryId,
                  amount,
                  total,
                  isEdit
                ) => {
                  onSubmitClicked(id, name, productCategoryId, amount, total);
                }}
                onClose={() => setIsOpenModal(false)}
                productCategoryId={productCategoryIdModal}
                amount={amountModal}
                total={totalModal}
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

export default TransactionPage;
