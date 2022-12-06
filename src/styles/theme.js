import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fc8644",
    },
    secondary: {
      main: "#51fafc",
    },
    surface: {
      white: "#FFFFFF",
      black: "#2A2A2A",
      grey: "#4F4F4F",
      success: "#63B662",
      error: "#EC4B4B",
    },
    background: {
      default: "#393939",
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "48.83px",
    },
    h2: {
      fontSize: "39.06px",
    },
    h3: {
      fontSize: "31.25px",
    },
    h4: {
      fontSize: "25px",
    },
    h5: {
      fontSize: "22px",
    },
    h6: {
      fontSize: "18px",
    },
    body1: {
      fontSize: "16px",
    },
    bodyXSmall: {
      fontSize: "13px",
    },
    bodyXXSmall: {
      fontSize: "10px",
    },
  },
});

export default theme;
