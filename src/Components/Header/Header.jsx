import { Box, Grid, Typography } from "@mui/material";
import { useStyle } from "./Header.style";
import { SelectCurrencyTypeBtn } from "../index";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // get css style
  const classes = useStyle();
  const navigate = useNavigate();
  return (
    <Box className={classes.header_wrraper}>
      <Grid container className={classes.row}>
        <Grid item xs={6} className={classes.site_logo}>
          <Typography variant={"h6"} onClick={() => navigate("/")}>
            کوین چک
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.currency_type_wrraper}>
          <SelectCurrencyTypeBtn />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
