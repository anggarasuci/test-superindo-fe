import { Style } from "components/styles";
import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { FC } from "react";
import { DocumentTypeEntity } from "src/domain/entity/document-type-entity";
import { CandidateDocumentEntity } from "src/domain/entity/candidate-document-entity";

type DocumentModalProps = {
  isOpenModal: boolean;
  candidateName: string;
  masterDocuments: DocumentTypeEntity[];
  documents: CandidateDocumentEntity[];
  onClose: () => void;
};

const DocumentComponentModal: FC<DocumentModalProps> = ({
  isOpenModal,
  candidateName,
  masterDocuments,
  documents,
  onClose,
}) => {
  const generateItem = (item: DocumentTypeEntity) => {
    const document = documents?.find((it) => it.document_type?.id === item.id);
    return (
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
        <TableCell>{item?.name}</TableCell>
        <TableCell>
          <Link
            href={document?.file}
            style={{ cursor: "pointer" }}
            target="_blank"
          >
            {document?.file ? /[^/]*$/.exec(document.file)[0] : ""}
          </Link>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Style.StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={isOpenModal}
      onClose={() => {
        onClose?.();
      }}
    >
      <Box sx={{ margin: 1, width: 600 }}>
        <Paper sx={{ padding: 2 }}>
          <Grid container>
            <Grid item xs={12} md={12}>
              {candidateName}
            </Grid>
            <Grid item xs={12} md={12} mb={3} mt={1}>
              <TableContainer>
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
                    <TableCell>Dokumen</TableCell>
                    <TableCell>File</TableCell>
                  </TableRow>

                  <TableBody>
                    {documents &&
                      masterDocuments?.map((item) => {
                        return generateItem(item);
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                variant="contained"
                color="warning"
                fullWidth
                onClick={() => {
                  onClose?.();
                }}
              >
                Tutup
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Style.StyledModal>
  );
};

export default DocumentComponentModal;
