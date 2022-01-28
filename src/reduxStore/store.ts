import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import infoReducer from './slices/infoSlice';
import dumpReducer from './slices/dumpSlice';
import orderTypeReducer from './slices/orderTypeSlice';
import cardBankItem from './slices/cardBankItem';
import tempReducer from './slices/tempSlice';

export const store = configureStore({
  reducer: {
    info: infoReducer,
    dump: dumpReducer,
    orderType: orderTypeReducer,
    cardBankItem: cardBankItem,
    temp: tempReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export default store;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
