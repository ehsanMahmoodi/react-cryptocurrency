import { createSlice } from "@reduxjs/toolkit";

const text_field_value_slice = createSlice({
  name: "text field value",
  initialState: {
    inputValue: "",
  },
  reducers: {
    getInputValueAction: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});
export const { getInputValueAction } = text_field_value_slice.actions;
export default text_field_value_slice.reducer;
