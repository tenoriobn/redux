import { createSlice } from "@reduxjs/toolkit";
import type { CounterState } from "./counter.type";

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;