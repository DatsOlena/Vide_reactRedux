import { useSelector, useDispatch } from 'react-redux';
import { RootType } from '../app/store';
import { actions } from '../features/amount';


export const Amount = () => {
  const amount = useSelector<RootType, number>(state => state.amount);
  const dispatch = useDispatch();

  const take = (value: number) => {
    dispatch(actions.take(value));
  };

  const add = (value: number) => {
    dispatch(actions.add(value));
  };

  const clear = () => dispatch(actions.clear());

  return (
    <h2 className="amount">
      <span>Amount: {amount}</span>

      <button onClick={() => take(50)}>-50</button>
      <button onClick={() => take(10)}>-10</button>
      <button onClick={clear}>❌</button>
      <button onClick={() => add(10)}>+10</button>
      <button onClick={() => add(50)}>+50</button>
    </h2>
  );
};
