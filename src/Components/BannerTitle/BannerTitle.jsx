import { useStyle } from "./BannerTitle.style";
import { Box, Typography } from "@mui/material";

const BannerTitle = () => {
  // get css style
  const classes = useStyle();
  return (
    <Box className={classes.banner_title}>
      <Typography variant={"h4"}>کوین چک</Typography>
      <Typography variant={"subtitle1"}>
        تمام اطلاعات مربوط به ارز رمزنگاری مورد علاقه خود را دریافت کنید
      </Typography>
    </Box>
  );
};

export default BannerTitle;
