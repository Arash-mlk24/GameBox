import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DumpState, InfoState} from '@utils/reduxInterfaces';
import {RootState} from '@reduxStore/store';

const initialState: DumpState = {
  selectedDumps: undefined,
};

export const dumpSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setSelectedDumps: (state, action: PayloadAction<any>) => {
      state.selectedDumps = action.payload;
    },
    resetDumpSlice: () => initialState,
  },
});

export const {setSelectedDumps, resetDumpSlice} = dumpSlice.actions;

export const selectSelectedDumps = (state: RootState) =>
  state.dump.selectedDumps;

export default dumpSlice.reducer;
