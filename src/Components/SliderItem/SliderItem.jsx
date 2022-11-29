import { SplideSlide } from "@splidejs/react-splide";
import { Avatar, Box, Skeleton, Typography } from "@mui/material";
import { useStyle } from "./SliderItem.style";
const SliderItem = ({ coin, currencySymbol, loading }) => {
  const perfit = coin.price_change_percentage_24h;
  //  get css style
  const classes = useStyle({ perfit });
  return (
    <SplideSlide className={classes.inner_slider_item}>
      {loading !== true ? (
        <>
          <Avatar src={coin.image} className={"coin_avatar"} />
          <Box className={"coin_detail"}>
            <Typography>{coin.symbol}</Typography>
            <Typography>
              {coin.price_change_percentage_24h > 0
                ? `+${perfit.toFixed(2)}`
                : perfit.toFixed(2)}
              %
            </Typography>
          </Box>
          <Typography className={"coin_price"}>
            {`${Intl.NumberFormat().format(
              coin.current_price
            )} ${currencySymbol}`}
          </Typography>
        </>
      ) : (
        <>
          <Skeleton
            animation="wave"
            className={"coin_avatar"}
            variant="circular"
            width={60}
            height={60}
          />
          <Box className={"coin_detail"}>
            <Skeleton animation="wave" variant="text" width={"40%"} />
            <Skeleton animation="wave" variant="text" width={"40%"} />
          </Box>
          <Skeleton
            animation="wave"
            className={"coin_price"}
            variant="text"
            width={"50%"}
          />
        </>
      )}
    </SplideSlide>
  );
};

export default SliderItem;
