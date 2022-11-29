import { configureStore } from "@reduxjs/toolkit";
import {
  change_currency_type_slice,
  popular_coin_slice,
  all_coin_details_slice,
  text_field_value_slice,
  single_coin_detail_slice,
  single_coin_chart_slice,
} from "./slices/index";
const store = configureStore({
  reducer: {
    change_currency_type_slice,
    popular_coin_slice,
    all_coin_details_slice,
    text_field_value_slice,
    single_coin_detail_slice,
    single_coin_chart_slice,
  },
});
export default store;
