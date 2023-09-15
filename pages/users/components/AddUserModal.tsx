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
import { GroupEntity } from "src/domain/entity/group-entity";

type AddUserModalProps = {
  isOpenModal: boolean;
  id: number | null;
  username: string | "";
  email: string | "";
  is_staff: boolean | true;
  is_superuser: boolean | true;
  is_active: boolean | true;
  password: string | "";
  groups: Array<GroupEntity> | [];
  listGroups: Array<GroupEntity> | [];
  onSubmit: (
    id: number,
    username: string,
    email: string,
    is_staff: boolean,
    is_superuser: boolean,
    is_active: boolean,
    password: string,
    groups: Array<GroupEntity>,
    isEdit: boolean
  ) => void;
  onClose: () => void;
};

const AddUserModal: FC<AddUserModalProps> = ({
  isOpenModal,
  id,
  username,
  email,
  is_staff,
  is_superuser,
  is_active,
  password,
  groups,
  listGroups,
  onSubmit,
  onClose,
}) => {
  // const [idField, setIdField] = useState<number>(id);
  const [usernameField, setUsernameField] = useState<string>("");
  const [emailField, setEmailField] = useState<string>("");
  const [passwordField, setPasswordField] = useState<string>("");
  const [groupsField, setGroupsField] = useState<Array<GroupEntity>>([]);
  const [listGroupItems, setListGroupItems] =
    useState<Array<GroupEntity>>(listGroups);
  const prefix = id || username ? "Edit" : "Tambah";

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  useEffect(() => {
    setUsernameField(username);
    setEmailField(email);
    setPasswordField(password);
    setGroupsField(groups);
  }, [isOpenModal]);

  useEffect(() => {
    setListGroupItems(listGroups);
  }, [listGroups]);

  const handleChangeGroups = (event: SelectChangeEvent<typeof groupsField>) => {
    const {
      target: { value },
    } = event;

    let idSelected = value[value.length - 1];

    if (
      groupsField
        .map((m) => {
          return m.id.toString();
        })
        .indexOf(idSelected.toString()) === -1
    ) {
      let selected = listGroups?.filter((i: GroupEntity) => {
        return i?.id.toString() === idSelected.toString();
      });
      if (selected.length > 0) {
        setGroupsField([...groupsField, selected[0]]);
      }
    } else {
      setGroupsField(
        groupsField.filter((i) => {
          return i.id.toString() !== idSelected.toString();
        })
      );
    }
  };

  const handleOnSubmit = (
    idParam: number,
    usernameParam: string,
    emailParam: string,
    isStaffParam: boolean,
    isSuperuserParam: boolean,
    isActiveParam: boolean,
    passwordParam: string,
    groupsParam: Array<GroupEntity>
  ) => {
    const isEdit = prefix === "Edit";
    onSubmit?.(
      (id = idParam),
      (username = usernameParam),
      (email = emailParam),
      (is_staff = isStaffParam),
      (is_superuser = isSuperuserParam),
      (is_active = isActiveParam),
      (password = passwordParam),
      (groups = groupsParam),
      isEdit
    );
    handleOnClose();
  };

  const handleOnClose = () => {
    setUsernameField("");
    setEmailField("");
    setPasswordField("");
    setGroupsField([]);
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
              {prefix} Data User
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
                id="username-field"
                defaultValue={username}
                label="Username"
                variant="outlined"
                color="primary"
                size="small"
                onChange={(e) => {
                  setUsernameField(e.currentTarget.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <TextField
                id="email-field"
                defaultValue={email}
                label="Email"
                variant="outlined"
                color="primary"
                size="small"
                onChange={(e) => {
                  setEmailField(e.currentTarget.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <TextField
                id="password-field"
                defaultValue={password}
                label="Password"
                variant="outlined"
                color="primary"
                size="small"
                type="password"
                onChange={(e) => {
                  setPasswordField(e.currentTarget.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <FormControl fullWidth>
                <InputLabel id="groups-label">Akses Group</InputLabel>
                <Select
                  labelId="groups-label"
                  id="groups-field"
                  color="primary"
                  multiple
                  value={groupsField}
                  onChange={handleChangeGroups}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Akses Group"
                      color="primary"
                    />
                  }
                  renderValue={(groupsField) => {
                    return (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {groupsField.map((value) => {
                          return <Chip key={value.id} label={value.name} />;
                        })}
                      </Box>
                    );
                  }}
                  MenuProps={MenuProps}
                  fullWidth
                >
                  {listGroupItems?.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
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
                        usernameField,
                        emailField,
                        is_staff,
                        is_superuser,
                        is_active,
                        passwordField,
                        groupsField
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

export default AddUserModal;
