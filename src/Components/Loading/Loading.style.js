import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  loading_wrraper: {
    padding: [darkTheme.spacing(3, 0, 1)],
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "50%",
    "& span": {
      color: [darkTheme.palette.warning.dark],
    },
    "& p": {
      color: [darkTheme.palette.text.disabled],
    },
  },
});
