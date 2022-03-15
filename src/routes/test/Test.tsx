import "./Test.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/index";
import { increaseBy, decreaseBy } from "../../modules/valueReducer";

const Test = () => {
  const dispatch = useDispatch();
  const valueReducer = useSelector((state: RootState) => state.valueReducer);

  const addValue = () => {
    dispatch(increaseBy(3));
  };

  const subValue = () => {
    dispatch(decreaseBy(5));
  };

  return (
    <div className={"parent"}>
      <button onClick={addValue}>+3</button>
      <button onClick={subValue}>-5</button>
      <div className={"hello"}>{valueReducer.value}</div>
    </div>
  );
};

export default Test;
