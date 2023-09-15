import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { Style } from "components/styles";
import React, { FC, useEffect, useState } from "react";
import { MenuEntity } from "src/domain/entity/menu-entity";

type AddMenuModalProps = {
  isOpenModal: boolean;
  id: number | null;
  seq: number | null;
  name: string | "";
  url: string | "";
  icon: string | "";
  parent: MenuEntity | null;
  parent_id: string | "";
  listMenus: Array<MenuEntity> | [];
  onSubmit: (
    id: number,
    seq: number,
    name: string,
    url: string,
    icon: string,
    parent: MenuEntity,
    parent_id: string,
    isEdit: boolean
  ) => void;
  onClose: () => void;
};

const AddMenuModal: FC<AddMenuModalProps> = ({
  isOpenModal,
  id,
  seq,
  name,
  url,
  icon,
  parent,
  parent_id,
  listMenus,
  onSubmit,
  onClose,
}) => {
  // const [idField, setIdField] = useState<number>(id);
  const [seqField, setSeqField] = useState<number>(null);
  const [nameField, setNameField] = useState<string>("");
  const [urlField, setUrlField] = useState<string>("");
  const [iconField, setIconField] = useState<string>("");
  const [parentField, setParentField] = useState<MenuEntity>(null);
  const [parentIdField, setParentIdField] = useState<string>(null);
  const [listMenuItems, setListMenuItems] =
    useState<Array<MenuEntity>>(listMenus);
  const prefix = id || name ? "Edit" : "Tambah";

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  useEffect(() => {
    setSeqField(seq);
    setNameField(name);
    setUrlField(url);
    setIconField(icon);
    setParentField(parent);
    setParentIdField(parent_id);
    setListMenuItems(listMenus);
  }, [isOpenModal]);

  const handleChangeParent = (event: SelectChangeEvent) => {
    setParentIdField(event.target.value.toString());
  };

  const handleOnSubmit = (
    idParam: number,
    seqParam: number,
    nameParam: string,
    urlParam: string,
    iconParam: string,
    parentParam: MenuEntity,
    parentIdParam: string
  ) => {
    const isEdit = prefix === "Edit";
    onSubmit?.(
      (id = idParam),
      (seq = seqParam),
      (name = nameParam),
      (url = urlParam),
      (icon = iconParam),
      (parent = parentParam),
      (parent_id = parentIdParam),
      isEdit
    );
    handleOnClose();
  };

  const handleOnClose = () => {
    setSeqField(null);
    setNameField("");
    setUrlField("");
    setIconField("");
    setParentField(null);
    setParentIdField(null);
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
              {prefix} Data Menu
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
                id="seq-field"
                defaultValue={seq}
                label="Nomor Urut"
                variant="outlined"
                color="primary"
                size="small"
                onChange={(e) => {
                  setSeqField(parseInt(e.currentTarget.value));
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
              <TextField
                id="url-field"
                defaultValue={url}
                label="URL"
                variant="outlined"
                color="primary"
                size="small"
                onChange={(e) => {
                  setUrlField(e.currentTarget.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <TextField
                id="icon-field"
                defaultValue={icon}
                label="Icon"
                variant="outlined"
                color="primary"
                size="small"
                onChange={(e) => {
                  setIconField(e.currentTarget.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <FormControl fullWidth>
                <InputLabel id="parent-label">Parent Menu</InputLabel>
                <Select
                  labelId="parent-label"
                  id="parent-field"
                  label="Parent Menu"
                  color="primary"
                  value={parentIdField?.toString()}
                  onChange={handleChangeParent}
                  fullWidth
                >
                  {listMenuItems?.map((item) => (
                    <MenuItem key={item.id} value={item.id.toString()}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <Box sx={{ display: "flex" }}>
                <Grid sx={{ pr: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleOnSubmit(
                        id,
                        seqField,
                        nameField,
                        urlField,
                        iconField,
                        parentField,
                        parentIdField
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

export default AddMenuModal;
