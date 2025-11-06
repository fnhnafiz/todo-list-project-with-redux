import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, actions) => {
      state.counter = state.counter + actions.payload;
    },
    decrement: (state, actions) => {
      state.counter = state.counter - actions.payload;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
