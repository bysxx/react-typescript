import { ActionType, createReducer, createAction } from 'typesafe-actions';

export const setNickname = createAction('info/SET_NICKNAME')<string>();
export const resetNickname = createAction('info/RESET_NICKNAME')();

const actions = { setNickname, resetNickname };
type ValueAction = ActionType<typeof actions>;

type ValueType = {
  nickname: string;
};

const initialState: ValueType = {
  nickname: '',
};

const infoReducer = createReducer<ValueType, ValueAction>(initialState)
  .handleAction(setNickname, (state, action) => ({
    nickname: action.payload,
  }))
  .handleAction(resetNickname, (state) => ({
    nickname: '',
  }));

export default infoReducer;
