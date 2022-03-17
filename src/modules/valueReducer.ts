import { ActionType, createReducer, createAction } from 'typesafe-actions';

export const increaseBy = createAction('value/INCREASE_BY')<number>();
export const decreaseBy = createAction('value/DECREASE_BY')<number>();

const actions = { increaseBy, decreaseBy };
type ValueAction = ActionType<typeof actions>;

type ValueType = {
  value: number;
};

const initialState: ValueType = {
  value: 0,
};

const valueReducer = createReducer<ValueType, ValueAction>(initialState)
  .handleAction(increaseBy, (state, action) => ({
    value: state.value + action.payload,
  }))
  .handleAction(decreaseBy, (state, action) => ({
    value: state.value - action.payload,
  }));

export default valueReducer;
