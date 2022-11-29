import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  banner_wrraper: {
    backgroundColor: [darkTheme.palette.primary.dark],
    position: "relative",
    padding: [darkTheme.spacing(2)],
    height: [darkTheme.spacing(21)],
  },
});
