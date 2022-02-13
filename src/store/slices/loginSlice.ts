import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store, { RootState } from '../store';
import { LoginState } from '@utils/types/ReduxTypes';
import { Dispatch, SetStateAction } from 'react';

const initialState: LoginState = {
  count: 0,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setCount: (state, action: PayloadAction<{
      count: number, indicator: [boolean, Dispatch<SetStateAction<boolean>>]
    }>) => {
      state.count = action.payload.count;
      action.payload.indicator[1](!action.payload.indicator[0]);
    },
    resetInfoSlice: () => initialState,
  },
});

export const loginActions = loginSlice.actions;

export const loginStates = (state: RootState) => state.login;

export default loginSlice.reducer;
