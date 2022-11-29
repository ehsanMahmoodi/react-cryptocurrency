import { makeStyles } from "@mui/styles";
import { darkTheme } from "../../Theme";

export const useStyle = makeStyles({
  table_container: {
    "& table": {
      borderCollapse: "unset",
      "& .table_head": {
        backgroundColor: [darkTheme.palette.warning.main],
        "& th": {
          textAlign: "center",
          [darkTheme.breakpoints.down("md")]: {
            padding: [darkTheme.spacing(0.06)],
          },
        },
        "& p": {
          fontWeight: 600,
        },
      },
      "& .table_row": {
        cursor: "pointer",
        "&:hover": {
          backgroundColor: [darkTheme.palette.primary.light],
        },
        "& .coin_info": {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          "& .coin_avatar": {
            width: [darkTheme.spacing(3.12)],
            height: [darkTheme.spacing(3.12)],
          },
          "& .coin_detail": {
            marginRight: [darkTheme.spacing(1)],
            "& p:nth-child(1)": {
              textTransform: "uppercase",
              fontSize: "18px",
            },
            "& p:nth-child(2)": {
              color: darkTheme.palette.grey[700],
              fontSize: "15px",
            },
          },
        },
        "& .coin_perfit": {
          direction: "ltr",
        },
      },
    },

    "& .text_center": {
      color: "#fff",
      textAlign: "center",
      [darkTheme.breakpoints.down("md")]: {
        "& p": {
          fontSize: [darkTheme.spacing(0.9) + " !important"],
        },
      },
    },
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: [darkTheme.spacing(1, 0)],
    "& button,div": {
      borderColor: [darkTheme.palette.warning.light],
      color: [darkTheme.palette.text.primary],
      "&:not(div):hover": {
        backgroundColor: [darkTheme.palette.warning.main + " !important"],
        color: [darkTheme.palette.text.secondary],
      },
      "&.Mui-selected": {
        backgroundColor: [darkTheme.palette.warning.main],
        color: [darkTheme.palette.text.secondary],
      },
    },
  },
});
