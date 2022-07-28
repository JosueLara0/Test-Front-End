//* libraries
import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#000000',
            gray: '#7A7A7A',
            blackBD: '#BDBDBD',
            blackC0: '#C0C0C0',
            grayE6: '#E6E8EA',
            black33: '#333333',
            black58: '#585858',
            grayF2: '#F2F2F2',
        },
        error: {
            main: '#F8475F'
        }
    }
});
