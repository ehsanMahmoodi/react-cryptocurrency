import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  single_coin_wrraper: {
    "& .row": {
      [darkTheme.breakpoints.up("md")]: {
        padding: darkTheme.spacing(4, 0),
      },
      [darkTheme.breakpoints.down("md")]: {
        padding: darkTheme.spacing(1, 0),
      },
      "& > div:nth-child(2)": {
        [darkTheme.breakpoints.up("md")]: {
          borderRight: `${darkTheme.spacing(0.15)} solid ${
            darkTheme.palette.primary.light
          }`,
        },
      },
    },
  },
});
