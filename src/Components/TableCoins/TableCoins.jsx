import {
  Avatar,
  Box,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allCoinDetailsAction } from "../../Redux/slices/all_coin_details_slice";
import Rtl from "../../Theme/Rtl";
import { useStyle } from "./TableCoins.style";
import { darkTheme } from "../../Theme";
import { useNavigate } from "react-router-dom";
import { Loading, NotFoundElement } from "../index";
import { getInputValueAction } from "../../Redux/slices/text_field_value_slice";

const TableCoins = () => {
  // get css style
  const classes = useStyle();
  // handel to show coins in table
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const all_coin_details_slice = useSelector(
    (store) => store.all_coin_details_slice
  );
  const { coinList, status } = all_coin_details_slice;
  const change_currency_type_slice = useSelector(
    (store) => store.change_currency_type_slice
  );
  const { currencyName, currencySymbol } = change_currency_type_slice;
  useEffect(() => {
    dispatch(allCoinDetailsAction(currencyName));
  }, [currencyName]);

  // handel to show search coins in table
  const text_field_value_slice = useSelector(
    (store) => store.text_field_value_slice
  );
  const { inputValue } = text_field_value_slice;
  const searchCoinsHandler = () => {
    let coinFiltered = coinList.filter((coin) => {
      return (coin.symbol || coin.id || coin.name).includes(inputValue);
    });
    return coinFiltered;
  };
  // handel to navigate coinPage
  const handelToNavigateCoinPage = (coinId) => {
    navigate(`coins/${coinId}`);
    dispatch(getInputValueAction(""));
  };
  // handel to pagination
  const [page, setPage] = useState(1);
  const paginationHandler = (e, value) => {
    setPage(value);
    window.scroll(0, 400);
  };
  return (
    <Rtl>
      {status === "success" ? (
        <>
          <TableContainer className={classes.table_container}>
            <Table>
              <TableHead className={"table_head"}>
                <TableRow>
                  {["ارز", " قیمت", "تغیرات 24 ساعته", "ارزش بازار"].map(
                    (headItem) => {
                      return (
                        <TableCell key={headItem}>
                          <Typography>{headItem}</Typography>
                        </TableCell>
                      );
                    }
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {searchCoinsHandler()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((coinItem) => {
                    const perfit =
                      coinItem?.price_change_percentage_24h_in_currency;
                    return (
                      <TableRow
                        className={"table_row"}
                        onClick={() => handelToNavigateCoinPage(coinItem.id)}
                        key={coinItem.id}
                      >
                        <TableCell className={"coin_info"}>
                          <Avatar
                            src={coinItem?.image}
                            className={"coin_avatar"}
                          />
                          <Box className={"coin_detail text_center"}>
                            <Typography>{coinItem?.symbol}</Typography>
                            <Typography>{coinItem?.name}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell className={"coin_current_price text_center"}>
                          <Typography>
                            {`${Intl.NumberFormat().format(
                              coinItem?.current_price
                            )} ${currencySymbol}`}
                          </Typography>
                        </TableCell>
                        <TableCell className={"coin_perfit text_center"}>
                          <Typography
                            sx={{
                              color:
                                perfit > 0
                                  ? [darkTheme.palette.success.main]
                                  : [darkTheme.palette.error.dark],
                            }}
                          >
                            {perfit > 0
                              ? `+${perfit.toFixed(2)}`
                              : perfit.toFixed(2)}
                            %
                          </Typography>
                        </TableCell>
                        <TableCell className={"coin_market_cap text_center"}>
                          <Typography>
                            {" "}
                            {`${Intl.NumberFormat().format(
                              coinItem?.market_cap
                            )} ${currencySymbol}`}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            className={classes.pagination}
            variant="outlined"
            shape="rounded"
            boundaryCount={2}
            count={Number(searchCoinsHandler()?.length / 10)}
            onChange={paginationHandler}
          />
        </>
      ) : status === "pending" ? (
        <Loading />
      ) : (
        <NotFoundElement />
      )}
    </Rtl>
  );
};

export default TableCoins;
