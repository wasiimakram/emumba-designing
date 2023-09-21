import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF', // Customize the primary color
        },
        secondary: {
            main: '#ff6f61', // Customize the secondary color
        },
        bw: {
            // Customize your black and white colors here
            white: '#FFFFFF',
            background: '#FAFAFA',
            line: '#EFEFEF',
            placeHolder: '#C4C4C4',
            disable: '#AAAAAA',
            bodyText: '#666666',
            subtitle: '#444444',
            title: '#222222',
            black: '#000000',
        },
        rating: {
            // Customize your rating colors here
            lightest: '#FF0000',
            lighter: '#FF9900',
            light: '#FFFF00',
            main: '#33CC33',
            dark: '#00CCFF',
            darker: '#6600FF',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif', // Customize the default font
    },
});

export default theme;