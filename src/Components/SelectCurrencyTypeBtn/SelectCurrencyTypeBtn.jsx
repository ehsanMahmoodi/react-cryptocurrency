import "./selectBtn.css";
import { MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrencyTypeAction } from "../../Redux/slices/change_currency_type_slice";
import { useStyle } from "./SelectCurrencyTypeBtn.style";
const SelectCurrencyTypeBtn = () => {
  // get css style
  const classes = useStyle();
  //  handel to change currency type
  const changeCurrencyType = useSelector(
    (store) => store.change_currency_type_slice
  );
  const { currencyName } = changeCurrencyType;
  const dispatch = useDispatch();
  const handelChangeCurrencyType = (e) => {
    const {
      target: { value },
    } = e;
    dispatch(changeCurrencyTypeAction(value));
  };
  return (
    <Select
      className={classes.select_btn_wrraper}
      value={currencyName}
      onChange={(e) => handelChangeCurrencyType(e)}
    >
      <MenuItem value={"usd"}>USD</MenuItem>
      <MenuItem value={"eur"}>EUR</MenuItem>
      <MenuItem value={"rub"}>RUB</MenuItem>
      <MenuItem value={"cny"}>CNY</MenuItem>
    </Select>
  );
};
export default SelectCurrencyTypeBtn;
