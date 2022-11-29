import { useStyle } from "./CoinDetail.style";
import { Avatar, Box, Skeleton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { NotFoundElement } from "../index";
import parse from "html-react-parser";
const CoinDetail = ({ currencyName, currencySymbol }) => {
  // get css style
  const classes = useStyle();
  // get coin detail
  const { coinDetail, status } = useSelector(
    (store) => store.single_coin_detail_slice
  );
  return (
    <>
      {status === "success" ? (
        <Box className={classes.single_coin_detail_wrraper}>
          <Avatar src={coinDetail?.image?.large} className={"coin_avatar"} />
          <Typography className={"coin_name"}>{coinDetail.name}</Typography>
          <Typography className={"coin_info"} variant={"subtitle1"}>
            {parse(coinDetail?.description?.en.split(". ")[0])}
          </Typography>
          <Typography className={"coin_price"}>
            قیمت لحظه ای :
            {`
        ${Intl.NumberFormat().format(
          coinDetail?.market_data?.current_price[currencyName]
        )}
              ${currencySymbol} 
              `}
          </Typography>
          <Typography className={"coin_market_cap"}>
            ارزش بازار :
            {`
              ${Intl.NumberFormat().format(
                coinDetail?.market_data?.market_cap[currencyName]
              )}
                 ${currencySymbol} 
              `}
          </Typography>
        </Box>
      ) : status === "rejected" ? (
        <NotFoundElement />
      ) : (
        <Box className={classes.single_coin_detail_wrraper}>
          <Skeleton
            animation={"wave"}
            variant="circular"
            className={"coin_avatar"}
          />
          <Skeleton
            animation={"wave"}
            variant="text"
            width={"30%"}
            className={"coin_name"}
          />
          <Skeleton
            animation={"wave"}
            variant="text"
            width={"80%"}
            className={"coin_info"}
          />
          <Skeleton
            animation={"wave"}
            variant="text"
            width={"80%"}
            className={"coin_info"}
          />
          <Skeleton
            animation={"wave"}
            variant="text"
            width={"80%"}
            className={"coin_info"}
          />
          <Skeleton
            animation={"wave"}
            variant="text"
            width={"50%"}
            className={"coin_price"}
          />
          <Skeleton animation={"wave"} variant="text" width={"50%"} />
        </Box>
      )}
    </>
  );
};

export default CoinDetail;
