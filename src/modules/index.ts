import { combineReducers } from 'redux';
import valueReducer from './valueReducer';
import infoReducer from './infoReducer';

const rootReducer = combineReducers({
  valueReducer,
  infoReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
