import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  single_coin_detail_wrraper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: [darkTheme.palette.text.primary],
    "& .coin_avatar": {
      width: [darkTheme.spacing(6.5)],
      height: [darkTheme.spacing(6.5)],
    },
    "& .coin_name": {
      margin: [darkTheme.spacing(0.5, 0)],
      fontSize: [darkTheme.spacing(1.56)],
    },
    "& .coin_info": {
      direction: "ltr",
      textAlign: "center",
      "& a": {
        color: [darkTheme.palette.warning.main],
      },
    },
    "& .coin_price": {
      marginTop: [darkTheme.spacing(1)],
    },
    [darkTheme.breakpoints.down("sm")]: {
      "& .coin_avatar": {
        width: [darkTheme.spacing(4.5)],
        height: [darkTheme.spacing(4.5)],
      },
      "& .coin_name": {
        margin: [darkTheme.spacing(0.5, 0)],
        fontSize: [darkTheme.spacing(1.25)],
      },
      "& .coin_info": {
        fontSize: [darkTheme.spacing(0.9)],
      },
      "& .coin_price , .coin_market_cap": {
        fontSize: [darkTheme.spacing(0.96)],
      },
    },
  },
});
