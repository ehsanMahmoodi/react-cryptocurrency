import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  header_wrraper: {
    backgroundColor: [darkTheme.palette.primary.dark],
    height: [darkTheme.spacing(3.8)],
    color: [darkTheme.palette.warning.main],
    [darkTheme.breakpoints.down("sm")]: {
      height: [darkTheme.spacing(2.8)],
    },
  },
  row: {
    height: "100%",
    padding: [darkTheme.spacing(0, 1.5)],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  site_logo: {
    "& h6": {
      cursor: "pointer",
      display: "inline-block",
    },
    [darkTheme.breakpoints.down("sm")]: {
      "& h6": {
        fontSize: darkTheme.spacing(1),
      },
    },
  },
  currency_type_wrraper: {
    textAlign: "end",
  },
});
