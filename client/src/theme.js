import { createTheme } from '@mui/material/styles'
import { orange, teal, brown, grey } from '@mui/material/colors'

//https://material-ui.com/customization/default-theme/#default-theme
//https://material-ui.com/customization/color/#color
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: teal[900],
    },
    secondary: {
      main: orange[400],
    },
    text: {
      primary: brown[900],
    },
    background: {
      default: '#f8f4ef',
      paper: '#f8f4ef',
    },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '5em',
      '@media (max-width:600px)': {
        fontSize: '3em',
      },
      fontFamily: '"DM Sans", sans-serif',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3.75em',
      '@media (max-width:600px)': {
        fontSize: '2.5em',
      },
      fontFamily: '"DM Sans", sans-serif',
    },
    h3: {
      fontWeight: 700,
      fontSize: '3em',
      '@media (max-width:600px)': {
        fontSize: '2em',
      },
      fontFamily: '"DM Sans", sans-serif',
    },
    h4: {
      fontWeight: 700,
      fontFamily: '"DM Sans", sans-serif',
    },
    h5: {
      fontWeight: 700,
      fontFamily: '"DM Sans", sans-serif',
    },
    h6: {
      fontWeight: 700,
      fontSize: '1.25em',
      fontFamily: '"DM Sans", sans-serif',
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.25em',
      color: grey[700],
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '.9em',
      color: grey[700],
    },
  },
})

export default theme