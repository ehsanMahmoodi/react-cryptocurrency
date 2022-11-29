import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  inner_slider_item: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& .coin_avatar": {
      width: [darkTheme.spacing(3.75)],
      height: [darkTheme.spacing(3.75)],
    },
    "& .coin_detail": {
      textTransform: "uppercase",
      width: "90%",
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-evenly",
      alignItems: "center",
      "& p": {
        color: [darkTheme.palette.text.primary],
      },
      "& p:nth-child(2)": {
        direction: "ltr",
        color: ({ perfit }) =>
          perfit > 0
            ? darkTheme.palette.success.main
            : darkTheme.palette.error.main,
      },
    },
    "& .coin_price": {
      color: [darkTheme.palette.text.primary],
    },
    [darkTheme.breakpoints.down("md")]: {
      "& .coin_avatar": {
        marginBottom: darkTheme.spacing(0.62),
      },
      "& .coin_detail": {
        width: "70%",
      },
    },
    [darkTheme.breakpoints.down("sm")]: {
      "& .coin_detail": {
        flexDirection: "column",
        margin: [darkTheme.spacing(0.37, 0, 0)],
        "& p": {
          fontSize: [darkTheme.spacing(0.93)],
        },
      },
      "& .coin_price": {
        fontSize: [darkTheme.spacing(0.93)],
      },
    },
  },
});
