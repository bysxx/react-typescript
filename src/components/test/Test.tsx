import './Test.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules/index';
import { increaseBy, decreaseBy } from '../../modules/valueReducer';
import { setNickname } from '../../modules/infoReducer';

const Test = () => {
  const dispatch = useDispatch();
  const valueReducer = useSelector((state: RootState) => state.valueReducer);
  const infoReducer = useSelector((state: RootState) => state.infoReducer);

  const addValue = () => {
    dispatch(increaseBy(3));
  };

  const subValue = () => {
    dispatch(decreaseBy(5));
  };

  const handeOnChangeNickname = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setNickname(e.currentTarget.value));
  };

  return (
    <div className={'parent'}>
      <div>
        <button onClick={addValue}>+3</button>
        <button onClick={subValue}>-5</button>
        <div className={'hello'}>{valueReducer.value}</div>
      </div>
      <div>
        <h1>{infoReducer.nickname}</h1>
        <input onChange={(e) => handeOnChangeNickname(e)} />
      </div>
    </div>
  );
};

export default Test;
