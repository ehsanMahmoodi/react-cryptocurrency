import { Box, Typography } from "@mui/material";
import { useStyle } from "./NotFoundElement.style";

const NotFoundElement = () => {
  // get css style
  const classes = useStyle();
  return (
    <Box className={classes.not_found_element_wrraper}>
      <Typography> مشکلی پیش آمده!</Typography>
      <Typography>لطفا صفحه را رفرش کنید.</Typography>
    </Box>
  );
};

export default NotFoundElement;
