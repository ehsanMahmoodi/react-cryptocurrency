import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { single_coin_detail_url } from "../../Api/apiList";

export const singleCoinDetailAction = createAsyncThunk(
  "/fetch/single_coin_detail",
  async (id) => {
    let res = await axios({
      method: "get",
      url: single_coin_detail_url(id),
    });
    return res.data;
  }
);

const single_coin_detail_slice = createSlice({
  name: "single coin detail",
  initialState: {
    coinDetail: [],
    status: "",
  },
  extraReducers: {
    [singleCoinDetailAction.pending]: (state) => {
      state.status = "pending";
    },
    [singleCoinDetailAction.fulfilled]: (state, action) => {
      state.status = "success";
      state.coinDetail = action.payload;
    },
    [singleCoinDetailAction.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});
export default single_coin_detail_slice.reducer;
