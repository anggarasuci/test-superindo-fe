import {
  Avatar,
  Button,
  Collapse,
  Grid,
  Link,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, useCallback, useEffect, useState } from "react";
import {
  AdditionalFieldScoreEntity,
  DrillDownCandidateScore,
  ResultScoreEntity,
} from "src/domain/entity/result-score-entity";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { ResultCandidateScoreEntity } from "src/domain/entity/result-candidate-score-entity";
import numeral from "numeral";
import { Sort } from "src/domain/entity/base-dapil-entity";
import { GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddCandidateComponentModal from "./AddCandidateComponentModal";

type ResultDapilScoreComponentProps = {
  data: ResultScoreEntity[];
  drillDownData: DrillDownCandidateScore[];
  maxDocument: number;
  maxScore: number;
  sortBy: { name: string; orderBy: string };
  additionalField: AdditionalFieldScoreEntity[];
  sortByClicked: (name: string, orderBy: "asc" | "desc") => void;
  onExpandByDapil: (dapilId: number, isExpanded: boolean) => void;
  sortByDapilDrilldown: (
    dapilId: number,
    name: string,
    orderBy: "asc" | "desc"
  ) => void;
  onUpdateAdditionalFieldClicked: (item: AdditionalFieldScoreEntity) => void;
  onDocumentClick: (candidateId: number, candidateName: string) => void;
  onDeleteCandidate: (id: number) => void;
  onAddCandidate: (candidate: string, gender: string, dapil: string) => void;
};

const ResultDapilScoreComponent: FC<ResultDapilScoreComponentProps> = ({
  data,
  maxScore,
  sortBy,
  drillDownData,
  maxDocument,
  additionalField,
  sortByClicked,
  onExpandByDapil,
  sortByDapilDrilldown,
  onUpdateAdditionalFieldClicked,
  onDocumentClick,
  onDeleteCandidate,
  onAddCandidate,
}) => {
  const [inputAdditionalField, setInputAdditionalField] =
    useState<AdditionalFieldScoreEntity[]>(additionalField);

  const [isShowAddDialog, setIsShowDialog] = useState<boolean>(false);
  const [selectedDapilName, setSelectedDapilName] = useState<string>("");

  useEffect(() => {
    setInputAdditionalField(additionalField);
  }, [additionalField]);

  const handleOnChangeValue = (
    type: "dprt" | "indeks" | "target",
    id: number,
    value: string
  ) => {
    const filtered = inputAdditionalField.filter((item) => item.dapilId != id);
    const selected = inputAdditionalField.find((item) => item.dapilId == id);
    const newValue: AdditionalFieldScoreEntity = {
      dapilId: selected?.dapilId,
      dapil: selected?.dapil,
      province: selected?.province,
      dprt: type === "dprt" ? value : selected?.dprt,
      indeksValue: type === "indeks" ? value : selected?.indeksValue,
      target: type === "target" ? value : selected?.target,
    };
    filtered.push(newValue);
    setInputAdditionalField(filtered);
  };

  const handleOnUpdate = (dapilId: number) => {
    const selected = inputAdditionalField.find(
      (item) => item.dapilId == dapilId
    );
    onUpdateAdditionalFieldClicked(selected);
  };

  const generateCandidateItem = (
    item: ResultCandidateScoreEntity,
    index: number
  ) => {
    return (
      <TableRow
        hover={true}
        sx={{
          "td, th": {
            fontSize: 14,
            color: "#00000080",
            borderLeft: 1,
            borderColor: "#DADBDA",
          },
        }}
      >
        <TableCell width={50}>{index + 1}</TableCell>
        <TableCell width={250}>
          <Grid item flexDirection={"column"}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span>
                <Link
                  href={
                    window.location.origin +
                    "/result/candidate?id=" +
                    item?.candidate?.id
                  }
                  style={{ cursor: "pointer" }}
                >
                  {item?.candidate?.name}
                </Link>
              </span>
            </div>
            <Typography variant="body2">
              {item.candidate?.gender === "M" ? "Laki-laki" : "Perempuan"}
            </Typography>
          </Grid>
        </TableCell>
        <TableCell width={50}>{item?.total_score}</TableCell>
        <TableCell width={150}>
          {numeral(item?.total_suara ?? "0")
            .format("0,0")
            .replaceAll(",", ".")}
        </TableCell>
        <TableCell width={100}>
          {item?.total_survey?.toFixed(2).replace(".00", "") + "%"}
        </TableCell>
        <TableCell width={100}>
          <Link
            style={{
              cursor: "pointer",
            }}
            onClick={() =>
              onDocumentClick?.(item?.candidate?.id, item?.candidate?.name)
            }
          >
            {item?.count_document} / {maxDocument}
          </Link>
        </TableCell>
        <TableCell width={100}>{item?.sequence}</TableCell>
        <TableCell width={70}>
          <GridActionsCellItem
            icon={<DeleteIcon />}
            onClick={() => {
              onDeleteCandidate?.(item?.id ?? 0);
            }}
            label="Delete"
          />
        </TableCell>
      </TableRow>
    );
  };

  const generateItem = (item: ResultScoreEntity) => {
    const candidateData = drillDownData?.find(
      (it) => it.dapilId === item?.dapil?.id
    );
    const rowSpan = 2;
    return (
      <>
        <TableRow
          hover={true}
          sx={{
            "td, th": {
              fontSize: 14,
              color: "#00000080",
              border: 1,
              borderColor: "#DADBDA",
            },
          }}
        >
          <TableCell
            rowSpan={rowSpan}
            style={{ verticalAlign: "top", paddingTop: 15 }}
          >
            {item?.dapil?.province?.name}
          </TableCell>
          <TableCell colSpan={8}>
            <Grid container md={12}>
              <Grid item md={11}>
                <Button
                  fullWidth
                  variant={"text"}
                  endIcon={
                    candidateData?.expanded ? (
                      <ArrowDropUpIcon />
                    ) : (
                      <ArrowDropDownIcon />
                    )
                  }
                  onClick={() => {
                    onExpandByDapil(item?.dapil?.id, !candidateData?.expanded);
                  }}
                >
                  {item?.dapil?.name}
                </Button>
              </Grid>
              <Grid item md={1}>
                <GridActionsCellItem
                  icon={<PersonAddAlt1Icon />}
                  onClick={() => {
                    setSelectedDapilName(item?.dapil?.name);
                    setIsShowDialog(true);
                  }}
                  label="Add"
                />
              </Grid>
            </Grid>
          </TableCell>
          <TableCell
            rowSpan={rowSpan}
            style={{ verticalAlign: "top", paddingTop: 15 }}
          >
            <Grid item flexDirection={"column"}>
              <Typography variant="button" fontWeight={"700"}>
                {item.total_score.toFixed(2).replace(".00", "")}
              </Typography>
            </Grid>
          </TableCell>
          <TableCell
            rowSpan={rowSpan}
            style={{ verticalAlign: "top", paddingTop: 15 }}
          >
            {item?.total_survey
              ? item?.total_survey?.toFixed(2).replace(".00", "")
              : "0" + "%"}
          </TableCell>
          <TableCell
            rowSpan={rowSpan}
            style={{ verticalAlign: "top", paddingTop: 15 }}
          >
            {item?.dapil?.total_kursi}
          </TableCell>
          <TableCell
            rowSpan={rowSpan}
            style={{ verticalAlign: "top", paddingTop: 15 }}
          >
            {item?.total_kursi}
          </TableCell>
          <TableCell
            rowSpan={rowSpan}
            style={{ verticalAlign: "top", paddingTop: 15 }}
          >
            <TextField
              type={"text"}
              value={
                inputAdditionalField?.find((it) => it.dapilId == item.dapil.id)
                  ?.target ?? ""
              }
              onChange={(event) => {
                handleOnChangeValue(
                  "target",
                  item.dapil.id,
                  event.currentTarget.value
                );
              }}
            />
          </TableCell>
          <TableCell
            rowSpan={rowSpan}
            style={{ verticalAlign: "top", paddingTop: 15 }}
          >
            <TextField
              type={"text"}
              value={
                inputAdditionalField?.find((it) => it.dapilId == item.dapil.id)
                  ?.dprt ?? ""
              }
              onChange={(event) => {
                handleOnChangeValue(
                  "dprt",
                  item.dapil.id,
                  event.currentTarget.value
                );
              }}
            />
          </TableCell>
          <TableCell
            rowSpan={rowSpan}
            style={{ verticalAlign: "top", paddingTop: 15 }}
          >
            <TextField
              type={"text"}
              value={
                inputAdditionalField?.find((it) => it.dapilId == item.dapil.id)
                  ?.indeksValue ?? ""
              }
              onChange={(event) => {
                handleOnChangeValue(
                  "indeks",
                  item.dapil.id,
                  event.currentTarget.value
                );
              }}
            />
          </TableCell>
          <TableCell
            rowSpan={rowSpan}
            style={{ verticalAlign: "top", paddingTop: 15 }}
          >
            <Button
              variant="outlined"
              color={"primary"}
              onClick={() => {
                handleOnUpdate(item.dapil.id);
              }}
            >
              Simpan
            </Button>
          </TableCell>
        </TableRow>

        <Collapse in={candidateData?.expanded} timeout={"auto"}>
          <TableRow
            // hover={true}
            sx={{
              "td, th": {
                fontSize: 14,
                color: "#00000080",
                borderLeft: 1,
                borderColor: "#DADBDA",
              },
            }}
          >
            <TableCell width={50}>No</TableCell>
            <TableCell width={250}>
              {generateClickedContent(
                "Nama Kandidat",
                "candidate.name",
                item?.dapil?.id,
                candidateData?.sort
              )}
            </TableCell>
            <TableCell width={50}>
              {generateClickedContent(
                "Skor",
                "total_score",
                item?.dapil?.id,
                candidateData?.sort
              )}
            </TableCell>
            <TableCell width={150}>
              {generateClickedContent(
                "Suara 2019",
                "total_suara",
                item?.dapil?.id,
                candidateData?.sort
              )}
            </TableCell>
            <TableCell width={100}>
              {generateClickedContent(
                "Survey",
                "total_survey",
                item?.dapil?.id,
                candidateData?.sort
              )}
            </TableCell>
            <TableCell width={100}>
              {generateClickedContent(
                "Dokumen",
                "count_document",
                item?.dapil?.id,
                candidateData?.sort
              )}
            </TableCell>
            <TableCell width={100}>
              {generateClickedContent(
                "Urutan ke",
                "sequence",
                item?.dapil?.id,
                candidateData?.sort
              )}
            </TableCell>
            <TableCell width={70}>Action</TableCell>
          </TableRow>
          {candidateData?.data?.map((it, index) => {
            return generateCandidateItem(it, index);
          })}
        </Collapse>
      </>
    );
  };

  const handleOnClickSort = (key: string) => {
    sortByClicked?.(key, sortBy?.orderBy == "asc" ? "desc" : "asc");
  };

  const handleOnClickSortDrillDown = (
    dapilId: number,
    key: string,
    orderBy: string
  ) => {
    sortByDapilDrilldown?.(dapilId, key, orderBy == "asc" ? "desc" : "asc");
  };

  const getIcon = (key: string) => {
    if (key != sortBy?.name) return null;
    return sortBy?.orderBy == "asc" ? (
      <KeyboardArrowUpIcon style={{ marginBottom: -2 }} />
    ) : (
      <KeyboardArrowDownIcon style={{ marginBottom: -2 }} />
    );
  };

  const getIconDrilldown = (key: string, sort: Sort) => {
    if (key != sort?.name) return null;
    return sort?.orderBy == "asc" ? (
      <KeyboardArrowUpIcon style={{ marginBottom: -2 }} />
    ) : (
      <KeyboardArrowDownIcon style={{ marginBottom: -2 }} />
    );
  };

  const generateClickedContent = (
    label: string,
    key: string,
    dapilId?: number,
    sort?: Sort
  ) => {
    return (
      <div
        onClick={() => {
          if (dapilId) handleOnClickSortDrillDown(dapilId, key, sort?.orderBy);
          else handleOnClickSort(key);
        }}
        style={{
          display: "flex",
          alignItems: "end",
          flexWrap: "wrap",
          cursor: "pointer",
        }}
      >
        <span style={{ marginRight: 10 }}>{label}</span>
        {dapilId ? getIconDrilldown(key, sort) : getIcon(key)}
      </div>
    );
  };

  return (
    <Grid container>
      {data && (
        <Grid item xs={12} md={12} mb={3} mr={1} mt={1}>
          <TableContainer style={{ width: "1730px" }}>
            <Table size="small">
              <TableRow
                sx={{
                  "td, th": {
                    fontSize: 14,
                    background: "#00000010",
                    fontWeight: "bold",
                    color: "#00000080",
                    border: 1,
                    borderColor: "#DADBDA",
                  },
                }}
              >
                <TableCell>
                  {generateClickedContent("Provinsi", "dapil.province.id")}
                </TableCell>
                <TableCell colSpan={8}>
                  {" "}
                  {generateClickedContent("Dapil", "dapil.name")}
                </TableCell>
                <TableCell>
                  {generateClickedContent(
                    "Rata-rata Skor Caleg per Dapil",
                    "total_score"
                  )}
                </TableCell>
                <TableCell>
                  {generateClickedContent(
                    "Survey Partai per Dapil",
                    "total_survey"
                  )}
                </TableCell>
                <TableCell>
                  {generateClickedContent(
                    "Kursi Tersedia",
                    "dapil.total_kursi"
                  )}
                </TableCell>
                <TableCell>
                  {generateClickedContent(
                    "Total Perolehan Kursi 2019",
                    "total_kursi"
                  )}
                </TableCell>
                <TableCell>
                  {generateClickedContent("Target Kursi", "dapil.target_kursi")}
                </TableCell>
                <TableCell width={200}>
                  {generateClickedContent(
                    "Struktur DPRT",
                    "dapil.struktur_dprt"
                  )}
                </TableCell>
                <TableCell width={200}>
                  {generateClickedContent(
                    "Indeks Keseluruhan",
                    "dapil.indeks_value"
                  )}
                </TableCell>
                <TableCell>Action</TableCell>
              </TableRow>

              <TableBody>
                {data?.map((item) => {
                  return generateItem(item);
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      )}

      <AddCandidateComponentModal
        isOpenModal={isShowAddDialog}
        onClose={() => {
          setIsShowDialog(false);
        }}
        onSubmit={(candidate, gender, dapil) => {
          onAddCandidate(candidate, gender, dapil);
          setIsShowDialog(false);
        }}
        dapilName={selectedDapilName}
      />
    </Grid>
  );
};

export default ResultDapilScoreComponent;
