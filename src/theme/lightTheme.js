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
            grayBD: '#BDBDBD',
            grayC0: '#C0C0C0',
            grayE6: '#E6E8EA',
            grayF2: '#F2F2F2',
            black33: '#333333',
            black58: '#585858',
        },
        error: {
            main: '#F8475F'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 490,
            md: 640,
            lg: 1024,
            xl: 1200,
        },
    },
});
