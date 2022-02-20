import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import splashReducer from '@store/slices/splashSlice';
import baseReducer from '@store/slices/baseSlice';
import loginReducer from '@store/slices/loginSlice';
import homeReducer from './slices/homeSlice';
import xoTypeSelectionReducer from './slices/xoTypeSelectionSlice';
import xoReducer from './slices/xoSlice';

export const store = configureStore({
  reducer: {
    base: baseReducer,
    splash: splashReducer,
    login: loginReducer,
    home: homeReducer,
    xoTypeSelection: xoTypeSelectionReducer,
    xo: xoReducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'login',
          'home',
          'base',
          'xoTypeSelection',
          'xo'
        ],
        ignoredActionPaths: ['payload'],
      },
    });
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