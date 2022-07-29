//* libraries
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
//* styles
import { inputStyles as styles } from "./input.styles";

export const Input = ({ label, type, name, onChange }) => {
  return (
    <TextField
      label={label}
      type={type}
      name={name}
      sx={styles.textField}
      InputLabelProps={{
        style: {
          font: "normal normal bold 12px/14px Lato, sans serif",
          letterSpacing: "0px",
          opacity: 1,
          color: "#585858",
        },
      }}
      onChange={onChange}
    />
  );
};

//? Props validations
Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
