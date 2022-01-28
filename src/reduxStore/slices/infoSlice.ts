import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InfoState} from '@utils/reduxInterfaces';
import {RootState} from '@reduxStore/store';
import {CustomerDto, ReferalDto, Token} from '@utils/ServerInterfaces';

const initialState: InfoState = {
  token: undefined,
  userInfo: undefined,
  referal: undefined,
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<Token>) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<CustomerDto>) => {
      state.userInfo = action.payload;
    },
    setReferal: (state, action: PayloadAction<ReferalDto>) => {
      state.referal = action.payload;
    },
    resetInfoSlice: () => initialState,
  },
});

export const {setToken, setReferal, resetInfoSlice, setUserInfo} =
  infoSlice.actions;

export const selectToken = (state: RootState) => state.info.token;
export const selectUserInfo = (state: RootState) => state.info.userInfo;
export const selectReferal = (state: RootState) => state.info.referal;

export default infoSlice.reducer;
