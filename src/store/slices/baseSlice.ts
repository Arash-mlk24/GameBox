import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BaseState} from '@types/reduxTypes';
import {Token} from '@types/ClientTypes';
import {RootState} from '../store';

const initialState: BaseState = {
  token: undefined,
};

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<Token>) => {
      state.token = action.payload;
    },
    resetInfoSlice: () => initialState,
  },
});

export const baseActions = baseSlice.actions;

export const baseStates = (state: RootState) => state.base;

export default baseSlice.reducer;
