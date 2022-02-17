import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseState } from '@appTypes/reduxTypes';
import { Token } from '@appTypes/ClientTypes';
import store, { RootState } from '../store';
import { Dispatch, SetStateAction } from 'react';

const initialState: BaseState = {
  token: undefined,
};

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{
      token: Token, indicator: [boolean, Dispatch<SetStateAction<boolean>>]
    }>) => {
      state.token = action.payload.token;
      action.payload.indicator[1](!action.payload.indicator[0]);
    },
    resetInfoSlice: () => initialState,
  },
});

export const baseActions = baseSlice.actions;

export const baseStates = store.getState().base;

export default baseSlice.reducer;
