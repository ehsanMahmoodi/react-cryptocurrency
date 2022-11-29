import { createSlice } from "@reduxjs/toolkit";

const change_currency_type_slice = createSlice({
  name: "change_currency_type",
  initialState: {
    currencyName: "usd",
    currencySymbol: "$",
  },
  reducers: {
    changeCurrencyTypeAction: (state, action) => {
      switch (action.payload) {
        case "eur":
          state.currencyName = action.payload;
          state.currencySymbol = "€";
          break;
        case "rub":
          state.currencyName = action.payload;
          state.currencySymbol = "₽";
          break;
        case "cny":
          state.currencyName = action.payload;
          state.currencySymbol = "¥";
          break;
        default:
          state.currencyName = "usd";
          state.currencySymbol = "$";
          break;
      }
    },
  },
});
export const { changeCurrencyTypeAction } = change_currency_type_slice.actions;
export default change_currency_type_slice.reducer;
