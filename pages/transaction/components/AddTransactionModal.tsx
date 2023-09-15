import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { CustomSelect } from "components/CustomSelect";
import { Style } from "components/styles";
import React, { FC, useEffect, useState } from "react";
import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import { ProductCategoryEntity } from "src/domain/entity/product-category-entity";

type AddTransactionModalProps = {
  isOpenModal: boolean;
  id: string | null;
  name: string | "";
  productCategoryId: string | "";
  amount: number;
  total: number;
  onSubmit: (
    id: string,
    name: string,
    productCategoryId: string,
    amount: number,
    total: number,
    isEdit: boolean
  ) => void;
  onClose: () => void;
};

const AddTransactionModal: FC<AddTransactionModalProps> = ({
  isOpenModal,
  id,
  name,
  productCategoryId,
  amount,
  total,
  onSubmit,
  onClose,
}) => {
  const [nameField, setNameField] = useState<string>(name);
  const [productCategoryIdField, setProductCategoryId] =
    useState<string>(productCategoryId);
  const [amountField, setAmountField] = useState<number>(amount);
  const [totalField, setTotalField] = useState<number>(total);
  const [productCategorySelection, setProductCategorySelection] =
    useState<[any]>();

  const prefix = name ? "Edit" : "Tambah";

  useEffect(() => {
    setNameField(name);
    setProductCategoryId(productCategoryId);
    setAmountField(amount);
    setTotalField(total);
    var selection = appStoreImplementation
      .getState()
      ?.productCategory?.productCategories?.filter(
        (item) => item.isActive === true
      )
      .map((item) => ({
        id: item.id,
        name: item.name,
        icon: "",
      }));
    setProductCategorySelection(selection);
  }, [isOpenModal]);

  const handleOnSubmit = (
    nameParam: string,
    productCategoryId: string,
    amount: number,
    total: number
  ) => {
    const isEdit = prefix === "Edit";
    onSubmit?.(
      id,
      (name = nameParam),
      productCategoryId,
      amount,
      total,
      isEdit
    );
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
              <CustomSelect
                id={productCategoryId}
                data={productCategorySelection}
                title={"Kategori Produk"}
                onSelect={(id) => {
                  setProductCategoryId(id);
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <TextField
                id="amount-field"
                defaultValue={amount}
                label="Jumlah"
                variant="outlined"
                color="primary"
                size="small"
                onChange={(e) => {
                  setAmountField(Number(e.currentTarget.value));
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <TextField
                id="total-field"
                defaultValue={total}
                label="Total"
                variant="outlined"
                color="primary"
                size="small"
                onChange={(e) => {
                  setTotalField(Number(e.currentTarget.value));
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
                      handleOnSubmit(
                        nameField,
                        productCategoryIdField,
                        amountField,
                        totalField
                      );
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

export default AddTransactionModal;
