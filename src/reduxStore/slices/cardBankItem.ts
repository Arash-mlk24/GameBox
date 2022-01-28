import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {cardState} from '@utils/reduxInterfaces';
import {RootState} from '@reduxStore/store';

const initialState: cardState = {
  card: [],
  itemsTransActions: [
    {
      id: '',
      smeId: '',
      customerId: '',
      brokerId: '',
      orderId: '',
      invoiceId: '',
      trackingCode: '',
      createdAt: '',
      payAt: '',
      state: 0,
      refrenceId: '',
      creditCardId: '',
      totalPay: 0,
    },
  ],
};
export const cardBankItem = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setItemCard: (state, action: PayloadAction<any>) => {
      state.card = action.payload;
    },

    setTransActions: (state, action: PayloadAction<any>) => {
      state.itemsTransActions = action.payload;
    },
    resetBankItemSlice: () => initialState,
  },
});

export const {setItemCard, setTransActions, resetBankItemSlice} =
  cardBankItem.actions;

export const selectItem = (state: RootState) => state.cardBankItem.card;

export default cardBankItem.reducer;
