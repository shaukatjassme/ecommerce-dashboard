// pages/_app.tsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../lib/theme';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';




const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Component {...pageProps} />
        </LocalizationProvider>
    </ThemeProvider>
    );
};

export default MyApp;
