import { createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: [
      "IRYekan",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      light: "",
      main: "#fff",
      dark: "#6EA0FF",
    },
    secondary: {
      main: "#A1B3D2",
    },
    background: {
      default: "#E6EEFF",
      paper: "#fff",
      over: "#dde2ed",
    },
    neutral: {
      main: "#2662FF",
      contrastText: "#fff",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        margin: "dense",
        fullWidth: true,
        size: "small",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: "dense",
        fullWidth: true,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
        color: "neutral",
        borderRadius: "8px",
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "unset",
        },
      },
    },
  },
});

export default theme;
