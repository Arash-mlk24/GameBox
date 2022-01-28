import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TempState} from '@utils/reduxInterfaces';
import {RootState} from '@reduxStore/store';

const initialState: TempState = {
  pressedOrderId: undefined,
};

export const tempSlice = createSlice({
  name: 'temp',
  initialState,
  reducers: {
    setPressedOrderId: (state, action: PayloadAction<string>) => {
      state.pressedOrderId = action.payload;
    },
    resetInfoSlice: () => initialState,
  },
});

export const {setPressedOrderId, resetInfoSlice} = tempSlice.actions;

export const selectPressedOrderId = (state: RootState) =>
  state.temp.pressedOrderId;

export default tempSlice.reducer;
