import { Style } from "components/styles";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Toolbar,
  IconButton,
  Badge,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { FC, useCallback, useEffect, useState } from "react";
import numeral from "numeral";
import _ from "lodash";
import { SearchRounded } from "@material-ui/icons";
import ClearIcon from "@mui/icons-material/Clear";
import trophy from "assets/trophy.png";
import female from "assets/female.png";
import male from "assets/male.png";
import Image from "next/image";
import { CandidateResultDapilXRegencyEntity } from "src/domain/entity/candidate-entity";
import { appStoreImplementation } from "src/data/store-implementation/app-store-implementation";
import { resultRegencyStoreImplementation } from "src/data/store-implementation/result-regency-store-implementation";
import { getResultDapilPerCandidateUseCase } from "src/use-case/result-dapil/get-result-dapil-per-candidate-use-case";
import { getResultRegencyPerCandidateUseCase } from "src/use-case/result-regency/get-result-regency-per-candidate-use-case";
import { resultDapilStoreImplementation } from "src/data/store-implementation/result-dapil-store-implementation";
import { Loading } from "components/Loading";
import CandidateModalComponent from "components/candidate/CandidateModalComponent";

type ListModalProps = {
  isOpenModal: boolean;
  data?: Array<any>;
  winner?: Array<any>;
  title?: string;
  onClose: () => void;
};

const ListModalCandidate: FC<ListModalProps> = ({
  isOpenModal,
  data,
  winner,
  title,
  onClose,
}) => {
  const handleOnClose = () => {
    onClose?.();
  };

  const [dataTable, setDataTable] = useState<Array<any>>([]);
  const [dataWinner, setDataWinner] = useState<Array<any>>([]);
  const [sorting, setSorting] = useState<number>(1);
  const [isLoadingModal, setIsLoadingModal] = useState<boolean>(false);

  const [showCandidateModal, setShowCandidateModal] = useState<boolean>(false);
  const [candidateDataModal, setCandidateDataModal] =
    useState<CandidateResultDapilXRegencyEntity>();
  const resultRegencyStore = resultRegencyStoreImplementation();
  const resultDapilStore = resultDapilStoreImplementation();

  const getLink = (candidateId: string) => {
    return `${window.location.origin.toString()}/result/candidate?id=${candidateId}`;
  };

  const getIcon = (win: boolean) => {
    return win ? <Image width="20" height="20" src={trophy} /> : "";
  };

  const handleChangeSorting = (event) => {
    setSorting(event.target.value);
    sortData(event.target.value);
  };

  const handleSearchCandidate = (event) => {
    const keyword = event.target.value;
    const tmp = data.filter((item) =>
      item.candidate?.name?.toUpperCase().includes(keyword.toUpperCase())
    );
    setDataTable(tmp);
  };

  const sortData = (sortType: number) => {
    // 1 = Total Suara
    // 2 = Partai
    // 3 = Nama
    if (sortType === 1) {
      const tmp = _.sortBy(dataTable, ["total_suara"]).reverse();
      setDataTable(tmp);
    } else if (sortType === 2) {
      const tmp = _.sortBy(dataTable, ["candidate.party.id"]);
      setDataTable(tmp);
    } else if (sortType === 3) {
      const tmp = _.sortBy(dataTable, ["candidate.name"]);
      setDataTable(tmp);
    }
  };

  useEffect(() => {
    setDataTable(data);
  }, [data]);

  useEffect(() => {
    setDataWinner(winner);
  }, [winner]);

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 30,
    height: 30,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  useEffect(() => {}, [isLoadingModal]);
  useEffect(() => {}, [candidateDataModal]);

  useEffect(() => {
    if (resultDapilStore?.results_dapil_candidate?.length < 1) return;
    const result = {
      ...candidateDataModal,
      resultDapil: resultDapilStore?.results_dapil_candidate?.[0],
    };
    setCandidateDataModal(result);
  }, [resultDapilStore?.results_dapil_candidate]);

  useEffect(() => {
    if (resultRegencyStore?.results_regency_per_candidate?.length < 1) return;
    const result = {
      ...candidateDataModal,
      resultRegencies: resultRegencyStore?.results_regency_per_candidate,
    };
    setCandidateDataModal(result);
  }, [resultRegencyStore?.results_regency_per_candidate]);

  const onCloseModalCandidate = useCallback(() => {
    setShowCandidateModal(false);
  }, [showCandidateModal]);

  const onCandidateClicked = useCallback(
    async (candidate: string) => {
      await handleGetCandidateModalData(candidate);
      setShowCandidateModal(true);
    },
    [showCandidateModal]
  );

  const handleGetCandidateModalData = async (candidate: string) => {
    setIsLoadingModal(true);
    await getResultDapilByCandidate(candidate);
    await getResultRegencyByCandidate(candidate);
    setIsLoadingModal(false);
  };

  const getResultDapilByCandidate = useCallback(
    async (candidate: string) => {
      await getResultDapilPerCandidateUseCase(
        resultDapilStore,
        candidate,
        appStoreImplementation.getState().setting?.globalPeriodId,
        appStoreImplementation.getState().setting?.globalTypeId
      );
    },
    [resultDapilStore?.results_dapil_candidate]
  );

  const getResultRegencyByCandidate = useCallback(
    async (candidate: string) => {
      await getResultRegencyPerCandidateUseCase(
        resultRegencyStore,
        "",
        candidate,
        appStoreImplementation.getState().setting?.globalPeriodId,
        appStoreImplementation.getState().setting?.globalTypeId
      );
    },
    [resultRegencyStore?.results_regency_per_candidate]
  );

  return (
    <Style.StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={isOpenModal}
      onClose={() => {}}
    >
      <Box sx={{ margin: 1, width: 700 }}>
        <Loading isLoading={isLoadingModal} />
        <Paper
          variant="outlined"
          sx={{ padding: 1, margin: 0, backgroundColor: "primary.main" }}
        >
          <Grid item xs={12} md={12} margin={0.5} pl={1}>
            <Toolbar>
              <Typography
                variant="h5"
                color="secondary.main"
                sx={{ ml: 2, flex: 1 }}
              >
                {title}
              </Typography>
              <IconButton
                sx={{ color: "#FFF", mr: 1 }}
                onClick={() => {
                  handleOnClose();
                }}
              >
                <ClearIcon />
              </IconButton>
            </Toolbar>
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
            <Grid item xs={12} md={3} margin={0.5} padding={1} paddingRight={0}>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="sorting-select-label">Urutkan</InputLabel>
                  <Select
                    labelId="sorting-select-label"
                    id="sorting-select"
                    value={sorting}
                    onChange={handleChangeSorting}
                  >
                    <MenuItem value={1}>Total Suara</MenuItem>
                    <MenuItem value={2}>Partai</MenuItem>
                    <MenuItem value={3}>Nama</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={8} margin={0.5} padding={1} paddingLeft={0}>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <FormControl variant="standard" fullWidth>
                  <TextField
                    fullWidth
                    label="Cari Nama Kandidat"
                    id="searchCandidate"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchRounded />
                        </InputAdornment>
                      ),
                    }}
                    onKeyUp={handleSearchCandidate}
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <TableContainer sx={{ height: 500, overflow: "scroll" }}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>No</TableCell>
                      <TableCell>Kandidat</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataTable?.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": {
                            border: 0,
                          },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: "flex" }}>
                            <Box sx={{ mr: 1 }}>
                              <Badge
                                overlap="circular"
                                anchorOrigin={{
                                  vertical: "bottom",
                                  horizontal: "right",
                                }}
                                badgeContent={
                                  <SmallAvatar
                                    alt="Candidate Name"
                                    src={row?.candidate?.party?.logo}
                                  />
                                }
                              >
                                <Avatar
                                  sx={{
                                    mb: 1,
                                    width: 50,
                                    height: 50,
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                  }}
                                >
                                  <Image
                                    width="50"
                                    height="50"
                                    src={
                                      row?.candidate?.gender == "F"
                                        ? female
                                        : male
                                    }
                                  />
                                </Avatar>
                              </Badge>
                            </Box>
                            <Box alignSelf="center">
                              <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                sx={{
                                  borderRadius: 15,
                                }}
                                onClick={() => {
                                  onCandidateClicked(
                                    row?.candidate?.id?.toString()
                                  );
                                }}
                                fullWidth
                              >
                                {row?.candidate?.name} -{" "}
                                {numeral(row?.total_suara).format("0,0")} suara{" "}
                                {getIcon(row?.flag_win)}
                              </Button>
                            </Box>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            {/* <Grid item xs={12} md={12} margin={0.5} padding={1}>
              <Box sx={{ display: "flex" }}>
                <Grid>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => {
                      handleOnClose();
                    }}
                  >
                    Tutup
                  </Button>
                </Grid>
              </Box>
            </Grid> */}
          </Grid>
        </Paper>
        <CandidateModalComponent
          isOpenModal={showCandidateModal}
          data={candidateDataModal}
          onClose={() => {
            onCloseModalCandidate();
          }}
        />
      </Box>
    </Style.StyledModal>
  );
};

export default ListModalCandidate;
