import { Box } from "@mui/material";
import { useStyle } from "./Banner.style";
import {
  BannerTitle,
  Loading,
  NotFoundElement,
  ParticleBackground,
  Slider,
} from "../index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { popularCoinAction } from "../../Redux/slices/popular_coin_slice";

const Banner = () => {
  // get css style
  const classes = useStyle();
  // handel to show coins in slider
  const dispatch = useDispatch();
  const popularCoins = useSelector((store) => store.popular_coin_slice);
  const changeCurrencyType = useSelector(
    (store) => store.change_currency_type_slice
  );
  const { currencyName, currencySymbol } = changeCurrencyType;
  useEffect(() => {
    dispatch(popularCoinAction(currencyName));
  }, [currencyName]);
  const { popularCoinList, status } = popularCoins;
  return (
    <Box className={classes.banner_wrraper}>
      <ParticleBackground />
      <BannerTitle />
      {status === "success" ? (
        <Slider
          popularCoinList={popularCoinList}
          currencyName={currencyName}
          currencySymbol={currencySymbol}
        />
      ) : status === "pending" ? (
        <Loading />
      ) : (
        <NotFoundElement />
      )}
    </Box>
  );
};

export default Banner;
