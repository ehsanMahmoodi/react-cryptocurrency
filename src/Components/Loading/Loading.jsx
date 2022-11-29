import { useStyle } from "./Loading.style";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  // get css style
  const classes = useStyle();
  return (
    <Box className={classes.loading_wrraper}>
      <CircularProgress />
      <Typography>دریافت اطلاعات . . .</Typography>
    </Box>
  );
};

export default Loading;
