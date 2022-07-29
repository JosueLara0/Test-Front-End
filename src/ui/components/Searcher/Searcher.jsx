//* libraries
import { TextField, IconButton } from "@mui/material";
//* styles
import { searcherStyles as styles } from "./searcher.styles";
//* icons
import SearchIcon from "@mui/icons-material/Search";

export const Searcher = () => {
  return (
    <TextField
      label="¿Qué estás buscando?"
      variant="standard"
      sx={styles.textField}
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
  );
};
