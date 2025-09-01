import type { CounterState } from "./counter.type";
import { INCREMENT, DECREMENT, RESET } from "./counterActionTypes";

const initialState: CounterState = {
  value: 0,
}

export function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    
    case DECREMENT:
      return { ...state, value: state.value > 0 ? state.value -= 1 : 0, };
    
    case RESET:
      return { ...state, value: 0 };

    default:
      return state;
  }
}