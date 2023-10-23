import { colors } from "@mui/material";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.green[800],
      light: colors.green[800],
      dark: colors.green[800],
      contrastText: '#ffffff'  
    }
  }
});

export default theme;