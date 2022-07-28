//* libraries
import { useContext } from "react";
import { Grid, Typography, TextField, IconButton, Box } from "@mui/material";
//* icons
import { MenuOutlined } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import corebizLogo from "../../assets/logo-corebiz-black.svg";
//* context
import { UserContext } from "../../context/UserContext";
//* styles
import { HeaderStyles as styles } from "./header.styles";

export const Header = () => {
  const { cart } = useContext(UserContext);

  return (
    <Grid container direction="row" sx={styles.gridContainer}>
      {/*//?  Mobile Menu  */}
      <IconButton color="inherit" edge="start" sx={styles.iconButton}>
        <MenuOutlined />
      </IconButton>

      {/*//?  Logo  */}
      <Box
        component="img"
        sx={styles.boxLogo}
        src={corebizLogo}
        alt="Corebiz"
      />

      {/*//?  Searcher  */}
      <TextField
        label="¿Qué estás buscando?"
        sx={styles.textField}
        variant="standard"
        InputLabelProps={{
          style: {
            font: "normal normal normal 13px/27px Nunito",
            color: "#7A7A7A",
          },
        }}
        InputProps={{
          endAdornment: (
            <IconButton title="Buscar" aria-label="Buscar">
              <SearchIcon fontSize="medium" style={styles.searchIcon} />
            </IconButton>
          ),
        }}
      />

      {/*//?  My account  */}
      <Grid sx={styles.gridIcon}>
        <PersonOutlineOutlinedIcon sx={styles.icon} fontSize="medium" />
        <Typography sx={styles.typoAccount}>Mi Cuenta</Typography>
      </Grid>

      {/*//?  Shopping Cart  */}
      <Grid sx={styles.gridIcon}>
        <ShoppingCartIcon sx={styles.icon} fontSize="medium" />
        <Typography sx={styles.typoCart}>{cart}</Typography>
      </Grid>
    </Grid>
  );
};
