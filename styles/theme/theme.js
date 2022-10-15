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
      main: "#fff",
    },
    background: {
      default: "#0008",
      paper: "#fff",
      over: "#dde2ed",
    },
    neutral: {
      main: "#fff",
      contrastText: "#000",
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
          // borderRadius: "50px",
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
