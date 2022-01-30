import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {SplashState} from '@utils/types/ReduxTypes';

const initialState: SplashState = {};

const splashSlice = createSlice({
  name: 'splash',
  initialState,
  reducers: {
    resetSplashSlice: () => initialState,
  },
});

export const splashActions = splashSlice.actions;

export const splashStates = (state: RootState) => state.splash;

export default splashSlice.reducer;
