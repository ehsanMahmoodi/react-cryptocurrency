import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  chart_cointainer: {
    height: "70vh",
    padding: [darkTheme.spacing(0, 1)],
    [darkTheme.breakpoints.down("md")]: {
      height: "60vh",
    },
  },
  chart_period_btn_wrraper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginTop: [darkTheme.spacing(1)],
  },
});
