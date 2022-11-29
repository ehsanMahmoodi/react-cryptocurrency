import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    warning: {
      main: "#ffc200",
      light: "#e5c86d38",
    },
    text: {
      secondary: "#222121",
      primary: "#e9e9e9",
    },
    primary: {
      main: "#212130",
      light: "#33354a99",
      dark: "#1c1b29",
    },
  },
  spacing: (factor) => `${factor}rem`,
  shape: {
    borderRadius: "0.62rem",
  },
  typography: {
    fontFamily: "vazir",
  },
});
export default darkTheme;
