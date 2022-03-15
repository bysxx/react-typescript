import { combineReducers } from "redux";
import valueReducer from "./valueReducer";

const rootReducer = combineReducers({
  valueReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
