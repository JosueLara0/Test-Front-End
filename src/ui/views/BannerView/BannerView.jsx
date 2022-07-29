//* libraries
import { useState } from "react";
import { Grid, Box, MobileStepper, Button, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
//* styles
import { bannerStyles as styles } from "./bannerView.styles";
//* utils
import { images } from "../../utils";

export const BannerView = () => {
  const theme = useTheme();
  const is1024px = useMediaQuery("(max-width:1024px)");
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = images.length;

  const handleStepChange = (step) => setActiveStep(step);

  return (
    <SwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {images.map((step, index) => (
        <Box key={step.label} sx={styles.boxBanner}>
          {Math.abs(activeStep - index) <= 2 ? (
            <>
              <Grid container sx={styles.gridContainer}>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  sx={styles.gridBackImg}
                  style={{
                    background: is1024px
                      ? `rgba(0, 0, 0, 0.6) url(${step.imgPath})`
                      : ``,
                  }}
                >
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

                <Grid item md={6} sx={styles.gridImg}>
                  <Box
                    component="img"
                    sx={styles.boxImg}
                    src={step.imgPath}
                    alt="banner"
                  />
                </Grid>
              </Grid>

              <Box sx={styles.boxStepper}>
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  classes={{ dot: "dot", dotActive: "dotActive" }}
                  sx={styles.stepper}
                  nextButton={<Button sx={{ display: "none" }} />}
                  backButton={<Button sx={{ display: "none" }} />}
                />
              </Box>
            </>
          ) : null}
        </Box>
      ))}
    </SwipeableViews>
  );
};
