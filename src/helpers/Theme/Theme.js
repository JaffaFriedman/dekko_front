import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#33abb8',
      main: '#0097a7',
      dark: '#006974',
      contrastText: '#fff'
    },
    secondary: {
      light: '#a6d4fa',
      main: '#3f51b5',
      dark: '#648dae',
      contrastText: '#000'
    }
  }
})

export default theme
