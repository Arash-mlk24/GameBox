import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { XOTypeSelectionState } from '@utils/types/ReduxTypes';
import { Dispatch, SetStateAction } from 'react';
import Helper from '@utils/Helper';

const initialState: XOTypeSelectionState = {
    roundsCount: 3,
};

export const xoTypeSelectionSlice = createSlice({
    name: 'xoTypeSelection',
    initialState,
    reducers: {
        setRoundsCount: (state, action: PayloadAction<{
            roundsCount: number, indicator: [boolean, Dispatch<SetStateAction<boolean>>]
        }>) => {
            state.roundsCount = action.payload.roundsCount;
            Helper.getInstance().actOnIndicator(action.payload.indicator!);
        },
        resetInfoSlice: () => initialState,
    },
});

export const xoTypeSelectionActions = xoTypeSelectionSlice.actions;

export const xoTypeSelectionStates = (state: RootState) => state.xoTypeSelection;

export default xoTypeSelectionSlice.reducer;
