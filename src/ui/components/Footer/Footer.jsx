//* libraries
import { Grid, Typography, Button, Box } from "@mui/material";
//* styles
import { footerStyles as styles } from "./footer.styles";
//* icons
import { HeadsetMic, Email } from "@mui/icons-material";
import corebizLogo from "../../assets/logo-corebiz-white.svg";
import vtexLogo from "../../assets/logo-vtex.svg";

export const Footer = () => {
  return (
    <Grid
      container
      direction={{ xs: "column", md: "row" }}
      sx={styles.gridContainer}
    >
      {/*//?  Location */}
      <Grid item sx={styles.gridLocation}>
        <Typography sx={styles.typoTitle}>Ubicación</Typography>
        <Box sx={styles.boxBar}></Box>
        <Typography sx={styles.typoLocation}>
          Avenida Andrômeda, 2000. Bloco 6 e 8
        </Typography>
        <Typography sx={styles.typoLocation}>Alphavile SP</Typography>
        <Typography sx={styles.typoLocation}>brasil@corebiz.ag</Typography>
        <Typography sx={styles.typoLocation}>+55 11 3090 1039</Typography>
      </Grid>

      {/*//?  Buttons  */}
      <Grid item>
        <Grid>
          <Button variant="contained" sx={styles.button} startIcon={<Email />}>
            <Typography sx={styles.typoButton}>CONTÁCTANOS</Typography>
          </Button>
        </Grid>

        <Grid>
          <Button
            variant="contained"
            sx={styles.button}
            startIcon={<HeadsetMic />}
          >
            <Typography sx={styles.typoButton}>
              HABLA CON UN CONSULTOR
            </Typography>
          </Button>
        </Grid>
      </Grid>

      {/*//?  Logos  */}
      <Grid item sx={styles.gridLogo}>
        <Box sx={styles.boxLogo}>
          <Typography sx={styles.typoLogo}>Desarrollado por</Typography>
          <Box
            component="img"
            sx={styles.boxImg}
            src={corebizLogo}
            alt="Corebiz"
          />
        </Box>

        <Box>
          <Typography sx={styles.typoLogo}>Powered by</Typography>
          <Box sx={styles.gridLogo}>
            <Box component="img" sx={styles.boxImg} src={vtexLogo} alt="Vtex" />
            <Typography sx={styles.typoVtex}>VTEX</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
