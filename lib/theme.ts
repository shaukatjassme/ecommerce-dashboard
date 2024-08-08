import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#fdc807', // Example primary color
        },
        secondary: {
            main: '#dc004e', // Example secondary color
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
       
        h6: {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: '2.5rem',
            textDecoration: 'none',
        } // Example font family
    },
  
});

export default theme;
