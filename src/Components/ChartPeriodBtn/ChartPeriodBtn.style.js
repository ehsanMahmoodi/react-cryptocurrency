import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  chart_period_btn: {
    backgroundColor: ({ selected }) =>
      selected ? [darkTheme.palette.warning.main] : "transparent",
    border: `${darkTheme.spacing(0.06)} solid ${
      darkTheme.palette.warning.main
    }`,
    outline: "none",
    color: ({ selected }) =>
      !selected
        ? [darkTheme.palette.text.primary]
        : [darkTheme.palette.text.secondary],
    width: [darkTheme.spacing(12)],
    padding: [darkTheme.spacing(0.5, 2.18)],
    margin: [darkTheme.spacing(0.5, 0.06)],
    borderRadius: [darkTheme.spacing(0.25)],
    cursor: "pointer",
    [darkTheme.breakpoints.down("sm")]: {
      width: [darkTheme.spacing(9)],
      padding: [darkTheme.spacing(0.31)],
    },
  },
});
