import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { popular_coin_url } from "../../Api/apiList";

export const popularCoinAction = createAsyncThunk(
  "/fetch/popular_coins",
  async (currency) => {
    let res = await axios({
      method: "get",
      url: popular_coin_url(currency),
    });
    return res.data;
  }
);

const popular_coin_slice = createSlice({
  name: "popular_coins",
  initialState: {
    popularCoinList: [],
    status: "",
  },
  extraReducers: {
    [popularCoinAction.pending]: (state) => {
      state.status = "pending";
    },
    [popularCoinAction.fulfilled]: (state, action) => {
      state.status = "success";
      state.popularCoinList = action.payload;
    },
    [popularCoinAction.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});
export default popular_coin_slice.reducer;
