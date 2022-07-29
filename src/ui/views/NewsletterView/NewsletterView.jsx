//* libraries
import { Grid, Typography, Button } from "@mui/material";
//* styles
import { newsletterStyles as styles } from "./newsletterView.styles";
//* components
import { Input } from "../../components";
//* hooks
import { useForm, usePost } from "../../hooks";
//* utils
import { emailRegex, newsUrl as url, newsAlerts as alerts } from "../../utils";

export const NewsletterView = () => {
  const { postData } = usePost();

  const {
    formState: payload,
    onInputChange,
    name,
    email,
  } = useForm({
    email: "",
    name: "",
  });

  const onClickButton = () => {
    if (!emailRegex.test(email)) {
      alert(alerts.errorEmail);
      return;
    }

    if (name.length === 0) {
      alert(alerts.errorName);
      return;
    }

    postData(url, payload, alerts);
  };

  return (
    <Grid container direction="column" sx={styles.gridContainer}>
      <Typography sx={styles.typo}>
        ¡Únete a nuestras novedades y promociones!
      </Typography>

      <Grid
        container
        justifyContent="center"
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Input
            label="Ingresa tu nombre"
            type="text"
            name="name"
            onChange={onInputChange}
          />
        </Grid>

        <Grid item>
          <Input
            label="Ingresa tu mail"
            type="email"
            name="email"
            onChange={onInputChange}
          />
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            sx={styles.button}
            onClick={onClickButton}
          >
            Suscribirme
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
