import {RootState} from '@reduxStore/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {orderTypeState} from '@utils/reduxInterfaces';

const initialState: orderTypeState = {
  key: 1,
  //   title: 'عادی',
  //   isPay: true,
};

export const orderTypeSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setOrderType: (state, action: PayloadAction<any>) => {
      state.key = action.payload;
    },
  },
});

export const {setOrderType} = orderTypeSlice.actions;

export const selectOrderType = (state: RootState) => state.orderType.key;

export default orderTypeSlice.reducer;
