import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  main_content: {
    backgroundColor: [darkTheme.palette.primary.main],
    "& .row > div": {
      margin: [darkTheme.spacing(0) + " auto"],
    },
  },
});
