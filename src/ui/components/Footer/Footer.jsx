//* libraries
import { Grid, Typography, Button, Box } from "@mui/material";
//* icons
import EmailIcon from "@mui/icons-material/Email";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import corebizLogo from "../../assets/logo-corebiz-white.svg";
import vtexLogo from "../../assets/logo-vtex.svg";
//* styles
import { footerStyles as styles } from "./footer.styles";

export const Footer = () => {
  return (
    <Grid container sx={styles.gridContainer}>
      {/*//?  Location */}
      <Grid item>
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
          <Button
            variant="contained"
            sx={styles.button}
            startIcon={<EmailIcon />}
          >
            <Typography sx={styles.typoButton}>CONTÁCTANOS</Typography>
          </Button>
        </Grid>

        <Grid>
          <Button
            variant="contained"
            sx={styles.button}
            startIcon={<HeadsetMicIcon />}
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
