import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  banner_title: {
    color: [darkTheme.palette.text.primary],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: [darkTheme.spacing(2)],
    gap: [darkTheme.spacing(1)],
    [darkTheme.breakpoints.down("sm")]: {
      "& h4": {
        fontSize: [darkTheme.spacing(1.5)],
      },
      "& h6": {
        fontWeight: [darkTheme.typography.fontWeightMedium],
        fontSize: [darkTheme.spacing(0.875)],
        lineHeight: [darkTheme.spacing(1.56)],
        letterSpacing: [darkTheme.spacing(0.003)],
      },
    },
  },
});
