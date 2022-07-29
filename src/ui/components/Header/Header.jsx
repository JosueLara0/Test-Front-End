//* libraries
import { useContext } from "react";
import { Grid, Typography, IconButton, Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
//* styles
import { headerStyles as styles } from "./header.styles";
//* icons
import { MenuOutlined, ShoppingCart } from "@mui/icons-material";
import { PersonOutlineOutlined } from "@mui/icons-material";
import corebizLogo from "../../assets/logo-corebiz-black.svg";
//* components
import { Searcher } from "../Searcher/Searcher";
//* context
import { UserContext } from "../../context/UserContext";

export const Header = () => {
  const is640px = useMediaQuery("(max-width:640px)");
  const { cart } = useContext(UserContext);

  //? Small screens view
  if (is640px) {
    return (
      <Grid container sx={styles.gridContainer}>
        <Grid container sx={styles.gridMobile}>
          {/*//?  Mobile Menu  */}
          <IconButton>
            <MenuOutlined sx={styles.icon} fontSize="large" />
          </IconButton>

          {/*//?  Logo  */}
          <IconButton>
            <Box
              component="img"
              sx={styles.boxLogo}
              src={corebizLogo}
              alt="Corebiz"
            />
          </IconButton>

          {/*//?  Shopping Cart  */}
          <IconButton>
            <ShoppingCart sx={styles.icon} />
            <Typography sx={styles.typoCart}>{cart}</Typography>
          </IconButton>
        </Grid>

        {/*//?  Searcher  */}
        <Searcher />
      </Grid>
    );
  }

  //? Large screens view
  return (
    <Grid container sx={styles.gridContainer}>
      {/*//?  Logo  */}
      <IconButton>
        <Box
          component="img"
          sx={styles.boxLogo}
          src={corebizLogo}
          alt="Corebiz"
        />
      </IconButton>

      {/*//?  Searcher  */}
      <Searcher />

      {/*//?  My account  */}
      <IconButton>
        <PersonOutlineOutlined sx={styles.icon} fontSize="large" />
        <Typography sx={styles.typoAccount}>Mi Cuenta</Typography>
      </IconButton>

      {/*//?  Shopping Cart  */}
      <IconButton>
        <ShoppingCart sx={styles.icon} fontSize="large" />
        <Typography sx={styles.typoCart}>{cart}</Typography>
      </IconButton>
    </Grid>
  );
};
