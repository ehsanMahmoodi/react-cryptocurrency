import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  not_found_element_wrraper: {
    padding: [darkTheme.spacing(3, 0, 1)],
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "30%",
    "& p": {
      color: [darkTheme.palette.warning.main],
    },
    [darkTheme.breakpoints.down("sm")]: {
      "& p": {
        fontSize: [darkTheme.spacing(0.9)],
      },
    },
  },
});
