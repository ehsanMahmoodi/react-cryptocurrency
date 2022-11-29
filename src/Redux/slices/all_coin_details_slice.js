import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { coin_list_url } from "../../Api/apiList";
export const allCoinDetailsAction = createAsyncThunk(
  "/fetch/all-conis-detail",
  async (currency) => {
    let res = await axios({
      method: "get",
      url: coin_list_url(currency),
    });
    return res.data;
  }
);
const all_coin_details_slice = createSlice({
  name: "all coins detail",
  initialState: {
    coinList: [],
    status: "",
  },
  extraReducers: {
    [allCoinDetailsAction.pending]: (state) => {
      state.status = "pending";
    },
    [allCoinDetailsAction.fulfilled]: (state, action) => {
      state.coinList = action.payload;
      state.status = "success";
    },
    [allCoinDetailsAction.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});
export default all_coin_details_slice.reducer;
