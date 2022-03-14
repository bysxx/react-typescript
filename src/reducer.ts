import { combineReducers } from "redux";

import addReducer from "./reducers/addReducer";

const rootReducer = combineReducers({
  value: addReducer,
});

export default rootReducer;
