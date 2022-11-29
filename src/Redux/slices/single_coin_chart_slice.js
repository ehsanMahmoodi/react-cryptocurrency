import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { coin_chart_detail_url } from "../../Api/apiList";

export const singleCoinChartAction = createAsyncThunk(
  "/fetch/single_coin_chart_slice",
  async (queryParam) => {
    let res = await axios({
      method: "get",
      url: coin_chart_detail_url(
        queryParam.coinId,
        queryParam.currencyName,
        queryParam.days
      ),
    });
    return res.data.prices;
  }
);

const single_coin_chart_slice = createSlice({
  name: "single coin chart",
  initialState: {
    coinChartDetail: [],
    status: "",
  },
  extraReducers: {
    [singleCoinChartAction.pending]: (state) => {
      state.status = "pending";
    },
    [singleCoinChartAction.fulfilled]: (state, action) => {
      state.status = "success";
      state.coinChartDetail = action.payload;
    },
    [singleCoinChartAction.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});
export default single_coin_chart_slice.reducer;
