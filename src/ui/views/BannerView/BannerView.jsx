//* libraries
import { Grid, Typography, Box } from "@mui/material";
//* styles
import { bannerStyles as styles } from "./bannerView.styles";
//* images
import banner from "../../assets/banner.webp";

export const BannerView = () => {
  return (
    <Grid container direction="row" sx={styles.gridContainer}>
      <Grid item xs={6}>
        <Grid container direction="column" sx={styles.gridTypo}>
          <Typography sx={styles.typo1}>
            ¡Hola! ¿Qué es lo que buscas?
          </Typography>
          <Typography sx={styles.typo2}>
            Crear o migrar tu
            <br />
            comercio electrónico?
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Box component="img" sx={styles.box} src={banner} alt="banner" />
      </Grid>
    </Grid>
  );
};
