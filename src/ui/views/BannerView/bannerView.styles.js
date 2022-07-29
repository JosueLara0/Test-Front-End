export const bannerStyles = {
  boxBanner: {
    height: "430px",
    marginTop: { xs: "125px", sm: "80px" },
    overflow: "hidden",
    cursor: "grab",
    "&:active": {
      cursor: "grabbing",
    },
    '@media (max-width: 390px)': {
      height: "225px",
    }
  },
  gridContainer: {
    height: "430px",
    backgroundColor: 'secondary.main',
    color: 'primary.main',
    '@media (max-width: 390px)': {
      height: "225px",
    }
  },
  gridBackImg: {
    backgroundBlendMode: "darken",
  },
  gridTypo: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  typo1: {
    marginBottom: "12px",
    font: 'Nunito, sans serif',
    fontSize: { xs: "16px", sm: "30px" },
    letterSpacing: '0px',
  },
  typo2: {
    font: 'Nunito, sans serif',
    fontSize: { xs: "26px", sm: "40px" },
    fontWeight: '900',
    letterSpacing: '0px',
  },
  gridImg: {
    display: { xs: "none", lg: "block" }
  },
  boxImg: {
    height: "100%",
    maxWidth: "50vw",
    overflow: "hidden",
  },
  boxStepper: {
    width: "100%",
    marginTop: "-40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  stepper: {
    backgroundColor: "transparent",
    ".dot": {
      backgroundColor: "secondary.grayBD",
      mx: "12px",
      width: "10px",
      height: "10px",
    },
    ".dotActive": { backgroundColor: "error.main" },
  }
};
