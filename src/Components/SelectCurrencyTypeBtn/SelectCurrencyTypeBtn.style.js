import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  select_btn_wrraper: {
    backgroundColor: "transparent",
    color: [darkTheme.palette.warning.main + " !important"],
    width: [darkTheme.spacing(5.5)],
    height: [darkTheme.spacing(2.5)],
    border: `${darkTheme.spacing(0.06)} solid ${
      darkTheme.palette.warning.dark
    }`,
    [darkTheme.breakpoints.down("sm")]: {
      height: [darkTheme.spacing(2)],
      width: "auto",
      fontSize: `${darkTheme.spacing(0.93)} !important`,
    },
    "& svg": {
      fill: darkTheme.palette.warning.main,
    },
    "& fieldset": {
      borderColor: "transparent !important",
    },
  },
});
