//* libraries
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
//* themes
import { lightTheme } from "./lightTheme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
