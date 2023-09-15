import { Box, Paper, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid";

const UnauthorizePage = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box sx={{ margin: 1 }}>
          <Paper variant="outlined" sx={{ padding: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={12}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Typography variant="h6" align="center">
                  401 | Unauthorized
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  marginLeft="auto"
                  marginRight="auto"
                >
                  <Link href="/home">Kembali ke halaman utama</Link>
                </Typography>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UnauthorizePage;
