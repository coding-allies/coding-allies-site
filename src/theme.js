import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#eeb2eb",
      main: "#af41b5",
      dark: "#331a38",
    },
    secondary: {
      main: "#db67e4"
    },
    success: {
        main: "#90ae49"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  }
});

export default theme;