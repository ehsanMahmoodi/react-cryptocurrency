import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  search_coin_wraper: {
    padding: [darkTheme.spacing(1.5, 0)],
    "& .section_title": {
      textAlign: "center",
      color: [darkTheme.palette.text.primary],
      marginBottom: [darkTheme.spacing(1)],
    },
    "& .form_control": {
      "& .inner_coin_item": {
        width: "100%",
        "& input": {
          direction: "ltr",
          color: [darkTheme.palette.grey[400]],
        },
        "& label": {
          color: [darkTheme.palette.grey[700]],
          fontSize: [darkTheme.spacing(0.87) + " !important"],
          "&.Mui-focused": {
            fontSize: [darkTheme.spacing(1) + " !important"],
          },
        },
        "& fieldset": {
          borderColor: [darkTheme.palette.warning.main + " !important"],
          borderWidth: [darkTheme.spacing(0.06) + " !important"],
        },
      },
    },
  },
});
