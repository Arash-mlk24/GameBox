import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { XOState } from '@utils/types/ReduxTypes';
import { Dispatch, SetStateAction } from 'react';
import XO from '../../model/games/xo/XO';
import Helper from '@utils/Helper';

const initialState: XOState = {

};

export const xoSlice = createSlice({
    name: 'xo',
    initialState,
    reducers: {
        setXO: (state, action: PayloadAction<{
            xo: XO, indicator?: [boolean, Dispatch<SetStateAction<boolean>>]
        }>) => {
            state.xo = action.payload.xo;
            Helper.getInstance().actOnIndicator(action.payload.indicator!);
        },
        resetInfoSlice: () => initialState,
    },
});

export const xoActions = xoSlice.actions;

export const xoStates = (state: RootState) => state.xo;

export default xoSlice.reducer;
