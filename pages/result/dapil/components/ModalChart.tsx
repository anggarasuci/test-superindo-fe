import * as React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Style } from "components/styles";
import {
  Paper,
  Grid,
  TextField,
  InputLabel,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  IconButton,
} from "@mui/material";
import { ColorPicker } from "material-ui-color";
import ClearIcon from "@mui/icons-material/Clear";
import numeral from "numeral";

export default function ModalChart(props) {
  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
  };

  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (props.data && props.data.length > 0) {
      setData(props.data);
    }
  }, [props.data]);

  return (
    <Style.StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={props.openModal}
      onClose={() => {}}
    >
      <Box sx={{ margin: 1, width: 500 }}>
        <Paper
          variant="outlined"
          sx={{ padding: 1, margin: 0, backgroundColor: "primary.main" }}
        >
          <Grid item xs={12} md={12} margin={0.5} pl={1}>
            <Toolbar>
              <Typography variant="h5" color="secondary.main" sx={{ flex: 1 }}>
                {props.title}
              </Typography>
              <IconButton
                sx={{ color: "#FFF", mr: 1 }}
                onClick={() => {
                  props.handleCloseModal();
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
            <Grid item xs={12} md={12} margin={0.5} padding={1}></Grid>
            <Grid item xs={12} md={12} sx={{ pr: 1 }}>
              <TableContainer sx={{ height: 450 }}>
                <Table aria-label="simple table">
                  <TableBody>
                    {data?.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": {
                            border: 0,
                          },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.key}
                        </TableCell>
                        <TableCell>
                          {numeral(row.value).format("0,0")}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Style.StyledModal>
  );
}
