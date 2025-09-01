import { createStore, combineReducers } from "redux";
import { counterReducer } from "./feature/counter/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;