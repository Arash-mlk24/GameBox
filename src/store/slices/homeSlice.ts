import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store, { RootState } from '../store';
import { LoginState } from '@utils/types/ReduxTypes';
import { Dispatch, SetStateAction } from 'react';

const initialState: LoginState = {
    count: 0,
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setCount: (state, action: PayloadAction<{
            count: number, indicator: [boolean, Dispatch<SetStateAction<boolean>>]
        }>) => {
            state.count = action.payload.count;
            action.payload.indicator[1](!action.payload.indicator[0]);
        },
        resetInfoSlice: () => initialState,
    },
});

export const homeActions = homeSlice.actions;

export const homeStates = (state: RootState) => state.home;

export default homeSlice.reducer;
