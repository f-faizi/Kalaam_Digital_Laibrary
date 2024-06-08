import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#dc004e", // Pink
    },
    background: {
      default: "#ffffff", // White background
      paper: "#f5f5f5", // Light grey paper background
    },
    text: {
      primary: "#000000", // Black text
      secondary: "#555555", // Dark grey text
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Light blue
    },
    secondary: {
      main: "#f48fb1", // Light pink
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1e1e1e", // Darker grey paper background
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#bbbbbb", // Light grey text
    },
  },
});

export { lightTheme, darkTheme };
