import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { singleCoinDetailAction } from "../../Redux/slices/single_coin_detail_slice";
import { singleCoinChartAction } from "../../Redux/slices/single_coin_chart_slice";
import { Container, Grid } from "@mui/material";
import { CoinChart, CoinDetail } from "../../Components";
import { useStyle } from "./SingleCoinPage.style";

const SingleCoinPage = () => {
  // get css style
  const classes = useStyle();
  const { coinId } = useParams();
  // get detail of coin
  const dispatch = useDispatch();
  const { currencyName, currencySymbol } = useSelector(
    (store) => store.change_currency_type_slice
  );
  const [days, setDays] = useState(1);
  useEffect(() => {
    dispatch(singleCoinDetailAction(coinId));
    dispatch(singleCoinChartAction({ coinId, currencyName, days }));
  }, [coinId, currencyName, days]);
  return (
    <Container maxWidth={false} className={classes.single_coin_wrraper}>
      <Grid container className={"row"} spacing={2}>
        <Grid item xs={12} md={3}>
          <CoinDetail
            currencyName={currencyName}
            currencySymbol={currencySymbol}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <CoinChart
            days={days}
            setDays={setDays}
            currencyName={currencyName}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleCoinPage;
