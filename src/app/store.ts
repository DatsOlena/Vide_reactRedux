// npm i redux @types/redux
import { configureStore } from '@reduxjs/toolkit';
import amountReducer from '../features/amount';
import goodsReducer from '../features/goods';
import positionReducer from '../features/position'; // <-- add this line

export const store = configureStore({
  reducer: {
    amount: amountReducer,
    goods: goodsReducer,
    position: positionReducer, // <-- add this line
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
