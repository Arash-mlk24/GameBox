import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {LoginState} from '@utils/types/ReduxTypes';

const initialState: LoginState = {
  phoneNumber: undefined,
  password: undefined,
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
    resetInfoSlice: () => initialState,
  },
});

export const loginActions = loginSlice.actions;

export const loginStates = (state: RootState) => state.login;

export default loginSlice.reducer;
